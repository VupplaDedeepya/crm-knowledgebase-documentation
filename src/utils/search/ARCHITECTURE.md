# CX Astra Documentation Search Architecture

Local, intent-aware search for this Docusaurus site. No Algolia, Meilisearch, Typesense, embeddings, or cloud AI APIs.

## Entry points

| Piece | Path |
| --- | --- |
| Document index | `src/utils/docSearch.js` → `DOC_INDEX` |
| Public API | `searchDocs`, `suggestSearches`, `resolveSearch`, `getPopularSearches` |
| Engine | `src/utils/search/engine.js` |
| Config | `src/utils/search/config/*` |
| UI | `src/components/DocSearch/*` |

Hero and Navbar both render `DocSearchBox`, which calls the same API.

## Content coverage

Search merges two sources:

1. **Curated `DOC_INDEX`** — intents, aliases, and high-quality metadata for key guides.
2. **Generated content index** — built from every `docs/**/*.md(x)` file (title, description, headings, body text).

Rebuild the generated index after adding/editing docs:

```bash
npm run index:docs
```

`npm start` and `npm run build` run this automatically via `prestart` / `prebuild`.

## Adding a new document

Add one object to `DOC_INDEX` (legacy fields still work):

```js
{
  label: 'Roles',                    // title shown in results
  to: '/docs/user-management/roles', // Docusaurus path
  kind: 'configure',                 // definition | howto | configure
  module: 'Administration',          // optional; inferred from path if omitted
  category: 'User Management',
  description: 'Configure user Roles and Permissions...',
  readingTime: '7 min',              // optional
  recentlyUpdated: false,            // optional badge
  keywords: ['role', 'roles', 'permission', 'rbac'],
  aliases: ['user roles', 'role management'],
  intents: [
    'create role',
    'add role',
    'how do i add a new role',
    'change permissions',
  ],
  // Backward compatible:
  entities: ['role', 'roles'],
  actions: ['create', 'add', 'configure'],
  phrases: ['create role', 'manage roles'],
}
```

`phrases` / `entities` / `actions` are merged into intents / keywords automatically.

## Query pipeline

1. **Preprocess** (`preprocess.js`) — lowercase, strip punctuation, drop stop words, normalize actions, expand synonyms.
2. **Score** (`score.js`) — weighted field matches (title, intents, aliases, keywords, module, category, description, body) plus phrase and action+entity bonuses.
3. **Fuzzy** (`fuzzy.js`) — small Levenshtein distance for typos (`contcts` → contacts).
4. **Rank** — sort by score, dedupe by path, mark **Best Match** when the top hit is clearly ahead.
5. **Suggest** — if nothing ranks well, return soft “Did you mean” titles.

## Config files (edit these, not the engine)

- `stopWords.js` — filler words removed from queries
- `actionMap.js` — `add`/`new` → `create`, `change` → `edit`, …
- `synonyms.js` — `customer` → `contact`, `kb` → `knowledgebase`, …
- `weights.js` — ranking weights and best-match thresholds
- `priorityPhrases.js` — multi-word phrases that boost score
- `popularSearches.js` — empty-state popular links

## UI behavior

- Debounce **150ms**
- Dropdown portaled to `document.body` (no hero clipping)
- Empty focus → Popular + Recent (8 in `localStorage`)
- Results → Best Match / Other Results
- No spinner (search is local)
- Highlight prefers matched phrases over every repeated token

## Do not

- Replace this with a hosted search provider
- Add embedding / LLM ranking in production paths
- Remove `DOC_INDEX` without migrating metadata
