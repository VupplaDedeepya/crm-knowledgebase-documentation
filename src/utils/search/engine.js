import {preprocessQuery, normalizeText} from './preprocess';
import {scoreNormalizedDoc, normalizeDoc} from './score';
import {tokensMatch, textHasToken} from './fuzzy';
import {MIN_MATCH_SCORE, BEST_MATCH} from './config/weights';
import {POPULAR_SEARCHES} from './config/popularSearches';
import {GENERATED_CONTENT_INDEX} from './generatedContentIndex';

/**
 * Merge curated DOC_INDEX with generated page content.
 * Curated intents/aliases win; generated body/headings fill coverage gaps.
 */
export function mergeSearchIndexes(curatedIndex = []) {
  const byPath = new Map();

  for (const generated of GENERATED_CONTENT_INDEX) {
    byPath.set(generated.to, {...generated});
  }

  for (const curated of curatedIndex) {
    const path = curated.to || curated.path;
    if (!path) continue;
    const existing = byPath.get(path) || {};
    byPath.set(path, {
      ...existing,
      ...curated,
      to: path,
      label: curated.label || curated.title || existing.label || existing.title,
      title: curated.title || curated.label || existing.title || existing.label,
      description: curated.description || existing.description,
      keywords: uniqueList([
        ...(existing.keywords || []),
        ...(curated.keywords || []),
        ...(curated.entities || []),
      ]),
      aliases: uniqueList([...(existing.aliases || []), ...(curated.aliases || [])]),
      intents: uniqueList([
        ...(existing.intents || []),
        ...(curated.intents || []),
        ...(curated.phrases || []),
      ]),
      phrases: uniqueList([...(existing.phrases || []), ...(curated.phrases || [])]),
      entities: uniqueList([...(existing.entities || []), ...(curated.entities || [])]),
      actions: uniqueList([...(existing.actions || []), ...(curated.actions || [])]),
      headings: existing.headings || curated.headings || [],
      body: existing.body || curated.body || '',
      source: existing.source === 'generated' ? 'merged' : curated.source || 'curated',
    });
  }

  return [...byPath.values()];
}

function uniqueList(items) {
  return [...new Set(items.filter(Boolean))];
}

function inferModuleCategory(doc) {
  if (doc.module && doc.category) {
    return {module: doc.module, category: doc.category};
  }
  const path = doc.to || doc.path || '';
  if (path.includes('/Leads-Module') || path.includes('/leads-module')) {
    return {module: 'CRM Essentials', category: 'Leads'};
  }
  if (path.includes('/Deals-Module') || path.includes('/deal-module')) {
    return {module: 'CRM Essentials', category: 'Deals'};
  }
  if (path.includes('/Contacts-Module')) {
    return {module: 'CRM Essentials', category: 'Contacts'};
  }
  if (path.includes('/Organizations-Module')) {
    return {module: 'CRM Essentials', category: 'Organizations'};
  }
  if (path.includes('/Activities-Module')) {
    return {module: 'CRM Essentials', category: 'Activities'};
  }
  if (path.includes('/Calendar-Module')) {
    return {module: 'CRM Essentials', category: 'Calendar'};
  }
  if (path.includes('/PulseChannelIntegrations')) {
    return {module: 'Pulse Channel Integrations', category: 'Channels'};
  }
  if (path.includes('/Pulse-Module') || path.includes('/Pulse-Settings') || path === '/docs/pulse') {
    return {module: 'Pulse', category: 'Pulse'};
  }
  if (path.includes('/Automation') || path === '/docs/automation') {
    return {module: 'Automation', category: 'Workflows'};
  }
  if (path.includes('/user-management') || path === '/docs/administration') {
    return {module: 'Administration', category: 'User Management'};
  }
  if (path.includes('/Organization/')) {
    return {module: 'Administration', category: 'Organization'};
  }
  if (path.includes('/Configure')) {
    return {module: 'Administration', category: 'Configure'};
  }
  if (path.includes('/Integrations') || path === '/docs/integrations') {
    return {module: 'Pulse Channel Integrations', category: 'Integrations'};
  }
  if (path === '/docs/developer') {
    return {module: 'Developer Resources', category: 'Developer'};
  }
  if (path === '/docs/crm-essentials') {
    return {module: 'CRM Essentials', category: 'Overview'};
  }
  if (path.includes('/onboarding') || path.includes('/profile-settings') || path.includes('/FirstCRMSetup')) {
    return {module: 'Getting Started', category: 'Onboarding'};
  }
  if (path.includes('/navigation')) {
    return {module: 'Getting Started', category: 'Navigation'};
  }
  if (path.includes('/intro')) {
    return {module: 'Getting Started', category: 'Introduction'};
  }
  return {module: 'Documentation', category: 'Guides'};
}

function inferDescription(doc) {
  if (doc.description) {
    return doc.description;
  }
  const {category} = inferModuleCategory(doc);
  const kind = doc.kind || 'guide';
  const title = (doc.title || doc.label || '').replace(/ Overview$/i, '').toLowerCase();
  if (kind === 'definition') {
    return `Learn what ${title} is and how it works in CX Astra CRM.`;
  }
  if (kind === 'howto') {
    return `Step-by-step guide for ${title} in the ${category} module.`;
  }
  if (kind === 'configure') {
    return `Configure ${title} settings and options in CX Astra.`;
  }
  return `Documentation for ${doc.title || doc.label} in CX Astra CRM.`;
}

function inferIconKey(doc) {
  const path = doc.to || doc.path || '';
  if (path.includes('Lead')) return 'leads';
  if (path.includes('Deal') || path.includes('Configure/Deals')) return 'deals';
  if (path.includes('Contact')) return 'contacts';
  if (path.includes('Organization')) return 'organizations';
  if (path.includes('Activit')) return 'activities';
  if (path.includes('Calendar')) return 'calendar';
  if (path.includes('Pulse') || path.includes('KnowledgeBase')) return 'pulse';
  if (path.includes('Automation') || path.includes('Workflow') || path.includes('Sequence')) {
    return 'automation';
  }
  if (path.includes('user-management') || path.includes('Settings') || path.includes('Configure')) {
    return 'settings';
  }
  if (path.includes('Integration')) return 'integrations';
  return 'docs';
}

function enrichResult(doc, extras = {}) {
  const {module, category} = inferModuleCategory(doc);
  return {
    label: doc.title || doc.label,
    title: doc.title || doc.label,
    to: doc.to || doc.path,
    score: doc.score,
    module,
    category,
    breadcrumb: `${module} > ${category}`,
    description: inferDescription(doc),
    iconKey: inferIconKey(doc),
    readingTime: doc.readingTime || null,
    recentlyUpdated: Boolean(doc.recentlyUpdated),
    isBestMatch: Boolean(extras.isBestMatch),
    matchPhrases: extras.matchPhrases || [],
    ...extras,
  };
}

function buildMatchPhrases(doc, query) {
  const phrases = [];
  for (const intent of doc.matchedIntents || []) {
    phrases.push(intent);
  }
  for (const alias of doc.matchedAliases || []) {
    phrases.push(alias);
  }
  if (query.matchedPhrases?.length) {
    phrases.push(...query.matchedPhrases);
  }
  // Prefer multi-word phrases, then significant tokens
  const unique = [...new Set(phrases.map((p) => normalizeText(p)).filter(Boolean))];
  const multi = unique.filter((p) => p.includes(' '));
  if (multi.length) {
    return multi.slice(0, 4);
  }
  return query.tokens.filter((t) => t.length > 2).slice(0, 3);
}

function isBestMatch(ranked) {
  if (!ranked.length) {
    return false;
  }
  const top = ranked[0];
  if (top.score < BEST_MATCH.minScore) {
    return false;
  }
  if (ranked.length === 1) {
    return true;
  }
  const second = ranked[1];
  return (
    top.score - second.score >= BEST_MATCH.minGap ||
    top.score >= second.score * BEST_MATCH.minRatio
  );
}

const cache = new Map();

function rankDocs(index, queryText) {
  const trimmed = String(queryText || '').trim();
  if (!trimmed) {
    return [];
  }

  const cacheKey = trimmed.toLowerCase();
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const query = preprocessQuery(trimmed);
  if (!query.tokens.length && !query.matchedPhrases.length) {
    cache.set(cacheKey, []);
    return [];
  }

  const ranked = index
    .map((raw) => {
      const doc = normalizeDoc({
        ...raw,
        ...inferModuleCategory(raw),
        description: raw.description || inferDescription(raw),
      });
      const scored = scoreNormalizedDoc(doc, query);
      return {
        ...doc,
        score: scored.score,
        matchedIntents: scored.matchedIntents,
        matchedAliases: scored.matchedAliases,
        matchedKeywords: scored.matchedKeywords,
        reasons: scored.reasons,
      };
    })
    .filter((doc) => doc.score >= MIN_MATCH_SCORE)
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));

  // Deduplicate same path keeping highest score
  const seen = new Set();
  const deduped = [];
  for (const doc of ranked) {
    const key = doc.to;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    deduped.push(doc);
  }

  if (cache.size > 200) {
    cache.clear();
  }
  cache.set(cacheKey, deduped);
  return deduped;
}

function suggestRelated(index, queryText, limit = 4) {
  const query = preprocessQuery(queryText);
  if (!query.tokens.length) {
    return [];
  }

  const soft = index
    .map((raw) => {
      const doc = normalizeDoc({
        ...raw,
        ...inferModuleCategory(raw),
      });
      let softScore = 0;
      const titleTokens = preprocessQuery(doc.title).tokens;
      for (const token of query.tokens) {
        if (titleTokens.some((t) => tokensMatch(t, token))) {
          softScore += 30;
        }
        if ((doc.keywords || []).some((k) => textHasToken(normalizeText(k), token))) {
          softScore += 20;
        }
        if ((doc.aliases || []).some((a) => textHasToken(normalizeText(a), token))) {
          softScore += 25;
        }
      }
      return {...doc, score: softScore};
    })
    .filter((doc) => doc.score > 0)
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));

  const seen = new Set();
  const out = [];
  for (const doc of soft) {
    if (seen.has(doc.to)) continue;
    seen.add(doc.to);
    out.push(enrichResult(doc));
    if (out.length >= limit) break;
  }
  return out;
}

/**
 * Full search API used by the UI.
 */
export function createSearchEngine(DOC_INDEX) {
  const searchIndex = mergeSearchIndexes(DOC_INDEX);

  function searchDocs(query, limit = 8) {
    const ranked = rankDocs(searchIndex, query);
    const queryProcessed = preprocessQuery(query);
    const best = isBestMatch(ranked);

    const results = ranked.slice(0, limit).map((doc, index) =>
      enrichResult(doc, {
        isBestMatch: best && index === 0,
        matchPhrases: buildMatchPhrases(doc, queryProcessed),
      }),
    );

    const didYouMean =
      results.length === 0
        ? suggestRelated(searchIndex, query, 4)
        : ranked[0]?.score < BEST_MATCH.minScore
          ? suggestRelated(searchIndex, query, 4)
          : [];

    return {
      results,
      didYouMean,
      hasBestMatch: best && results.length > 0,
      query: queryProcessed,
    };
  }

  function resolveSearch(query) {
    const {results} = searchDocs(query, 1);
    return results[0] || null;
  }

  function suggestSearches(query, limit = 8) {
    return searchDocs(query, limit).results;
  }

  function getPopularSearches() {
    return POPULAR_SEARCHES.map((item) => ({
      ...item,
      title: item.label,
      isPopular: true,
    }));
  }

  return {
    searchDocs,
    resolveSearch,
    suggestSearches,
    getPopularSearches,
    preprocessQuery,
    clearSearchCache: () => cache.clear(),
    getIndexSize: () => searchIndex.length,
  };
}
