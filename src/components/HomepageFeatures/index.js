import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import {
  LayoutDashboard,
  UserPlus,
  UserRoundPlus,
  Settings,
} from 'lucide-react';

const quickAccessItems = [
  {
    title: 'CRM overview',
    tag: 'Overview',
    to: '/docs/intro',
    description: 'Core workflow and platform navigation guide.',
    icon: LayoutDashboard,
    pips: ['active', 'soft', '', ''],
  },
  {
    title: 'Onboarding',
    tag: 'Setup',
    to: '/docs/onboarding',
    description: 'Setup checklist and workspace configuration.',
    icon: UserPlus,
    pips: ['active', 'soft', 'active', ''],
  },
  {
    title: 'Settings module',
    tag: 'Settings',
    to: '/docs/user-management/overview',
    description: 'Manage your account settings and preferences.',
    icon: Settings,
    pips: ['active', 'soft', 'active', 'soft'],
  },
  {
    title: 'Lead module',
    tag: 'Leads',
    to: '/docs/lead-module',
    description: 'Manage leads and track every pipeline stage.',
    icon: UserRoundPlus,
    pips: ['active', 'soft', 'active', 'soft'],
  },
];

function QuickAccessCard({
  title,
  tag,
  to,
  description,
  icon: Icon,
  pips,
  colorIndex,
}) {
  return (
    <div className={clsx('col col--3', styles.quickCardColumn)}>
      <Link
        className={clsx(
          styles.quickCard,
          styles[`cardColor${colorIndex}`]
        )}
        to={to}
      >
        {/* icon */}
        <div className={styles.iconBox}>
          <Icon size={22} strokeWidth={2.2} />
        </div>

        {/* body */}
        <div className={styles.cardText}>
          <Heading as="h3" className={styles.cardTitle}>
            {title}
          </Heading>

          <p className={styles.cardDescription}>
            {description}
          </p>

          <div className={styles.cardSteps}>
            {pips.map((pip, i) => (
              <div
                key={i}
                className={clsx(
                  styles.cardStep,
                  pip && styles[pip]
                )}
              />
            ))}
          </div>
        </div>

        {/* footer */}
        <div className={styles.cardFooter}>
          <span className={styles.cardTag}>
            {tag}
          </span>

          <span className={styles.cardArrow}>
            →
          </span>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.quickAccessSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading
              as="h2"
              className={styles.quickAccessHeading}
            >
              Quick access
            </Heading>

            <p className={styles.quickAccessSubtitle}>
              Jump to the section you need
            </p>
          </div>
        </div>

        <div className="row">
          {quickAccessItems.map((item, idx) => (
            <QuickAccessCard
              key={idx}
              {...item}
              colorIndex={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}