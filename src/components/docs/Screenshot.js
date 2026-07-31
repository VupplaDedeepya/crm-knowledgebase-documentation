import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Screenshot({src, alt = '', caption}) {
  const imageSrc = useBaseUrl(src);

  return (
    <figure className={styles.screenshot}>
      <div className={styles.screenshotFrame}>
        <img src={imageSrc} alt={alt || caption || 'Documentation screenshot'} />
      </div>
      {caption ? <figcaption className={styles.screenshotCaption}>{caption}</figcaption> : null}
    </figure>
  );
}
