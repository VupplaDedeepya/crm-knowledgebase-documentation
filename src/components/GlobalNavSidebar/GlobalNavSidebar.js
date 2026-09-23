import {useEffect} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLocation} from '@docusaurus/router';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import {GLOBAL_NAV_GROUPS} from './navItems';
import {hydrateGlobalNavStore} from './globalNavStore';
import {useGlobalNav} from './useGlobalNav';
import styles from './styles.module.css';

function isNavItemActive(pathname, item) {
  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  const prefixes = item.match || [item.to.replace(/\/$/, '')];
  return prefixes.some((prefix) => {
    const normalizedPrefix = prefix.replace(/\/$/, '');
    return (
      normalizedPath === normalizedPrefix ||
      normalizedPath.startsWith(`${normalizedPrefix}/`)
    );
  });
}

export default function GlobalNavSidebar() {
  const location = useLocation();
  const logoSrc = useBaseUrl('/img/logo.svg');
  const {expanded, toggle} = useGlobalNav();

  useEffect(() => {
    hydrateGlobalNavStore();
  }, []);

  return (
    <aside
      id="cx-astra-global-nav"
      className={`${styles.sidebar} ${expanded ? styles.sidebarExpanded : styles.sidebarCollapsed}`}
      aria-label="Global module navigation"
    >
      <div className={styles.header}>
        <Link to="/" className={styles.brand} aria-label="CX Astra home">
          <img
            src={logoSrc}
            alt=""
            className={styles.brandLogo}
            width={38}
            height={38}
          />
          <span className={styles.brandTitle}>CX Astra</span>
        </Link>
      </div>

      <nav className={styles.nav}>
        {GLOBAL_NAV_GROUPS.map((group) => (
          <div key={group.label} className={styles.group}>
            <p className={styles.groupLabel}>{group.label}</p>
            <ul className={styles.list}>
              {group.items.map((item) => {
                const active = isNavItemActive(location.pathname, item);
                const Icon = item.Icon;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`${styles.link} ${active ? styles.linkActive : ''}`}
                      title={!expanded ? item.label : undefined}
                      aria-label={item.label}
                    >
                      <span className={styles.iconWrap} aria-hidden="true">
                        <Icon size={17} strokeWidth={1.75} />
                      </span>
                      <span className={styles.linkLabel}>{item.label}</span>
                      {!expanded ? (
                        <span className={styles.tooltip} role="tooltip">
                          {item.label}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className={styles.footer}>
        <button
          type="button"
          className={styles.toggleButton}
          aria-label={
            expanded ? 'Collapse module navigation' : 'Expand module navigation'
          }
          aria-expanded={expanded}
          aria-controls="cx-astra-global-nav"
          onClick={toggle}
          title={expanded ? 'Collapse' : 'Expand'}
        >
          <span className={styles.toggleIcon} aria-hidden="true">
            {expanded ? (
              <ChevronLeft size={18} strokeWidth={2.25} />
            ) : (
              <ChevronRight size={18} strokeWidth={2.25} />
            )}
          </span>
        </button>
      </div>
    </aside>
  );
}
