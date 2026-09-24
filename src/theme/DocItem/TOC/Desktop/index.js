import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TOCItems from '@theme/TOCItems';
import styles from './styles.module.css';

// Custom class names matching Docusaurus TOC
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

export default function DocItemTOCDesktop() {
  const {toc, frontMatter, metadata, contentTitle} = useDoc();
  const mainHeading = contentTitle || metadata?.title || frontMatter?.title;

  return (
    <div
      className={clsx(
        styles.tableOfContents,
        'thin-scrollbar',
        ThemeClassNames.docs.docTocDesktop
      )}
    >
      {mainHeading && (
        <div className={clsx(styles.tocHeader, 'toc-header')}>
          <a
            href="#__docusaurus_skipToContent_fallback"
            className={clsx(styles.tocHeadingLink, 'toc-main-heading')}
            title={mainHeading}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({top: 0, behavior: 'smooth'});
              if (window.history && window.history.replaceState) {
                window.history.replaceState(
                  null,
                  '',
                  window.location.pathname + window.location.search
                );
              }
            }}
          >
            {mainHeading}
          </a>
        </div>
      )}
      <TOCItems
        toc={toc}
        minHeadingLevel={frontMatter.toc_min_heading_level}
        maxHeadingLevel={frontMatter.toc_max_heading_level}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </div>
  );
}
