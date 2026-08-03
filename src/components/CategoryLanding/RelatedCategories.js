import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {ArrowRight} from 'lucide-react';
import styles from './CategoryLanding.module.css';

export default function RelatedCategories({items = []}) {
  if (!items.length) {
    return null;
  }

  return (
    <div className={styles.relatedGrid}>
      {items.map((item) => (
        <Link
          key={item.to}
          className={clsx(styles.relatedCard, styles[`tone_${item.tone || 'violet'}`])}
          to={item.to}
        >
          <Heading as="h3" className={styles.relatedTitle}>
            {item.title}
          </Heading>
          <p className={styles.relatedDescription}>{item.description}</p>
          <span className={styles.relatedCta}>
            Explore
            <ArrowRight size={14} strokeWidth={2.3} />
          </span>
        </Link>
      ))}
    </div>
  );
}
