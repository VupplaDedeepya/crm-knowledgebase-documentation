import {useCallback, useEffect, useSyncExternalStore} from 'react';
import {
  getGlobalNavExpanded,
  hydrateGlobalNavStore,
  subscribeGlobalNav,
  toggleGlobalNav,
} from './globalNavStore';

export function useGlobalNav() {
  useEffect(() => {
    hydrateGlobalNavStore();
  }, []);

  const expanded = useSyncExternalStore(
    subscribeGlobalNav,
    getGlobalNavExpanded,
    () => false,
  );

  const toggle = useCallback(() => {
    hydrateGlobalNavStore();
    toggleGlobalNav();
  }, []);

  return {expanded, ready: true, toggle};
}
