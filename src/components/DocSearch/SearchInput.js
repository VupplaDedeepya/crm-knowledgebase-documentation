import {Search, X} from 'lucide-react';
import styles from './DocSearch.module.css';

export default function SearchInput({
  id,
  value,
  onChange,
  onFocus,
  onKeyDown,
  onClear,
  placeholder = 'Search for guides, modules, and more...',
  iconSize = 20,
  clearSize = 18,
  className,
  inputRef,
  expanded = false,
  listboxId,
  activeOptionId,
}) {
  return (
    <div className={`${styles.searchBar} ${className || ''}`.trim()}>
      <Search className={styles.searchIcon} size={iconSize} strokeWidth={2.2} aria-hidden="true" />
      <input
        ref={inputRef}
        id={id}
        className={styles.searchInput}
        type="search"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        autoComplete="off"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={expanded}
        aria-controls={listboxId}
        aria-activedescendant={activeOptionId || undefined}
      />
      {value ? (
        <button
          type="button"
          className={styles.searchClear}
          aria-label="Clear search"
          onClick={onClear}
        >
          <X size={clearSize} strokeWidth={2.3} />
        </button>
      ) : null}
    </div>
  );
}
