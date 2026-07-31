import React from 'react';
import clsx from 'clsx';
import {Info, Lightbulb, AlertTriangle, CheckCircle2} from 'lucide-react';
import styles from './styles.module.css';

const VARIANTS = {
  info: {
    label: 'Important',
    Icon: Info,
    className: styles.info,
  },
  tip: {
    label: 'Tip',
    Icon: Lightbulb,
    className: styles.tip,
  },
  success: {
    label: 'Success',
    Icon: CheckCircle2,
    className: styles.success,
  },
  warning: {
    label: 'Warning',
    Icon: AlertTriangle,
    className: styles.warning,
  },
};

export default function Callout({type = 'info', title, children}) {
  const variant = VARIANTS[type] || VARIANTS.info;
  const {Icon, label, className} = variant;

  return (
    <aside className={clsx(styles.callout, className)} role="note">
      <div className={styles.calloutIcon}>
        <Icon size={18} strokeWidth={2.25} />
      </div>
      <div className={styles.calloutBody}>
        <p className={styles.calloutTitle}>{title || label}</p>
        <div className={styles.calloutContent}>{children}</div>
      </div>
    </aside>
  );
}
