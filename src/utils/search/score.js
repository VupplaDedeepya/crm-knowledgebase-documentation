import {preprocessQuery, normalizeText} from './preprocess';
import {tokensMatch, textHasToken, tokenInList} from './fuzzy';
import {WEIGHTS} from './config/weights';
import {MUTATING_ACTIONS} from './config/actionMap';

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

/**
 * Normalize a DOC_INDEX entry into the extended schema while
 * remaining backward-compatible with entities/actions/phrases.
 */
export function normalizeDoc(doc) {
  const title = doc.title || doc.label;
  const path = doc.path || doc.to;
  const keywords = unique([
    ...(doc.keywords || []),
    ...(doc.entities || []),
    ...(doc.headings || []),
  ]);
  const aliases = unique([...(doc.aliases || [])]);
  const intents = unique([
    ...(doc.intents || []),
    ...(doc.phrases || []),
  ]);
  const actions = unique([...(doc.actions || [])]).map((action) => {
    const processed = preprocessQuery(action);
    return processed.tokens[0] || normalizeText(action);
  });

  return {
    ...doc,
    title,
    label: title,
    path,
    to: path,
    keywords,
    aliases,
    intents,
    actions,
    headings: doc.headings || [],
    module: doc.module,
    category: doc.category,
    description: doc.description,
    body: doc.body || '',
    readingTime: doc.readingTime,
    recentlyUpdated: Boolean(doc.recentlyUpdated),
  };
}

function phraseMatches(candidate, query) {
  const candidateProcessed = preprocessQuery(candidate);
  if (!candidateProcessed.joined) {
    return false;
  }

  if (
    query.normalized.includes(candidateProcessed.normalized) ||
    query.joined.includes(candidateProcessed.joined)
  ) {
    return true;
  }

  // All candidate tokens appear in the query (order-insensitive).
  if (!candidateProcessed.tokens.length) {
    return false;
  }
  return candidateProcessed.tokens.every(
    (token) =>
      tokenInList(token, query.tokens) || textHasToken(query.joined, token),
  );
}

function scoreFieldMatch(query, values, weight) {
  if (!values?.length) {
    return {score: 0, matched: []};
  }
  const matched = values.filter((value) => phraseMatches(value, query));
  if (!matched.length) {
    return {score: 0, matched: []};
  }
  return {score: weight, matched};
}

export function scoreNormalizedDoc(doc, query) {
  let score = 0;
  const reasons = [];

  const titleProcessed = preprocessQuery(doc.title);
  const titleNorm = titleProcessed.joined || normalizeText(doc.title);

  if (titleNorm && (query.joined === titleNorm || query.normalized === normalizeText(doc.title))) {
    score += WEIGHTS.exactTitle;
    reasons.push('exactTitle');
  } else if (
    titleProcessed.tokens.length &&
    titleProcessed.tokens.every((token) => tokenInList(token, query.tokens))
  ) {
    score += Math.round(WEIGHTS.exactTitle * 0.7);
    reasons.push('titleCovered');
  } else {
    let titleHits = 0;
    for (const token of query.tokens) {
      if (tokenInList(token, titleProcessed.tokens) || textHasToken(titleNorm, token)) {
        titleHits += 1;
        score += WEIGHTS.titleToken;
      }
    }
    if (titleHits) {
      reasons.push('titleToken');
    }
  }

  const intentHit = scoreFieldMatch(query, doc.intents, WEIGHTS.intent);
  score += intentHit.score;
  if (intentHit.matched.length) {
    reasons.push('intent');
  }

  const aliasHit = scoreFieldMatch(query, doc.aliases, WEIGHTS.alias);
  score += aliasHit.score;
  if (aliasHit.matched.length) {
    reasons.push('alias');
  }

  const keywordHit = scoreFieldMatch(query, doc.keywords, WEIGHTS.keyword);
  // Prefer fewer keyword-only hits without intents for broad terms
  if (keywordHit.matched.length) {
    const keywordScore =
      intentHit.matched.length || aliasHit.matched.length
        ? WEIGHTS.keyword
        : Math.round(WEIGHTS.keyword * (0.55 + 0.15 * Math.min(keywordHit.matched.length, 3)));
    score += keywordScore;
    reasons.push('keyword');
  }

  if (doc.module && textHasToken(normalizeText(doc.module), query.joined)) {
    score += WEIGHTS.module;
    reasons.push('module');
  } else if (doc.module) {
    const moduleTokens = preprocessQuery(doc.module).tokens;
    if (moduleTokens.some((token) => tokenInList(token, query.tokens))) {
      score += WEIGHTS.module;
      reasons.push('module');
    }
  }

  if (doc.category) {
    const categoryTokens = preprocessQuery(doc.category).tokens;
    if (
      categoryTokens.some((token) => tokenInList(token, query.tokens)) ||
      phraseMatches(doc.category, query)
    ) {
      score += WEIGHTS.category;
      reasons.push('category');
    }
  }

  if (doc.description && query.tokens.some((token) => textHasToken(normalizeText(doc.description), token))) {
    score += WEIGHTS.description;
    reasons.push('description');
  }

  const headings = doc.headings || [];
  if (headings.length) {
    const headingHit = headings.some((heading) => phraseMatches(heading, query));
    if (headingHit) {
      score += WEIGHTS.heading;
      reasons.push('heading');
    }
  }

  if (doc.body) {
    const bodyNorm = normalizeText(doc.body);
    const bodyTokenHits = query.tokens.filter((token) => textHasToken(bodyNorm, token));
    if (bodyTokenHits.length >= Math.min(2, query.tokens.length) || bodyTokenHits.length === query.tokens.length) {
      score += WEIGHTS.body + bodyTokenHits.length * 4;
      reasons.push('body');
    } else if (bodyTokenHits.length === 1 && query.tokens.length === 1) {
      score += WEIGHTS.body;
      reasons.push('body');
    }

    // Multi-word query phrase found in page body
    if (query.joined.includes(' ') && bodyNorm.includes(query.joined)) {
      score += WEIGHTS.bodyPhrase;
      reasons.push('bodyPhrase');
    } else if (query.matchedPhrases.some((phrase) => bodyNorm.includes(normalizeText(phrase)))) {
      score += WEIGHTS.bodyPhrase;
      reasons.push('bodyPhrase');
    }
  }

  // Phrase bonus for priority / doc intent phrases present in the raw query
  for (const phrase of query.matchedPhrases) {
    if (
      phraseMatches(phrase, {normalized: normalizeText(doc.title), tokens: titleProcessed.tokens, joined: titleNorm}) ||
      (doc.intents || []).some((intent) => normalizeText(intent).includes(normalizeText(phrase))) ||
      (doc.aliases || []).some((alias) => normalizeText(alias).includes(normalizeText(phrase))) ||
      (doc.keywords || []).some((keyword) => normalizeText(keyword).includes(normalizeText(phrase))) ||
      (doc.body && normalizeText(doc.body).includes(normalizeText(phrase)))
    ) {
      score += WEIGHTS.phraseBonus;
      reasons.push('phrase');
      break;
    }
  }

  // Action + entity combo: query has a mutating action and doc shares that action + a keyword
  const queryActions = query.tokens.filter((token) => MUTATING_ACTIONS.has(token));
  if (queryActions.length) {
    const docActionHit = queryActions.some(
      (action) =>
        tokenInList(action, doc.actions || []) ||
        (doc.intents || []).some((intent) => preprocessQuery(intent).tokens.includes(action)),
    );
    const entityHit =
      keywordHit.matched.length > 0 ||
      titleProcessed.tokens.some((token) => tokenInList(token, query.tokens));

    if (docActionHit && entityHit) {
      score += WEIGHTS.actionEntityCombo;
      reasons.push('actionEntity');
    } else if (!entityHit && docActionHit) {
      // Penalize generic "create/add" matches without the entity
      score -= 25;
    }
  }

  // Soft fuzzy leftover tokens
  for (const token of query.tokens) {
    if (token.length < 4) {
      continue;
    }
    const corpus = [
      titleNorm,
      ...(doc.keywords || []).map(normalizeText),
      ...(doc.aliases || []).map(normalizeText),
    ].join(' ');
    if (textHasToken(corpus, token)) {
      score += WEIGHTS.fuzzyToken;
    }
  }

  // Prefer specific howto/configure docs when the query is action-heavy
  if (queryActions.length && doc.kind === 'definition') {
    score -= 20;
  }

  return {
    score,
    reasons,
    matchedIntents: intentHit.matched,
    matchedAliases: aliasHit.matched,
    matchedKeywords: keywordHit.matched,
  };
}
