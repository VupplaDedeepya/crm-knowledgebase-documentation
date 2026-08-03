import {
  LayoutGrid,
  MessageSquare,
  Puzzle,
  Rocket,
  Settings,
  Zap,
} from 'lucide-react';

/**
 * Guide categories for /guides.
 * Add new entries here — the page grid adapts automatically.
 */
export const GUIDE_CATEGORIES = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description:
      'Introduction, onboarding, navigation, and first-time CRM configuration.',
    to: '/docs/intro',
    Icon: Rocket,
    tone: 'violet',
    guideCount: 4,
    highlights: [
      {label: 'Introduction', to: '/docs/intro'},
      {label: 'User Onboarding', to: '/docs/onboarding'},
      {label: 'Navigation Guide', to: '/docs/navigation'},
      {label: 'Configure Your CRM', to: '/docs/FirstCRMSetup'},
    ],
  },
  {
    id: 'crm-modules',
    title: 'CRM Modules',
    description:
      'Manage Leads, Deals, Contacts, Organizations, Activities, and Calendar.',
    to: '/docs/Leads-Module/overview',
    Icon: LayoutGrid,
    tone: 'blue',
    guideCount: 40,
    highlights: [
      {label: 'Leads', to: '/docs/Leads-Module/overview'},
      {label: 'Deals', to: '/docs/Deals-Module/overview'},
      {label: 'Contacts', to: '/docs/Contacts-Module/overview'},
      {label: 'Activities', to: '/docs/Activities-Module/activities'},
    ],
  },
  {
    id: 'administration',
    title: 'Administration',
    description:
      'Organization settings, users, roles, permissions, branding, and localization.',
    to: '/docs/user-management/overview',
    Icon: Settings,
    tone: 'slate',
    guideCount: 12,
    highlights: [
      {label: 'Users', to: '/docs/user-management/users'},
      {label: 'Roles', to: '/docs/user-management/roles'},
      {label: 'Organization Profile', to: '/docs/Organization/Profile'},
      {label: 'Deal Pipelines', to: '/docs/Configure/Deals'},
    ],
  },
  {
    id: 'pulse-ai',
    title: 'Pulse & AI',
    description:
      'Pulse Inbox, channels, chatbot, knowledge base, and support availability.',
    to: '/docs/Pulse-Module/Pulse-Overview',
    Icon: MessageSquare,
    tone: 'cyan',
    guideCount: 10,
    highlights: [
      {label: 'Pulse Inbox', to: '/docs/Pulse-Module/Pulse-Overview'},
      {label: 'Channels', to: '/docs/Pulse-Settings/Channels'},
      {label: 'Knowledge Base', to: '/docs/Pulse-Settings/KnowledgeBase'},
      {label: 'Business Hours', to: '/docs/Pulse-Settings/SupportAvailability'},
    ],
  },
  {
    id: 'automation',
    title: 'Automation',
    description:
      'Workflows, sequences, scoring rules, and automated follow-up settings.',
    to: '/docs/Automation/Workflows/Overview',
    Icon: Zap,
    tone: 'amber',
    guideCount: 12,
    highlights: [
      {label: 'Workflows', to: '/docs/Automation/Workflows/Overview'},
      {label: 'Sequences', to: '/docs/Automation/Sequences'},
      {label: 'Scoring', to: '/docs/Automation/Scoring'},
      {label: 'Assignment Rules', to: '/docs/Pulse-Settings/AssignmentRules'},
    ],
  },
  {
    id: 'integrations',
    title: 'Pulse Channel Integrations',
    description:
      'Connect CX Astra with external communication platforms and messaging channels.',
    to: '/docs/integrations',
    Icon: Puzzle,
    tone: 'emerald',
    guideCount: 2,
    highlights: [
      {label: 'WhatsApp Business', to: '/docs/PulseChannelIntegrations/watsapp'},
      {
        label: 'Facebook Messenger & Instagram',
        to: '/docs/PulseChannelIntegrations/FacebookMessenger&Instagram',
      },
    ],
  },
];
