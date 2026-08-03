import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {ArrowRight} from 'lucide-react';
import styles from './CategoryLanding.module.css';

export default function GuideCard({title, description, to, Icon, tone = 'violet'}) {
  return (
    <Link
      className={clsx(styles.guideCard, styles[`tone_${tone}`])}
      to={to}
      aria-label={`Learn more about ${title}`}
    >
      <span className={styles.guideIcon} aria-hidden="true">
        <Icon size={20} strokeWidth={2.1} />
      </span>
      <Heading as="h3" className={styles.guideTitle}>
        {title}
      </Heading>
      <p className={styles.guideDescription}>{description}</p>
      <span className={styles.guideCta}>
        Learn More
        <ArrowRight className={styles.guideArrow} size={14} strokeWidth={2.3} />
      </span>
    </Link>
  );
}
