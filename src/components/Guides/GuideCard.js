import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './GuideCard.module.css';

export default function GuideCard({
  title,
  description,
  Icon,
  to,
  tone = 'violet',
  guideCount,
  highlights = [],
}) {
  return (
    <article className={clsx(styles.card, styles[`tone_${tone}`])}>
      <Link className={styles.cardMain} to={to} aria-label={`Explore ${title}`}>
        <span className={styles.iconWrap} aria-hidden="true">
          <Icon size={22} strokeWidth={2.1} />
        </span>

        <Heading as="h2" className={styles.title}>
          {title}
        </Heading>

        <p className={styles.description}>{description}</p>

        {typeof guideCount === 'number' ? (
          <span className={styles.meta}>
            {guideCount} {guideCount === 1 ? 'guide' : 'guides'}
          </span>
        ) : null}
      </Link>

      {highlights.length > 0 ? (
        <ul className={styles.highlights}>
          {highlights.map((item) => (
            <li key={item.to}>
              <Link className={styles.highlightLink} to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
