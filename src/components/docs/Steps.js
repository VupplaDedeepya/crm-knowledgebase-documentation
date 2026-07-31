import React, {Children, isValidElement} from 'react';
import styles from './styles.module.css';

export function Step({children}) {
  return <>{children}</>;
}

export default function Steps({children}) {
  const items = Children.toArray(children).filter(Boolean);

  return (
    <ol className={styles.steps}>
      {items.map((child, index) => {
        const content =
          isValidElement(child) && child.props?.children != null
            ? child.props.children
            : child;

        return (
          <React.Fragment key={index}>
            <li
              className={styles.stepItem}
              style={{animationDelay: `${0.05 + index * 0.06}s`}}
            >
              <span className={styles.stepBadge} aria-hidden="true">
                {index + 1}
              </span>
              <div className={styles.stepContent}>{content}</div>
            </li>
            {index < items.length - 1 ? (
              <div className={styles.stepConnector} aria-hidden="true">
                ↓
              </div>
            ) : null}
          </React.Fragment>
        );
      })}
    </ol>
  );
}
