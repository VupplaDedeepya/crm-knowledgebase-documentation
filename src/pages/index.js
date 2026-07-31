import {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {
  Search,
  BookOpen,
  UserPlus,
  Compass,
  Rocket,
  BookMarked,
  LayoutGrid,
  MessageSquare,
  Zap,
  Puzzle,
  Settings,
  Shield,
  FileText,
  ArrowRight,
  CircleHelp,
  Wrench,
  Headphones,
  ScrollText,
  X,
} from 'lucide-react';
import {resolveSearch} from '@site/src/utils/docSearch';
import HeroMapLottie from '@site/src/components/HeroMapLottie';
import HeroRightLottie from '@site/src/components/HeroRightLottie';

import styles from './index.module.css';

const RECENT_SEARCHES_KEY = 'cx-astra-recent-searches';
const MAX_RECENT_SEARCHES = 5;

const popularSearches = [
  {label: 'Create a Lead', to: '/docs/Leads-Module/creating-leads'},
  {label: 'Workflow Automation', to: '/docs/Automation/Workflows/Overview'},
  {label: 'User Roles', to: '/docs/user-management/roles'},
  {label: 'Pulse Settings', to: '/docs/Pulse-Settings/Overview'},
  {label: 'Organization Settings', to: '/docs/Organization/Profile'},
];

const gettingStarted = [
  {
    title: 'Introduction',
    description: 'Learn what CX Astra is and how the CRM is structured.',
    to: '/docs/intro',
    Icon: BookOpen,
    tone: 'violet',
  },
  {
    title: 'User Onboarding',
    description: 'Get started with your account, profile, and first login.',
    to: '/docs/onboarding',
    Icon: UserPlus,
    tone: 'blue',
  },
  {
    title: 'Navigation Guide',
    description: 'Understand modules, menus, and how to move around the app.',
    to: '/docs/intro',
    Icon: Compass,
    tone: 'cyan',
  },
  {
    title: 'First CRM Setup',
    description: 'Configure organization basics before inviting your team.',
    to: '/docs/profile-settings',
    Icon: Rocket,
    tone: 'amber',
  },
  {
    title: 'CRM Terminology',
    description: 'Key terms for leads, deals, contacts, and activities.',
    to: '/docs/leads-module',
    Icon: BookMarked,
    tone: 'rose',
  },
];

const exploreAreas = [
  {
    title: 'CRM Essentials',
    description:
      'Core guides for leads, deals, contacts, organizations, and daily sales work.',
    to: '/docs/Leads-Module/overview',
    Icon: LayoutGrid,
    tone: 'violet',
  },
  {
    title: 'Pulse AI',
    description:
      'Inbox, channels, knowledge base, and AI-assisted conversation workflows.',
    to: '/docs/Pulse-Module/Pulse-Overview',
    Icon: MessageSquare,
    tone: 'blue',
  },
  {
    title: 'Automation',
    description:
      'Workflows, sequences, and scoring to reduce manual follow-up work.',
    to: '/docs/Automation/Workflows/Overview',
    Icon: Zap,
    tone: 'amber',
  },
  {
    title: 'Integrations',
    description:
      'Connect lead capture, webhooks, and external tools to your CRM.',
    to: '/docs/Integrations/Lead-Capture',
    Icon: Puzzle,
    tone: 'emerald',
  },
  {
    title: 'Administration',
    description:
      'Manage users, roles, access, and organization-wide configuration.',
    to: '/docs/user-management/overview',
    Icon: Settings,
    tone: 'slate',
  },
  {
    title: 'Developer',
    description:
      'Technical setup notes for widgets, capture configs, and integrations.',
    to: '/docs/Pulse-Settings/Channels/Widget-Setup',
    Icon: Shield,
    tone: 'indigo',
  },
];

const popularGuides = [
  {title: 'Creating Your First Lead', to: '/docs/Leads-Module/creating-leads'},
  {title: 'Converting Lead to Deal', to: '/docs/Leads-Module/lead-conversion'},
  {title: 'Managing Contacts', to: '/docs/Contacts-Module/overview'},
  {title: 'Deal Pipeline Basics', to: '/docs/Deals-Module/overview'},
  {title: 'Setting Up Workflows', to: '/docs/Automation/Workflows/Overview'},
  {title: 'User Roles & Access', to: '/docs/user-management/roles'},
];

const whatsNew = [
  {
    title: 'Pulse Inbox Enhancements',
    date: 'May 10, 2026',
    to: '/docs/Pulse-Module/Pulse-Overview',
  },
  {
    title: 'Improved Lead Conversion',
    date: 'Apr 28, 2026',
    to: '/docs/Leads-Module/lead-conversion',
  },
  {
    title: 'Workflow Action Updates',
    date: 'Apr 12, 2026',
    to: '/docs/Automation/Workflows/Overview',
  },
  {
    title: 'Organization Branding Guide',
    date: 'Mar 30, 2026',
    to: '/docs/Organization/Branding',
  },
];

const helpLinks = [
  {
    title: 'FAQs',
    description: 'Answers to common CRM questions.',
    to: '/docs/Pulse-Settings/KnowledgeBase',
    Icon: CircleHelp,
  },
  {
    title: 'Troubleshooting',
    description: 'Fix setup and integration issues.',
    to: '/docs/Integrations/Lead-Capture',
    Icon: Wrench,
  },
  {
    title: 'Contact Support',
    description: 'Reach the CX Astra support team.',
    to: '/docs/Pulse-Settings/Overview',
    Icon: Headphones,
  },
  {
    title: 'Release Notes',
    description: 'See recent product updates.',
    to: '/docs/Pulse-Module/Pulse-Overview',
    Icon: ScrollText,
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

function HomepageHero() {
  const history = useHistory();
  const [query, setQuery] = useState('');

  const runSearch = (rawQuery, destination) => {
    const result = destination || resolveSearch(rawQuery);
    if (!result) {
      return;
    }
    addRecentSearch(result);
    history.push(result.to);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    runSearch(query);
  };

  return (
    <header className={styles.heroFrame}>
      <div className={styles.heroShell}>
        <div className={styles.hero}>
          <HeroMapLottie />
          <HeroRightLottie />
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Welcome to</p>
            <div className={styles.heroTextBlock}>
              <Heading as="h1" className={styles.heroTitle}>
                CX Astra Documentation
              </Heading>
              <p className={styles.heroSubtitle}>
                Your complete guide to understanding, configuring,
                <br />
                and getting the most out of CX Astra CRM.
              </p>
            </div>

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
                  placeholder="Search for guides, modules, and more..."
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
              <span className={styles.popularLabel}>Popular searches</span>
              <div className={styles.popularTags}>
                {popularSearches.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className={styles.popularTag}
                    onClick={() => runSearch(item.label, item)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function GettingStarted() {
  return (
    <section className={styles.section} aria-labelledby="getting-started-heading">
      <div className={styles.sectionHeader}>
        <div>
          <Heading as="h2" id="getting-started-heading" className={styles.sectionTitle}>
            Getting Started
          </Heading>
          <p className={styles.sectionSubtitle}>
            Start here if you are new to CX Astra.
          </p>
        </div>
        <Link className={styles.sectionLink} to="/docs/intro">
          View all guides
          <ArrowRight size={15} strokeWidth={2.3} />
        </Link>
      </div>
      <div className={styles.startGrid}>
        {gettingStarted.map(({title, description, to, Icon, tone}) => (
          <Link
            key={title}
            className={clsx(styles.startCard, styles[`tone_${tone}`])}
            to={to}
          >
            <span className={styles.startIcon}>
              <Icon size={16} strokeWidth={2.1} />
            </span>
            <Heading as="h3" className={styles.startTitle}>
              {title}
            </Heading>
            <p className={styles.startDescription}>{description}</p>
            <span className={styles.startArrow} aria-hidden="true">
              <ArrowRight size={14} strokeWidth={2.2} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ExploreByArea() {
  return (
    <section className={styles.section} aria-labelledby="explore-heading">
      <div className={styles.sectionHeader}>
        <div>
          <Heading as="h2" id="explore-heading" className={styles.sectionTitle}>
            Explore by area
          </Heading>
          <p className={styles.sectionSubtitle}>
            Browse documentation by product area
          </p>
        </div>
      </div>
      <div className={styles.areaGrid}>
        {exploreAreas.map(({title, description, to, Icon, tone}) => (
          <article
            key={title}
            className={clsx(styles.areaCard, styles[`tone_${tone}`])}
          >
            <span className={styles.areaIcon}>
              <Icon size={18} strokeWidth={2.1} />
            </span>
            <Heading as="h3" className={styles.areaTitle}>
              {title}
            </Heading>
            <p className={styles.areaDescription}>{description}</p>
            <Link className={styles.areaLink} to={to}>
              Explore
              <ArrowRight size={14} strokeWidth={2.3} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function InfoColumns() {
  return (
    <section className={styles.infoSection} aria-label="Guides and help">
      <div className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <Heading as="h3" className={styles.infoTitle}>
            Popular guides
          </Heading>
          <ul className={styles.guideList}>
            {popularGuides.map((item) => (
              <li key={item.title}>
                <Link className={styles.guideLink} to={item.to}>
                  <FileText size={16} strokeWidth={2.1} />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link className={styles.infoFooterLink} to="/docs/intro">
            View all documentation
            <ArrowRight size={14} strokeWidth={2.3} />
          </Link>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoTitleRow}>
            <Heading as="h3" className={styles.infoTitle}>
              What&apos;s new
            </Heading>
            <Link className={styles.infoTopLink} to="/docs/Pulse-Module/Pulse-Overview">
              View all updates
              <ArrowRight size={13} strokeWidth={2.3} />
            </Link>
          </div>
          <ul className={styles.newsList}>
            {whatsNew.map((item) => (
              <li key={item.title}>
                <Link className={styles.newsItem} to={item.to}>
                  <span className={styles.newBadge}>NEW</span>
                  <span className={styles.newsCopy}>
                    <span className={styles.newsTitle}>{item.title}</span>
                    <span className={styles.newsDate}>{item.date}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.infoCard}>
          <Heading as="h3" className={styles.infoTitle}>
            Need help?
          </Heading>
          <ul className={styles.helpList}>
            {helpLinks.map(({title, description, to, Icon}) => (
              <li key={title}>
                <Link className={styles.helpItem} to={to}>
                  <span className={styles.helpIcon}>
                    <Icon size={18} strokeWidth={2.1} />
                  </span>
                  <span>
                    <span className={styles.helpTitle}>{title}</span>
                    <span className={styles.helpDescription}>{description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HomeFooter() {
  return (
    <footer className={styles.homeFooter}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <p className={styles.footerBrandName}>CX Astra</p>
          <p className={styles.footerBrandTag}>CRM Documentation Portal</p>
          <p className={styles.footerCopy}>
            © {new Date().getFullYear()} My Project, Inc. Built with Docusaurus.
          </p>
        </div>

        <div className={styles.footerCol}>
          <p className={styles.footerHeading}>Resources</p>
          <Link to="/docs/intro">Documentation</Link>
          <Link to="/docs/onboarding">Community</Link>
          <Link to="/docs/leads-module">Glossary</Link>
          <Link to="/docs/Pulse-Settings/Overview">System Status</Link>
        </div>

        <div className={styles.footerCol}>
          <p className={styles.footerHeading}>Legal</p>
          <Link to="/docs/intro">Privacy Policy</Link>
          <Link to="/docs/intro">Terms of Service</Link>
          <Link to="/docs/intro">Security</Link>
          <Link to="/docs/intro">Trust Center</Link>
        </div>

        <div className={styles.footerCol}>
          <p className={styles.footerHeading}>Connect</p>
          <div className={styles.footerSocial}>
            <span>LinkedIn</span>
            <span>X</span>
            <span>YouTube</span>
            <span>GitHub</span>
          </div>
        </div>

        <div className={styles.footerSubscribe}>
          <p className={styles.footerHeading}>Stay updated</p>
          <p className={styles.footerSubscribeText}>
            Get product updates and documentation highlights.
          </p>
          <form
            className={styles.subscribeForm}
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
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
      description="Your complete guide to understanding, configuring, and getting the most out of CX Astra CRM."
      wrapperClassName={styles.homeWrapper}
      noFooter>
      <main className={styles.home}>
        <HomepageHero />
        <div className={styles.content}>
          <GettingStarted />
          <ExploreByArea />
          <InfoColumns />
        </div>
        <HomeFooter />
      </main>
    </Layout>
  );
}
