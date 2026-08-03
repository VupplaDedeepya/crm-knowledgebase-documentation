import {useCallback, useEffect, useId, useMemo, useRef, useState} from 'react';
import {useHistory} from '@docusaurus/router';
import {
  getPopularSearches,
  resolveSearch,
  searchDocs,
} from '@site/src/utils/docSearch';
import SearchDropdown from './SearchDropdown';
import SearchInput from './SearchInput';
import styles from './DocSearch.module.css';

const RECENT_SEARCHES_KEY = 'cx-astra-recent-searches';
const MAX_RECENT_SEARCHES = 8;
const DEBOUNCE_MS = 150;
const MIN_QUERY_LENGTH = 2;
const SUGGESTION_LIMIT = 8;

function loadRecentSearches() {
  if (typeof window === 'undefined') {
    return [];
  }
  try {
    const raw = window.localStorage.getItem(RECENT_SEARCHES_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persistRecentSearches(items) {
  if (typeof window === 'undefined') {
    return items;
  }
  window.localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(items));
  return items;
}

function clearRecentSearches() {
  return persistRecentSearches([]);
}

function removeRecentSearch(entry) {
  const next = loadRecentSearches().filter(
    (item) =>
      !(
        item.to === entry.to &&
        item.label.toLowerCase() === entry.label.toLowerCase()
      ),
  );
  return persistRecentSearches(next);
}

export function addRecentSearch(entry) {
  const label = (entry.label || entry.title || '').trim();
  if (!label || !entry.to) {
    return loadRecentSearches();
  }
  const next = [
    {label, to: entry.to, isRecent: true},
    ...loadRecentSearches().filter(
      (item) =>
        item.to !== entry.to && item.label.toLowerCase() !== label.toLowerCase(),
    ),
  ].slice(0, MAX_RECENT_SEARCHES);
  return persistRecentSearches(next);
}

/**
 * Shared documentation search used by Hero and Navbar.
 * Reuses DOC_INDEX via docSearch.js — no third-party search provider.
 */
export default function DocSearchBox({
  id: idProp,
  variant = 'hero',
  placeholder = 'Search for guides, modules, and more...',
  className,
}) {
  const history = useHistory();
  const generatedId = useId();
  const inputId = idProp || `docs-search-${generatedId}`;
  const listboxId = `${inputId}-listbox`;

  const rootRef = useRef(null);
  const dropdownRef = useRef(null);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [recent, setRecent] = useState([]);

  const popularItems = useMemo(() => getPopularSearches(), []);

  useEffect(() => {
    setRecent(loadRecentSearches().map((item) => ({...item, isRecent: true})));
  }, []);

  useEffect(() => {
    const onPointerDown = (event) => {
      const target = event.target;
      const inRoot = rootRef.current?.contains(target);
      const inDropdown = dropdownRef.current?.contains(target);
      if (!inRoot && !inDropdown) {
        setOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  const trimmedDebounced = debouncedQuery.trim();
  const canSuggest = trimmedDebounced.length >= MIN_QUERY_LENGTH;

  const searchResult = useMemo(() => {
    if (!canSuggest) {
      return {results: [], didYouMean: [], hasBestMatch: false};
    }
    return searchDocs(trimmedDebounced, SUGGESTION_LIMIT);
  }, [canSuggest, trimmedDebounced]);

  const mode = !open
    ? 'closed'
    : !trimmedDebounced
      ? 'idle'
      : canSuggest && searchResult.results.length
        ? 'results'
        : canSuggest
          ? 'empty'
          : 'idle';

  const flatItems = useMemo(() => {
    if (mode === 'idle') {
      return [...popularItems, ...recent];
    }
    if (mode === 'results') {
      return searchResult.results;
    }
    if (mode === 'empty') {
      return searchResult.didYouMean;
    }
    return [];
  }, [mode, popularItems, recent, searchResult]);

  const dropdownOpen =
    open &&
    (mode === 'idle'
      ? popularItems.length > 0 || recent.length > 0
      : mode === 'results' || mode === 'empty');

  useEffect(() => {
    setActiveIndex(-1);
  }, [debouncedQuery, mode]);

  useEffect(() => {
    if (activeIndex < 0 || !listRef.current) {
      return;
    }
    const options = listRef.current.querySelectorAll('[role="option"]');
    options[activeIndex]?.scrollIntoView({block: 'nearest'});
  }, [activeIndex]);

  const goTo = useCallback(
    (entry) => {
      if (!entry?.to) {
        return;
      }
      setRecent(addRecentSearch(entry));
      setQuery('');
      setDebouncedQuery('');
      setOpen(false);
      setActiveIndex(-1);
      history.push(entry.to);
    },
    [history],
  );

  const onQueryChange = (event) => {
    const next = event.target.value;
    setQuery(next);
    setOpen(true);
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      setDebouncedQuery(next);
    }, DEBOUNCE_MS);
  };

  const onClear = () => {
    setQuery('');
    setDebouncedQuery('');
    setActiveIndex(-1);
    setOpen(true);
    inputRef.current?.focus();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (dropdownOpen && activeIndex >= 0 && flatItems[activeIndex]) {
      goTo(flatItems[activeIndex]);
      return;
    }
    const trimmed = query.trim();
    if (!trimmed) {
      return;
    }
    const result = resolveSearch(trimmed);
    if (result) {
      goTo(result);
      return;
    }
    setDebouncedQuery(trimmed);
    setOpen(true);
    setActiveIndex(-1);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      setActiveIndex(-1);
      return;
    }

    if (event.key === 'Tab') {
      setOpen(false);
      setActiveIndex(-1);
      return;
    }

    if (!dropdownOpen || !flatItems.length) {
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((current) =>
        current < flatItems.length - 1 ? current + 1 : 0,
      );
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((current) =>
        current <= 0 ? flatItems.length - 1 : current - 1,
      );
    }
  };

  const rootClass = [
    styles.root,
    variant === 'navbar' ? styles.rootNavbar : styles.rootHero,
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClass} ref={rootRef}>
      <form className={styles.form} onSubmit={onSubmit} role="search">
        <label className={styles.srOnly} htmlFor={inputId}>
          Search documentation
        </label>
        <SearchInput
          id={inputId}
          value={query}
          onChange={onQueryChange}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          onClear={onClear}
          placeholder={placeholder}
          iconSize={variant === 'navbar' ? 18 : 20}
          clearSize={variant === 'navbar' ? 16 : 18}
          inputRef={inputRef}
          expanded={dropdownOpen}
          listboxId={listboxId}
          activeOptionId={
            activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
          }
        />
      </form>

      <SearchDropdown
        id={listboxId}
        open={dropdownOpen}
        query={trimmedDebounced}
        mode={mode === 'closed' ? 'idle' : mode}
        resultItems={searchResult.results}
        popularItems={popularItems}
        recentItems={recent}
        didYouMean={searchResult.didYouMean}
        hasBestMatch={searchResult.hasBestMatch}
        activeIndex={activeIndex}
        onSelect={goTo}
        onClearRecent={() => setRecent(clearRecentSearches())}
        onRemoveRecent={(entry) => setRecent(removeRecentSearch(entry))}
        listRef={listRef}
        dropdownRef={dropdownRef}
        anchorRef={rootRef}
        variant={variant}
      />
    </div>
  );
}
