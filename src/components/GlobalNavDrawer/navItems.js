import {
  LayoutDashboard,
  Handshake,
  Building2,
  LayoutGrid,
  Calendar,
  Inbox,
  BarChart3,
  LifeBuoy,
  Settings,
  UserCog,
} from 'lucide-react';
import {LeadsIcon, ContactsIcon} from '../icons';

export const GLOBAL_NAV_GROUPS = [
  {
    label: 'Workspace',
    items: [
      {
        label: 'Dashboard',
        to: '/docs/Dashboard/overview',
        match: ['/docs/Dashboard'],
        Icon: LayoutDashboard,
      },
    ],
  },
  {
    label: 'CRM',
    items: [
      {
        label: 'Leads',
        to: '/docs/Leads-Module/overview',
        match: ['/docs/Leads-Module'],
        Icon: LeadsIcon,
      },
      {
        label: 'Deals',
        to: '/docs/Deals-Module/overview',
        match: ['/docs/Deals-Module'],
        Icon: Handshake,
      },
      {
        label: 'Contacts',
        to: '/docs/Contacts-Module/overview',
        match: ['/docs/Contacts-Module'],
        Icon: ContactsIcon,
      },
      {
        label: 'Organizations',
        to: '/docs/Organizations-Module/overview',
        match: ['/docs/Organizations-Module'],
        Icon: Building2,
      },
      {
        label: 'Activities',
        to: '/docs/Activities-Module/activities',
        match: ['/docs/Activities-Module'],
        Icon: LayoutGrid,
      },
      {
        label: 'Calendar',
        to: '/docs/Calendar-Module/calendar',
        match: ['/docs/Calendar-Module'],
        Icon: Calendar,
      },
    ],
  },
  {
    label: 'Engagement',
    items: [
      {
        label: 'Pulse Inbox',
        to: '/docs/Pulse-Module/Pulse-Overview',
        match: ['/docs/Pulse-Module'],
        Icon: Inbox,
      },
      {
        label: 'Reports',
        to: '/docs/Reports/overview',
        match: ['/docs/Reports'],
        Icon: BarChart3,
      },
    ],
  },
  {
    label: 'Account',
    items: [
      {
        label: 'Support',
        to: '/docs/Support/overview',
        match: ['/docs/Support'],
        Icon: LifeBuoy,
      },
      {
        label: 'Settings',
        to: '/docs/Organization/Profile',
        match: [
          '/docs/Organization',
          '/docs/user-management',
          '/docs/Configure',
          '/docs/Pulse-Settings',
          '/docs/Integrations',
          '/docs/Automation',
        ],
        Icon: Settings,
      },
      {
        label: 'Profile Settings',
        to: '/docs/profile-settings',
        match: ['/docs/profile-settings'],
        Icon: UserCog,
      },
    ],
  },
];
