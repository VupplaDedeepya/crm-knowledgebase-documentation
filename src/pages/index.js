import {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {
  Search,
  UserPlus,
  Heart,
  Users,
  Building2,
  Clock3,
  Settings,
  Network,
  Zap,
  Inbox,
  RefreshCw,
  FileText,
  ArrowRight,
  History,
  X,
} from 'lucide-react';
import {resolveSearch} from '@site/src/utils/docSearch';

import styles from './index.module.css';

const RECENT_SEARCHES_KEY = 'cx-astra-recent-searches';
const MAX_RECENT_SEARCHES = 5;

const categories = [
  {
    title: 'Leads',
    description: 'Capture and manage leads',
    to: '/docs/Leads-Module/overview',
    Icon: UserPlus,
    tone: 'indigo',
  },
  {
    title: 'Deals',
    description: 'Track and close deals',
    to: '/docs/Deals-Module/overview',
    Icon: Heart,
    tone: 'rose',
  },
  {
    title: 'Contacts',
    description: 'Store customer details',
    to: '/docs/Contacts-Module/overview',
    Icon: Users,
    tone: 'emerald',
  },
  {
    title: 'Organizations',
    description: 'Manage company accounts',
    to: '/docs/Organizations-Module/overview',
    Icon: Building2,
    tone: 'violet',
  },
  {
    title: 'Activities',
    description: 'Tasks, notes, and follow-ups',
    to: '/docs/Activities-Module/activities',
    Icon: Clock3,
    tone: 'amber',
  },
  {
    title: 'Automation',
    description: 'Workflows and sequences',
    to: '/docs/Automation/Workflows/Overview',
    Icon: Zap,
    tone: 'cyan',
  },
  {
    title: 'Integrations',
    description: 'Connect external tools',
    to: '/docs/Integrations/Lead-Capture',
    Icon: Network,
    tone: 'sky',
  },
  {
    title: 'Settings',
    description: 'Configure your workspace',
    to: '/docs/user-management/overview',
    Icon: Settings,
    tone: 'slate',
  },
];

const recentUpdates = [
  {
    title: 'Pulse Inbox Overview',
    to: '/docs/Pulse-Module/Pulse-Overview',
    when: '2 days ago',
    Icon: Inbox,
  },
  {
    title: 'Lead Conversion Process',
    to: '/docs/Leads-Module/lead-conversion',
    when: '3 days ago',
    Icon: RefreshCw,
  },
  {
    title: 'Creating Deals',
    to: '/docs/Deals-Module/creating-deals',
    when: '5 days ago',
    Icon: Heart,
  },
  {
    title: 'User Onboarding Guide',
    to: '/docs/onboarding',
    when: '1 week ago',
    Icon: FileText,
  },
];

function loadRecentSearches() {
  if (typeof window === 'undefined') {
    return [];
  }
  try {
    const raw = window.localStorage.getItem(RECENT_SEARCHES_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persistRecentSearches(items) {
  if (typeof window === 'undefined') {
    return items;
  }
  window.localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(items));
  return items;
}

function addRecentSearch(entry) {
  const label = entry.label.trim();
  if (!label) {
    return loadRecentSearches();
  }

  const next = [
    {label, to: entry.to},
    ...loadRecentSearches().filter(
      (item) =>
        item.to !== entry.to && item.label.toLowerCase() !== label.toLowerCase(),
    ),
  ].slice(0, MAX_RECENT_SEARCHES);

  return persistRecentSearches(next);
}

function removeRecentSearch(label) {
  const next = loadRecentSearches().filter(
    (item) => item.label.toLowerCase() !== label.toLowerCase(),
  );
  return persistRecentSearches(next);
}

function clearRecentSearches() {
  return persistRecentSearches([]);
}

function HeroVisual() {
  return (
    <div className={styles.heroVisual} aria-hidden="true">
      <div className={styles.heroBlob} />
      <div className={clsx(styles.mockWindow, styles.mockWindowMain)}>
        <div className={styles.mockChrome}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.mockBody}>
          <div className={styles.mockSidebar} />
          <div className={styles.mockContent}>
            <div className={styles.mockLine} />
            <div className={clsx(styles.mockLine, styles.mockLineShort)} />
            <div className={styles.mockCards}>
              <div className={styles.mockCard} />
              <div className={styles.mockCard} />
              <div className={styles.mockCard} />
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.mockWindow, styles.mockWindowSmall)}>
        <div className={styles.mockChrome}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.mockMiniRows}>
          <div className={styles.mockMiniRow} />
          <div className={styles.mockMiniRow} />
          <div className={styles.mockMiniRow} />
        </div>
      </div>
    </div>
  );
}

function HomepageHero() {
  const history = useHistory();
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    setRecentSearches(loadRecentSearches());
  }, []);

  const runSearch = (rawQuery) => {
    const result = resolveSearch(rawQuery);
    if (!result) {
      return;
    }
    setRecentSearches(addRecentSearch(result));
    history.push(result.to);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    runSearch(query);
  };

  const onRecentClick = (item) => {
    setQuery(item.label);
    setRecentSearches(addRecentSearch(item));
  };

  const onRemoveRecent = (event, label) => {
    event.preventDefault();
    event.stopPropagation();
    setRecentSearches(removeRecentSearch(label));
  };

  const onClearRecent = () => {
    setRecentSearches(clearRecentSearches());
  };

  return (
    <header className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <Heading as="h1" className={styles.heroTitle}>
            Docs that power your CRM
          </Heading>
          <p className={styles.heroSubtitle}>
            Clear guides. Practical steps. Better results. Everything you need to
            master CX Astra.
          </p>

          <form className={styles.searchWrap} onSubmit={onSubmit} role="search">
            <label className={styles.srOnly} htmlFor="docs-search">
              Search documentation
            </label>
            <div className={styles.searchBar}>
              <Search className={styles.searchIcon} size={20} strokeWidth={2.2} />
              <input
                id="docs-search"
                className={styles.searchInput}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search documentation..."
                autoComplete="off"
              />
              {query ? (
                <button
                  type="button"
                  className={styles.searchClear}
                  aria-label="Clear search"
                  onClick={() => setQuery('')}
                >
                  <X size={18} strokeWidth={2.3} />
                </button>
              ) : null}
            </div>
          </form>

          <div className={styles.popular}>
            <div className={styles.popularHeader}>
              <span className={styles.popularLabel}>Recent searches</span>
              {recentSearches.length > 0 ? (
                <button
                  type="button"
                  className={styles.clearRecent}
                  onClick={onClearRecent}
                >
                  Clear
                </button>
              ) : null}
            </div>
            {recentSearches.length > 0 ? (
              <div className={styles.popularTags}>
                {recentSearches.map(({label, to}) => (
                  <Link
                    key={`${label}-${to}`}
                    className={styles.popularTag}
                    to={to}
                    onClick={() => onRecentClick({label, to})}
                  >
                    <span className={styles.popularTagIcon}>
                      <History size={13} strokeWidth={2.3} />
                    </span>
                    <span className={styles.popularTagLabel}>{label}</span>
                    <button
                      type="button"
                      className={styles.removeRecent}
                      aria-label={`Remove ${label} from recent searches`}
                      onClick={(event) => onRemoveRecent(event, label)}
                    >
                      <X size={12} strokeWidth={2.4} />
                    </button>
                  </Link>
                ))}
              </div>
            ) : (
              <p className={styles.recentEmpty}>
                Your recent searches will appear here.
              </p>
            )}
          </div>
        </div>
        <HeroVisual />
      </div>
    </header>
  );
}

function CategoryGrid() {
  return (
    <section className={styles.categories} aria-labelledby="categories-heading">
      <Heading as="h2" id="categories-heading" className={styles.sectionHeading}>
        Browse by Category
      </Heading>
      <div className={styles.categoryGrid}>
        {categories.map(({title, description, to, Icon, tone}, index) => (
          <Link
            key={title}
            className={clsx(styles.categoryCard, styles[`tone_${tone}`])}
            to={to}
            style={{animationDelay: `${0.08 + index * 0.05}s`}}
          >
            <span className={styles.categoryIcon}>
              <Icon size={20} strokeWidth={2.1} />
            </span>
            <Heading as="h3" className={styles.categoryTitle}>
              {title}
            </Heading>
            <p className={styles.categoryDescription}>{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function RecentlyUpdated() {
  return (
    <section className={styles.recent} aria-labelledby="recent-heading">
      <div className={styles.recentHeader}>
        <Heading as="h2" id="recent-heading" className={styles.sectionHeading}>
          Recently Updated
        </Heading>
        <Link className={styles.viewAll} to="/docs/intro">
          View all
          <ArrowRight size={15} strokeWidth={2.2} />
        </Link>
      </div>
      <ul className={styles.recentList}>
        {recentUpdates.map(({title, to, when, Icon}, index) => (
          <li key={title} style={{animationDelay: `${0.1 + index * 0.06}s`}}>
            <Link className={styles.recentItem} to={to}>
              <span className={styles.recentLeft}>
                <span className={styles.recentIcon}>
                  <Icon size={16} strokeWidth={2.1} />
                </span>
                <span className={styles.recentTitle}>{title}</span>
              </span>
              <span className={styles.recentWhen}>{when}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    document.documentElement.setAttribute('data-home', 'true');
    return () => {
      document.documentElement.removeAttribute('data-home');
    };
  }, []);

  return (
    <Layout
      title={siteConfig.title}
      description="Clear guides. Practical steps. Better results. Everything you need to master CX Astra."
      wrapperClassName={styles.homeWrapper}
      noFooter>
      <main className={styles.home}>
        <HomepageHero />
        <CategoryGrid />
        <RecentlyUpdated />
      </main>
    </Layout>
  );
}
