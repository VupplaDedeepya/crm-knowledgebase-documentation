const STORAGE_KEY = 'cx-astra-global-nav-expanded';
const listeners = new Set();

function readExpanded() {
  if (typeof window === 'undefined') {
    return false;
  }
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function writeExpanded(expanded) {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, expanded ? '1' : '0');
  } catch {
    // ignore
  }
}

function syncDom(expanded) {
  if (typeof document === 'undefined') {
    return;
  }
  const width = expanded ? '260px' : '72px';
  document.documentElement.dataset.globalNav = expanded
    ? 'expanded'
    : 'collapsed';
  document.documentElement.style.setProperty(
    '--cx-global-nav-current',
    width,
  );
}

let expanded = false;
let hydrated = false;

export function hydrateGlobalNavStore() {
  if (hydrated || typeof window === 'undefined') {
    return;
  }
  expanded = readExpanded();
  syncDom(expanded);
  hydrated = true;
  listeners.forEach((listener) => listener());
}

export function getGlobalNavExpanded() {
  return expanded;
}

export function subscribeGlobalNav(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function toggleGlobalNav() {
  expanded = !expanded;
  writeExpanded(expanded);
  syncDom(expanded);
  listeners.forEach((listener) => listener());
}

export function setGlobalNavExpanded(next) {
  expanded = Boolean(next);
  writeExpanded(expanded);
  syncDom(expanded);
  listeners.forEach((listener) => listener());
}
