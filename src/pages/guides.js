import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import DocSearchBox from '@site/src/components/DocSearch/DocSearchBox';
import GuideCard from '@site/src/components/Guides/GuideCard';
import {GUIDE_CATEGORIES} from '@site/src/components/Guides/guidesConfig';

import styles from './guides.module.css';

export default function GuidesPage() {
  return (
    <Layout
      title="Guides"
      description="Browse all available guides to learn, configure, and effectively use CX Astra CRM."
      wrapperClassName={styles.pageWrapper}>
      <main className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <Heading as="h1" className={styles.heroTitle}>
              Guides
            </Heading>
            <p className={styles.heroSubtitle}>
              Browse all available guides to learn, configure, and effectively
              use CX Astra CRM.
            </p>
            <div className={styles.searchWrap}>
              <DocSearchBox id="guides-search" variant="hero" />
            </div>
          </div>
        </header>

        <section
          className={styles.section}
          aria-labelledby="guide-categories-heading"
        >
          <div className={styles.sectionHeader}>
            <Heading
              as="h2"
              id="guide-categories-heading"
              className={styles.sectionTitle}
            >
              Browse by category
            </Heading>
            <p className={styles.sectionSubtitle}>
              Pick a category, then jump into related guides.
            </p>
          </div>

          <div className={styles.grid}>
            {GUIDE_CATEGORIES.map((category) => (
              <GuideCard
                key={category.id}
                title={category.title}
                description={category.description}
                Icon={category.Icon}
                to={category.to}
                tone={category.tone}
                guideCount={category.guideCount}
                highlights={category.highlights}
              />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
