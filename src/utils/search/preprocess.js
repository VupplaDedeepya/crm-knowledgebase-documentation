import {STOP_WORDS} from './config/stopWords';
import {ACTION_MAP} from './config/actionMap';
import {SYNONYMS, SYNONYM_PHRASES} from './config/synonyms';
import {PRIORITY_PHRASES} from './config/priorityPhrases';

export function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function singularize(token) {
  if (!token || token.length < 3) {
    return token;
  }
  if (token.endsWith('ies') && token.length > 4) {
    return `${token.slice(0, -3)}y`;
  }
  if (token.endsWith('ses') || token.endsWith('xes') || token.endsWith('zes')) {
    return token.slice(0, -2);
  }
  if (token.endsWith('s') && !token.endsWith('ss') && token.length > 3) {
    return token.slice(0, -1);
  }
  return token;
}

function applySynonymPhrases(text) {
  let next = text;
  for (const [phrase, canonical] of SYNONYM_PHRASES) {
    next = next.replace(new RegExp(`\\b${escapeRegExp(phrase)}\\b`, 'g'), canonical);
  }
  return next;
}

function mapToken(token) {
  const action = ACTION_MAP[token];
  if (action) {
    return action;
  }
  const synonym = SYNONYMS[token];
  if (synonym) {
    return synonym;
  }
  return singularize(token);
}

/**
 * Preprocess a raw user query into searchable tokens and phrases.
 */
export function preprocessQuery(query) {
  const raw = String(query || '').trim();
  let normalized = normalizeText(raw);
  normalized = applySynonymPhrases(normalized);

  const rawTokens = normalized.split(' ').filter(Boolean);
  const meaningful = rawTokens.filter((token) => !STOP_WORDS.has(token));

  const tokens = [];
  const seen = new Set();
  for (const token of meaningful) {
    const mapped = mapToken(token);
    if (!mapped || STOP_WORDS.has(mapped)) {
      continue;
    }
    if (!seen.has(mapped)) {
      seen.add(mapped);
      tokens.push(mapped);
    }
  }

  const joined = tokens.join(' ');
  const matchedPhrases = PRIORITY_PHRASES.filter((phrase) => {
    const phraseNorm = normalizeText(applySynonymPhrases(phrase));
    return (
      normalized.includes(phraseNorm) ||
      joined.includes(normalizeText(applySynonymPhrases(phrase)).split(' ').map(mapToken).join(' '))
    );
  });

  return {
    raw,
    normalized,
    tokens,
    joined,
    matchedPhrases,
    hasMutatingAction: tokens.some((token) =>
      Object.values(ACTION_MAP).includes(token)
        ? ['create', 'edit', 'delete', 'assign', 'invite', 'configure', 'upload', 'import', 'export', 'manage', 'convert'].includes(
            token,
          )
        : false,
    ),
  };
}

export function preprocessPhrase(phrase) {
  return preprocessQuery(phrase);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
