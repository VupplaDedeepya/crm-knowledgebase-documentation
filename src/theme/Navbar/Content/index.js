import React from 'react';
import {createPortal} from 'react-dom';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import NavbarDocSearch from '@site/src/components/NavbarDocSearch';
import GlobalNavSidebar from '@site/src/components/GlobalNavSidebar/GlobalNavSidebar';
import styles from './styles.module.css';

export default function NavbarContent() {
  const {siteConfig} = useDocusaurusContext();
  const title = siteConfig.title || 'CX Astra';
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted ? createPortal(<GlobalNavSidebar />, document.body) : null}
      <div className={clsx('navbar__inner', styles.inner)}>
        <div className={clsx('navbar__items', styles.left)}>
          <Link to="/" className={styles.brand} aria-label={`${title} home`}>
            <span className={styles.logoTitle}>{title}</span>
          </Link>
        </div>

        <div className={clsx('navbar__items', styles.center)}>
          <div className={styles.searchWrap}>
            <NavbarDocSearch />
          </div>
        </div>
      </div>
    </>
  );
}
