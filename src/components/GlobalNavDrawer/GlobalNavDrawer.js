import {useCallback, useEffect, useId, useRef} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLocation} from '@docusaurus/router';
import {GLOBAL_NAV_GROUPS} from './navItems';
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

export default function GlobalNavDrawer({open, onClose}) {
  const location = useLocation();
  const logoSrc = useBaseUrl('/img/logo.svg');
  const titleId = useId();
  const closeRef = useRef(null);
  const openRef = useRef(open);
  const previouslyFocused = useRef(null);

  openRef.current = open;

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    previouslyFocused.current = document.activeElement;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        handleClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    requestAnimationFrame(() => closeRef.current?.focus());

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      if (
        previouslyFocused.current &&
        typeof previouslyFocused.current.focus === 'function'
      ) {
        previouslyFocused.current.focus();
      }
    };
  }, [open, handleClose]);

  useEffect(() => {
    if (openRef.current) {
      handleClose();
    }
  }, [location.pathname, handleClose]);

  return (
    <div
      className={`${styles.root} ${open ? styles.rootOpen : ''}`}
      aria-hidden={!open}
    >
      <aside
        className={styles.drawer}
        role="dialog"
        aria-modal="false"
        aria-labelledby={titleId}
        {...(!open ? {inert: true} : {})}
      >
        <div className={styles.header}>
          <div className={styles.brand}>
            <img
              src={logoSrc}
              alt=""
              className={styles.brandLogo}
              width={32}
              height={32}
            />
            <div className={styles.brandText}>
              <p id={titleId} className={styles.brandTitle}>
                CX <span className={styles.brandAccent}>Astra</span>
              </p>
              <p className={styles.brandSubtitle}>Documentation</p>
            </div>
          </div>

          <button
            ref={closeRef}
            type="button"
            className={styles.closeButton}
            aria-label="Close navigation"
            tabIndex={open ? 0 : -1}
            onClick={handleClose}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className={styles.nav} aria-label="Global modules">
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
                        tabIndex={open ? 0 : -1}
                        onClick={handleClose}
                      >
                        <span className={styles.iconWrap} aria-hidden="true">
                          <Icon size={18} strokeWidth={2.1} />
                        </span>
                        <span className={styles.linkLabel}>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}
