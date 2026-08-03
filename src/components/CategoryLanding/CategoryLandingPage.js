import Heading from '@theme/Heading';
import GuideCard from './GuideCard';
import LearningPath from './LearningPath';
import RelatedCategories from './RelatedCategories';
import InfoPanel from './InfoPanel';
import styles from './CategoryLanding.module.css';

/**
 * Shared layout for category hub pages (CRM Essentials, Pulse, etc.).
 * Pass category-specific data; layout stays identical across pages.
 */
export default function CategoryLandingPage({
  title,
  description,
  badgeLabel = 'Guides',
  guides = [],
  learningPath = [],
  relatedCategories = [],
  documentationType = 'User Guide',
  audience = [],
}) {
  const guideCount = guides.length;
  const badge = `${guideCount} ${badgeLabel}`;

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>{badge}</span>
          <Heading as="h1" className={styles.heroTitle}>
            {title}
          </Heading>
          <p className={styles.heroSubtitle}>{description}</p>
        </div>
      </header>

      <div className={styles.body}>
        <section className={styles.section} aria-labelledby="guides-heading">
          <div className={styles.sectionHeader}>
            <Heading as="h2" id="guides-heading" className={styles.sectionTitle}>
              Guides
            </Heading>
            <p className={styles.sectionSubtitle}>
              Browse documentation in this category.
            </p>
          </div>
          <div className={styles.guideGrid}>
            {guides.map((guide) => (
              <GuideCard key={guide.to} {...guide} />
            ))}
          </div>
        </section>

        {learningPath.length > 0 ? (
          <section className={styles.section} aria-labelledby="path-heading">
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="path-heading" className={styles.sectionTitle}>
                Recommended Learning Path
              </Heading>
              <p className={styles.sectionSubtitle}>
                Follow this sequence to learn the category end to end.
              </p>
            </div>
            <LearningPath items={learningPath} />
          </section>
        ) : null}

        {relatedCategories.length > 0 ? (
          <section className={styles.section} aria-labelledby="related-heading">
            <div className={styles.sectionHeader}>
              <Heading as="h2" id="related-heading" className={styles.sectionTitle}>
                Continue Exploring
              </Heading>
              <p className={styles.sectionSubtitle}>
                Jump into related product areas.
              </p>
            </div>
            <RelatedCategories items={relatedCategories} />
          </section>
        ) : null}

        <section className={styles.section}>
          <InfoPanel
            category={title}
            guideCount={guideCount}
            documentationType={documentationType}
            audience={audience}
          />
        </section>
      </div>
    </div>
  );
}
