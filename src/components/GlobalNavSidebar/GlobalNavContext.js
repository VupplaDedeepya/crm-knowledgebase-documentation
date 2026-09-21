import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const STORAGE_KEY = 'cx-astra-global-nav-expanded';
const GlobalNavContext = createContext(null);

function syncDocumentNavState(expanded) {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.dataset.globalNav = expanded
    ? 'expanded'
    : 'collapsed';
}

function readExpandedPreference() {
  if (typeof window === 'undefined') {
    return false;
  }
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function writeExpandedPreference(expanded) {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, expanded ? '1' : '0');
  } catch {
    // ignore
  }
}

export function GlobalNavProvider({children}) {
  const [expanded, setExpanded] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const next = readExpandedPreference();
    setExpanded(next);
    syncDocumentNavState(next);
    setReady(true);
  }, []);

  const toggle = useCallback(() => {
    setExpanded((value) => {
      const next = !value;
      writeExpandedPreference(next);
      syncDocumentNavState(next);
      return next;
    });
  }, []);

  const expand = useCallback(() => {
    setExpanded(true);
    writeExpandedPreference(true);
    syncDocumentNavState(true);
  }, []);

  const collapse = useCallback(() => {
    setExpanded(false);
    writeExpandedPreference(false);
    syncDocumentNavState(false);
  }, []);

  const value = useMemo(
    () => ({expanded, ready, toggle, expand, collapse}),
    [expanded, ready, toggle, expand, collapse],
  );

  return (
    <GlobalNavContext.Provider value={value}>
      {children}
    </GlobalNavContext.Provider>
  );
}

const FALLBACK_NAV = {
  expanded: false,
  ready: false,
  toggle: () => {},
  expand: () => {},
  collapse: () => {},
};

export function useGlobalNav() {
  return useContext(GlobalNavContext) ?? FALLBACK_NAV;
}
