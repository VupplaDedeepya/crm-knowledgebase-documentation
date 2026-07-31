import React from 'react';
import styles from './styles.module.css';

export default function InfoBanner({title, children}) {
  return (
    <div className={styles.infoBanner}>
      {title ? <p className={styles.infoBannerTitle}>{title}</p> : null}
      <div className={styles.infoBannerContent}>{children}</div>
    </div>
  );
}
