import {useEffect, useMemo, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import {History, Search, X} from 'lucide-react';
import {resolveSearch, suggestSearches} from '@site/src/utils/docSearch';

import styles from './NavbarDocSearch.module.css';

const RECENT_SEARCHES_KEY = 'cx-astra-recent-searches';
const MAX_RECENT_SEARCHES = 5;

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

function addRecentSearch(entry) {
  const label = entry.label.trim();
  if (!label) {
    return loadRecentSearches();
  }
  const next = [
    {label, to: entry.to},
    ...loadRecentSearches().filter(
      (item) =>
        item.to !== entry.to && item.label.toLowerCase() !== label.toLowerCase(),
    ),
  ].slice(0, MAX_RECENT_SEARCHES);
  return persistRecentSearches(next);
}

export default function NavbarDocSearch() {
  const history = useHistory();
  const rootRef = useRef(null);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [recent, setRecent] = useState([]);
  const [noResultMessage, setNoResultMessage] = useState('');

  useEffect(() => {
    setRecent(loadRecentSearches());
  }, []);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  const suggestions = useMemo(() => suggestSearches(query, 6), [query]);
  const trimmedQuery = query.trim();
  const showingRecent = !trimmedQuery && recent.length > 0;
  const panelItems = trimmedQuery ? suggestions : recent;
  const showNoResults =
    Boolean(trimmedQuery) && suggestions.length === 0 && (open || Boolean(noResultMessage));

  const goTo = (entry) => {
    if (!entry?.to) {
      return;
    }
    setRecent(addRecentSearch(entry));
    setQuery('');
    setNoResultMessage('');
    setOpen(false);
    history.push(entry.to);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!trimmedQuery) {
      return;
    }
    const result = resolveSearch(query);
    if (result) {
      goTo(result);
      return;
    }
    setNoResultMessage(
      `No docs found for “${trimmedQuery}”. Try another CRM topic or keyword.`,
    );
    setOpen(true);
  };

  const onClearRecent = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setRecent(clearRecentSearches());
  };

  const onRemoveRecent = (event, entry) => {
    event.preventDefault();
    event.stopPropagation();
    setRecent(removeRecentSearch(entry));
  };

  return (
    <div className={styles.root} ref={rootRef}>
      <form className={styles.form} onSubmit={onSubmit} role="search">
        <label className={styles.srOnly} htmlFor="navbar-docs-search">
          Search documentation
        </label>
        <Search className={styles.icon} size={18} strokeWidth={2.2} aria-hidden="true" />
        <input
          id="navbar-docs-search"
          className={styles.input}
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setNoResultMessage('');
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search for guides, modules, and more..."
          autoComplete="off"
        />
        {query ? (
          <button
            type="button"
            className={styles.clear}
            aria-label="Clear search"
            onClick={() => {
              setQuery('');
              setNoResultMessage('');
            }}
          >
            <X size={16} strokeWidth={2.3} />
          </button>
        ) : null}
      </form>

      {open && (panelItems.length > 0 || showNoResults) ? (
        <div className={styles.panel} role="listbox">
          {showNoResults ? (
            <div className={styles.emptyState} role="status">
              <p className={styles.emptyTitle}>No matching docs</p>
              <p className={styles.emptyText}>
                {noResultMessage ||
                  `We couldn’t find documentation for “${trimmedQuery}”. Try a module name or action like “create lead”.`}
              </p>
            </div>
          ) : (
            <>
              <div className={styles.panelHeader}>
                <span className={styles.panelLabel}>
                  {trimmedQuery ? 'Suggestions' : 'Recent searches'}
                </span>
                {showingRecent ? (
                  <button
                    type="button"
                    className={styles.clearRecent}
                    onClick={onClearRecent}
                  >
                    Clear
                  </button>
                ) : null}
              </div>
              {panelItems.map((item) => (
                <div key={`${item.to}-${item.label}`} className={styles.itemRow}>
                  <Link
                    className={styles.item}
                    to={item.to}
                    onClick={(event) => {
                      event.preventDefault();
                      goTo(item);
                    }}
                  >
                    {showingRecent ? (
                      <History
                        className={styles.itemIcon}
                        size={15}
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                    ) : (
                      <Search
                        className={styles.itemIcon}
                        size={15}
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                    )}
                    <span className={styles.itemLabel}>{item.label}</span>
                  </Link>
                  {showingRecent ? (
                    <button
                      type="button"
                      className={styles.removeItem}
                      aria-label={`Remove ${item.label} from recent searches`}
                      onClick={(event) => onRemoveRecent(event, item)}
                    >
                      <X size={14} strokeWidth={2.3} />
                    </button>
                  ) : null}
                </div>
              ))}
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
