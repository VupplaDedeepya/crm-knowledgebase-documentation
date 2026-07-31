import React from 'react';
import clsx from 'clsx';
import {
  Activity,
  Flag,
  Tags,
  UserRound,
  Sparkles,
  Layers,
  Target,
  Inbox,
} from 'lucide-react';
import styles from './styles.module.css';

const ICONS = {
  status: Flag,
  owner: UserRound,
  priority: Activity,
  tags: Tags,
  source: Target,
  default: Sparkles,
  layers: Layers,
  inbox: Inbox,
};

export function FeatureCard({title, description, icon = 'default', tone = 'indigo'}) {
  const Icon = ICONS[icon] || ICONS.default;

  return (
    <article className={clsx(styles.featureCard, styles[`tone_${tone}`])}>
      <span className={styles.featureIcon}>
        <Icon size={18} strokeWidth={2.2} />
      </span>
      <h3 className={styles.featureTitle}>{title}</h3>
      {description ? <p className={styles.featureDescription}>{description}</p> : null}
    </article>
  );
}

export default function FeatureGrid({children}) {
  return <div className={styles.featureGrid}>{children}</div>;
}
