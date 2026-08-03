import {useEffect, useLayoutEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import SearchResult from './SearchResult';
import styles from './DocSearch.module.css';

const GAP = 8;

function getDropdownStyle(anchorEl, variant) {
  if (!anchorEl || typeof window === 'undefined') {
    return {display: 'none'};
  }

  const rect = anchorEl.getBoundingClientRect();
  const viewportPadding = 12;
  const isNavbar = variant === 'navbar';
  const preferredWidth = isNavbar
    ? Math.max(rect.width, Math.min(440, window.innerWidth - viewportPadding * 2))
    : rect.width;

  let left = isNavbar ? rect.right - preferredWidth : rect.left;
  left = Math.max(
    viewportPadding,
    Math.min(left, window.innerWidth - preferredWidth - viewportPadding),
  );

  return {
    position: 'fixed',
    top: Math.round(rect.bottom + GAP),
    left: Math.round(left),
    width: Math.round(preferredWidth),
    zIndex: 10000,
  };
}

function Section({
  label,
  items,
  query,
  activeIndex,
  indexOffset,
  isRecent,
  isPopular,
  onSelect,
  onRemoveRecent,
  showClear,
  onClearRecent,
  listId,
  listRef,
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className={styles.group}>
      <div className={styles.dropdownHeader}>
        <span className={styles.dropdownLabel}>{label}</span>
        {showClear ? (
          <button
            type="button"
            className={styles.clearAll}
            onClick={onClearRecent}
            onMouseDown={(event) => event.preventDefault()}
          >
            Clear
          </button>
        ) : null}
      </div>
      {items.map((item, index) => {
        const absoluteIndex = indexOffset + index;
        return (
          <SearchResult
            key={`${listId}-${item.to}-${item.label}-${index}`}
            id={`${listId}-option-${absoluteIndex}`}
            item={item}
            query={isRecent || isPopular ? '' : query}
            active={absoluteIndex === activeIndex}
            isRecent={isRecent}
            isPopular={isPopular}
            onSelect={onSelect}
            onRemoveRecent={onRemoveRecent}
          />
        );
      })}
    </div>
  );
}

export default function SearchDropdown({
  id,
  open,
  query,
  mode,
  resultItems = [],
  popularItems = [],
  recentItems = [],
  didYouMean = [],
  hasBestMatch = false,
  activeIndex,
  onSelect,
  onClearRecent,
  onRemoveRecent,
  listRef,
  dropdownRef,
  anchorRef,
  variant = 'hero',
}) {
  const [style, setStyle] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!open) {
      return undefined;
    }

    const updatePosition = () => {
      setStyle(getDropdownStyle(anchorRef?.current, variant));
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [
    open,
    anchorRef,
    variant,
    mode,
    resultItems.length,
    popularItems.length,
    recentItems.length,
    didYouMean.length,
  ]);

  if (!open || !mounted) {
    return null;
  }

  const bestItem =
    mode === 'results' && hasBestMatch && resultItems[0] ? [resultItems[0]] : [];
  const otherItems =
    mode === 'results'
      ? hasBestMatch
        ? resultItems.slice(1)
        : resultItems
      : [];

  return createPortal(
    <div
      ref={dropdownRef}
      className={styles.dropdown}
      style={style}
      role="presentation"
    >
      <div id={id} ref={listRef} className={styles.dropdownList} role="listbox">
        {mode === 'idle' ? (
          <>
            <Section
              listId={id}
              label="Popular Searches"
              items={popularItems}
              query=""
              activeIndex={activeIndex}
              indexOffset={0}
              isPopular
              onSelect={onSelect}
            />
            <Section
              listId={id}
              label="Recent Searches"
              items={recentItems}
              query=""
              activeIndex={activeIndex}
              indexOffset={popularItems.length}
              isRecent
              onSelect={onSelect}
              onRemoveRecent={onRemoveRecent}
              showClear={recentItems.length > 0}
              onClearRecent={onClearRecent}
            />
          </>
        ) : null}

        {mode === 'results' ? (
          <>
            <Section
              listId={id}
              label="⭐ Best Match"
              items={bestItem}
              query={query}
              activeIndex={activeIndex}
              indexOffset={0}
              onSelect={onSelect}
            />
            <Section
              listId={id}
              label={bestItem.length ? 'Other Results' : 'Suggestions'}
              items={otherItems}
              query={query}
              activeIndex={activeIndex}
              indexOffset={bestItem.length}
              onSelect={onSelect}
            />
          </>
        ) : null}

        {mode === 'empty' ? (
          <>
            <div className={styles.empty} role="status">
              <p className={styles.emptyTitle}>
                {didYouMean.length ? 'No exact match' : 'No guides found'}
              </p>
              <p className={styles.emptyText}>
                {didYouMean.length
                  ? 'Did you mean'
                  : 'Try searching for another module or feature.'}
              </p>
            </div>
            <Section
              listId={id}
              label="Suggested"
              items={didYouMean}
              query={query}
              activeIndex={activeIndex}
              indexOffset={0}
              onSelect={onSelect}
            />
          </>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
