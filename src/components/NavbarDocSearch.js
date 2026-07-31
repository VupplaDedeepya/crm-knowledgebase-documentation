import {useEffect, useMemo, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import {Search, X} from 'lucide-react';
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
  const panelItems = query.trim() ? suggestions : recent;

  const goTo = (entry) => {
    if (!entry?.to) {
      return;
    }
    setRecent(addRecentSearch(entry));
    setQuery('');
    setOpen(false);
    history.push(entry.to);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const result = resolveSearch(query);
    if (result) {
      goTo(result);
    }
  };

  return (
    <div className={styles.root} ref={rootRef}>
      <form className={styles.form} onSubmit={onSubmit} role="search">
        <label className={styles.srOnly} htmlFor="navbar-docs-search">
          Search documentation
        </label>
        <Search className={styles.icon} size={16} strokeWidth={2.2} aria-hidden="true" />
        <input
          id="navbar-docs-search"
          className={styles.input}
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search docs..."
          autoComplete="off"
        />
        {query ? (
          <button
            type="button"
            className={styles.clear}
            aria-label="Clear search"
            onClick={() => setQuery('')}
          >
            <X size={14} strokeWidth={2.3} />
          </button>
        ) : null}
      </form>

      {open && panelItems.length > 0 ? (
        <div className={styles.panel} role="listbox">
          <div className={styles.panelLabel}>
            {query.trim() ? 'Suggestions' : 'Recent searches'}
          </div>
          {panelItems.map((item) => (
            <Link
              key={`${item.to}-${item.label}`}
              className={styles.item}
              to={item.to}
              onClick={(event) => {
                event.preventDefault();
                goTo(item);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
