import Link from '@docusaurus/Link';
import {ArrowDown} from 'lucide-react';
import styles from './CategoryLanding.module.css';

export default function LearningPath({items = []}) {
  if (!items.length) {
    return null;
  }

  return (
    <ol className={styles.pathList}>
      {items.map((item, index) => (
        <li key={`${item.to}-${item.title}`} className={styles.pathItem}>
          <Link className={styles.pathCard} to={item.to}>
            <span className={styles.pathIndex}>{index + 1}</span>
            <span className={styles.pathTitle}>{item.title}</span>
          </Link>
          {index < items.length - 1 ? (
            <span className={styles.pathArrow} aria-hidden="true">
              <ArrowDown size={18} strokeWidth={2.2} />
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
