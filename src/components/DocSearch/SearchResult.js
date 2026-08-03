import {History, X, Star, Clock} from 'lucide-react';
import {highlightMatches} from './highlight';
import {getCategoryIcon} from './icons';
import styles from './DocSearch.module.css';

export default function SearchResult({
  item,
  query,
  active,
  isRecent,
  isPopular,
  onSelect,
  onRemoveRecent,
  id,
}) {
  const Icon = isRecent
    ? History
    : isPopular
      ? Star
      : getCategoryIcon(item.iconKey);

  return (
    <div
      id={id}
      role="option"
      aria-selected={active}
      className={`${styles.result} ${active ? styles.resultActive : ''}`.trim()}
    >
      <button
        type="button"
        className={styles.resultButton}
        onClick={() => onSelect(item)}
        onMouseDown={(event) => event.preventDefault()}
      >
        <span className={styles.resultIcon} aria-hidden="true">
          <Icon size={16} strokeWidth={2.1} />
        </span>
        <span className={styles.resultBody}>
          <span className={styles.resultTitleRow}>
            <span className={styles.resultTitle}>
              {highlightMatches(
                item.title || item.label,
                query,
                item.matchPhrases,
              )}
            </span>
            {item.isBestMatch ? (
              <span className={styles.bestBadge}>Best Match</span>
            ) : null}
            {item.recentlyUpdated ? (
              <span className={styles.updatedBadge}>Recently Updated</span>
            ) : null}
          </span>
          {item.breadcrumb || item.category ? (
            <span className={styles.resultBreadcrumb}>
              {item.breadcrumb || item.category}
            </span>
          ) : null}
          {item.description && !isRecent && !isPopular ? (
            <span className={styles.resultDescription}>
              {highlightMatches(item.description, query, item.matchPhrases)}
            </span>
          ) : null}
          {item.readingTime && !isRecent && !isPopular ? (
            <span className={styles.readingTime}>
              <Clock size={12} strokeWidth={2.2} aria-hidden="true" />
              {item.readingTime} read
            </span>
          ) : null}
        </span>
      </button>
      {isRecent && onRemoveRecent ? (
        <button
          type="button"
          className={styles.removeRecent}
          aria-label={`Remove ${item.label} from recent searches`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onRemoveRecent(item);
          }}
          onMouseDown={(event) => event.preventDefault()}
        >
          <X size={14} strokeWidth={2.3} />
        </button>
      ) : null}
    </div>
  );
}
