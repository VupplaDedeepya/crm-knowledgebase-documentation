import styles from './CategoryLanding.module.css';

export default function InfoPanel({
  category,
  guideCount,
  documentationType,
  audience = [],
}) {
  return (
    <aside className={styles.infoPanel} aria-label="Category information">
      <div className={styles.infoItem}>
        <span className={styles.infoLabel}>Category</span>
        <span className={styles.infoValue}>{category}</span>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.infoLabel}>Includes</span>
        <span className={styles.infoValue}>
          {guideCount} {guideCount === 1 ? 'Guide' : 'Guides'}
        </span>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.infoLabel}>Documentation Type</span>
        <span className={styles.infoValue}>{documentationType}</span>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.infoLabel}>Audience</span>
        <span className={styles.infoValue}>{audience.join(', ')}</span>
      </div>
    </aside>
  );
}
