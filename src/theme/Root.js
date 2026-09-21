import {hydrateGlobalNavStore} from '@site/src/components/GlobalNavSidebar/globalNavStore';

if (typeof window !== 'undefined') {
  hydrateGlobalNavStore();
}

export default function Root({children}) {
  return children;
}
