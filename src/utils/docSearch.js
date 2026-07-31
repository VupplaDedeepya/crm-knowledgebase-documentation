const STOP_WORDS = new Set([
  'a',
  'an',
  'the',
  'to',
  'how',
  'do',
  'i',
  'can',
  'does',
  'what',
  'is',
  'are',
  'for',
  'in',
  'of',
  'on',
  'my',
  'me',
  'please',
  'help',
  'with',
  'from',
  'into',
  'and',
  'or',
  'about',
  'guide',
  'docs',
  'documentation',
  'page',
  'module',
]);

/**
 * Intent-aware documentation index covering all navbar modules.
 * Action + entity queries prefer specific pages over overviews.
 */
export const DOC_INDEX = [
  // ---------- Introduction ----------
  {
    label: 'Introduction',
    to: '/docs/intro',
    kind: 'definition',
    entities: ['crm', 'intro', 'introduction', 'workspace', 'getting started', 'sales astra'],
    actions: ['overview', 'begin', 'start', 'learn'],
    keywords: [
      'customer relationship management',
      'what is crm',
      'what is a crm',
      'centralized',
      'workspace',
      'team members',
    ],
    phrases: [
      'getting started',
      'introduction',
      'crm intro',
      'what is crm',
      'what is a crm',
      'what is sales astra',
      'what is cx astra',
      'explain crm',
      'define crm',
    ],
  },
  {
    label: 'Leads Module Intro',
    to: '/docs/leads-module',
    kind: 'definition',
    entities: ['lead', 'leads'],
    actions: ['intro', 'introduction'],
    phrases: ['leads module intro'],
  },
  {
    label: 'Deals Module Intro',
    to: '/docs/deal-module',
    kind: 'definition',
    entities: ['deal', 'deals'],
    actions: ['intro', 'introduction'],
    phrases: ['deals module intro'],
  },

  // ---------- User Onboarding ----------
  {
    label: 'User Onboarding',
    to: '/docs/onboarding',
    kind: 'howto',
    entities: ['onboarding', 'signup', 'sign up', 'register', 'registration', 'account'],
    actions: ['start', 'begin', 'complete', 'create'],
    keywords: ['first login', 'sign up', 'register', 'welcome'],
    phrases: [
      'user onboarding',
      'how to signup',
      'sign up',
      'create account',
      'register account',
      'onboarding guide',
      'how to get started',
    ],
  },
  {
    label: 'Profile Settings',
    to: '/docs/profile-settings',
    kind: 'configure',
    entities: ['profile', 'password', 'signature', 'calendar'],
    actions: ['change', 'update', 'configure', 'setup'],
    phrases: ['profile settings', 'change password', 'email signature'],
  },

  // ---------- Leads ----------
  {
    label: 'Creating Leads',
    to: '/docs/Leads-Module/creating-leads',
    kind: 'howto',
    entities: ['lead', 'leads'],
    actions: ['create', 'creating', 'add', 'adding', 'new', 'make', 'making', 'register'],
    phrases: [
      'create a lead',
      'create lead',
      'how to create a lead',
      'how to create lead',
      'add a lead',
      'add lead',
      'new lead',
      'making a lead',
      'how do i create a lead',
    ],
  },
  {
    label: 'Lead Conversion',
    to: '/docs/Leads-Module/lead-conversion',
    kind: 'howto',
    entities: ['lead', 'leads'],
    actions: ['convert', 'converting', 'conversion', 'qualify', 'qualification'],
    phrases: [
      'convert a lead',
      'convert lead',
      'lead conversion',
      'qualify lead',
      'how to convert a lead',
      'convert lead to deal',
    ],
  },
  {
    label: 'Lead Search and Filters',
    to: '/docs/Leads-Module/search-and-filters',
    kind: 'howto',
    entities: ['lead', 'leads'],
    actions: ['search', 'filter', 'filters', 'find', 'locate'],
    phrases: ['search leads', 'filter leads', 'find a lead', 'how to search leads'],
  },
  {
    label: 'Lead Bulk Actions',
    to: '/docs/Leads-Module/bulk-actions',
    kind: 'howto',
    entities: ['lead', 'leads'],
    actions: ['bulk', 'mass', 'multiple', 'delete', 'archive', 'assign'],
    phrases: ['bulk leads', 'bulk actions leads', 'archive leads', 'delete leads'],
  },
  {
    label: 'Lead Custom Views',
    to: '/docs/Leads-Module/custom-views',
    kind: 'howto',
    entities: ['lead', 'leads'],
    actions: ['view', 'views', 'custom'],
    phrases: ['lead custom views', 'custom views leads', 'create lead view'],
  },
  {
    label: 'Export Leads',
    to: '/docs/Leads-Module/export-leads',
    kind: 'howto',
    entities: ['lead', 'leads'],
    actions: ['export', 'download', 'csv'],
    phrases: ['export leads', 'download leads', 'how to export leads'],
  },
  {
    label: 'Lead Smart Nudges',
    to: '/docs/Leads-Module/smart-nudges',
    kind: 'definition',
    entities: ['lead', 'leads', 'nudge', 'nudges'],
    actions: ['smart', 'ai', 'recommend'],
    phrases: ['smart nudges', 'lead nudges', 'what are smart nudges'],
  },
  {
    label: 'Lead Notes',
    to: '/docs/Leads-Module/notes',
    kind: 'howto',
    entities: ['lead', 'leads', 'note', 'notes'],
    actions: ['create', 'add', 'write'],
    phrases: ['lead notes', 'add note to lead', 'create note lead'],
  },
  {
    label: 'Lead Tasks',
    to: '/docs/Leads-Module/tasks',
    kind: 'howto',
    entities: ['lead', 'leads', 'task', 'tasks'],
    actions: ['create', 'add', 'schedule'],
    phrases: ['lead tasks', 'create task for lead'],
  },
  {
    label: 'Lead Meetings',
    to: '/docs/Leads-Module/meetings',
    kind: 'howto',
    entities: ['lead', 'leads', 'meeting', 'meetings'],
    actions: ['schedule', 'create', 'log'],
    phrases: ['lead meetings', 'schedule meeting lead', 'log meeting lead'],
  },
  {
    label: 'Lead Emails',
    to: '/docs/Leads-Module/emails',
    kind: 'howto',
    entities: ['lead', 'leads', 'email', 'emails'],
    actions: ['send', 'compose'],
    phrases: ['lead emails', 'email a lead', 'send email lead'],
  },
  {
    label: 'Leads Overview',
    to: '/docs/Leads-Module/overview',
    kind: 'definition',
    entities: ['lead', 'leads', 'prospect', 'prospects'],
    actions: ['overview', 'intro', 'introduction', 'understand'],
    keywords: [
      'potential customers',
      'enquiry',
      'qualification',
      'lead lifecycle',
      'capture',
      'organize',
    ],
    phrases: [
      'leads module',
      'lead overview',
      'leads overview',
      'what are leads',
      'what is a lead',
      'what is lead',
      'explain leads',
      'define lead',
      'define leads',
      'meaning of lead',
      'about leads',
    ],
  },

  // ---------- Deals ----------
  {
    label: 'Creating Deals',
    to: '/docs/Deals-Module/creating-deals',
    entities: ['deal', 'deals', 'pipeline'],
    actions: ['create', 'creating', 'add', 'adding', 'new', 'make'],
    phrases: [
      'create a deal',
      'create deal',
      'how to create a deal',
      'how to create deal',
      'new deal',
      'add a deal',
      'add deal',
    ],
  },
  {
    label: 'Deal Details',
    to: '/docs/Deals-Module/deal-details',
    entities: ['deal', 'deals'],
    actions: ['details', 'stages', 'stage'],
    phrases: ['deal details', 'deal stages', 'move deal stage'],
  },
  {
    label: 'Deal Score',
    to: '/docs/Deals-Module/deal-score',
    entities: ['deal', 'deals', 'score'],
    actions: ['score', 'scoring', 'trend'],
    phrases: ['deal score', 'deal scoring'],
  },
  {
    label: 'Deal Search and Filters',
    to: '/docs/Deals-Module/search-and-filters',
    entities: ['deal', 'deals'],
    actions: ['search', 'filter', 'filters', 'find'],
    phrases: ['search deals', 'filter deals', 'find a deal'],
  },
  {
    label: 'Deal Bulk Actions',
    to: '/docs/Deals-Module/bulk-actions',
    entities: ['deal', 'deals'],
    actions: ['bulk', 'mass', 'multiple'],
    phrases: ['bulk deals', 'bulk actions deals'],
  },
  {
    label: 'Deal Custom Views',
    to: '/docs/Deals-Module/custom-views',
    entities: ['deal', 'deals'],
    actions: ['view', 'views', 'custom'],
    phrases: ['deal custom views', 'custom views deals'],
  },
  {
    label: 'Export Deals',
    to: '/docs/Deals-Module/export-deals',
    entities: ['deal', 'deals'],
    actions: ['export', 'download'],
    phrases: ['export deals', 'download deals'],
  },
  {
    label: 'Deal Smart Nudges',
    to: '/docs/Deals-Module/smart-nudges',
    entities: ['deal', 'deals', 'nudge', 'nudges'],
    actions: ['smart', 'ai', 'recommend'],
    phrases: ['deal smart nudges', 'deal nudges'],
  },
  {
    label: 'Deal Tasks',
    to: '/docs/Deals-Module/tasks',
    entities: ['deal', 'deals', 'task', 'tasks'],
    actions: ['create', 'add', 'schedule'],
    phrases: ['deal tasks', 'create task for deal'],
  },
  {
    label: 'Deal Notes',
    to: '/docs/Deals-Module/notes',
    entities: ['deal', 'deals', 'note', 'notes'],
    actions: ['create', 'add', 'write'],
    phrases: ['deal notes', 'add note to deal'],
  },
  {
    label: 'Deal Meetings',
    to: '/docs/Deals-Module/meetings',
    entities: ['deal', 'deals', 'meeting', 'meetings'],
    actions: ['schedule', 'create', 'log'],
    phrases: ['deal meetings', 'schedule meeting deal'],
  },
  {
    label: 'Deal Emails',
    to: '/docs/Deals-Module/emails',
    entities: ['deal', 'deals', 'email', 'emails'],
    actions: ['send', 'compose'],
    phrases: ['deal emails', 'email a deal'],
  },
  {
    label: 'Proposals',
    to: '/docs/Deals-Module/proposals',
    entities: ['proposal', 'proposals'],
    actions: ['create', 'upload', 'send'],
    phrases: ['create proposal', 'upload proposal', 'send proposal'],
  },
  {
    label: 'Quotes',
    to: '/docs/Deals-Module/quotes',
    entities: ['quote', 'quotes'],
    actions: ['create', 'upload', 'send'],
    phrases: ['create quote', 'upload quote', 'send quote'],
  },
  {
    label: 'Deals Overview',
    to: '/docs/Deals-Module/overview',
    kind: 'definition',
    entities: ['deal', 'deals', 'pipeline', 'opportunity'],
    actions: ['overview', 'intro'],
    keywords: ['pipeline', 'opportunity', 'sales process', 'stages'],
    phrases: [
      'deals module',
      'deal overview',
      'deals overview',
      'what are deals',
      'what is a deal',
      'what is deal',
      'explain deals',
      'define deal',
      'about deals',
      'what is pipeline',
    ],
  },

  // ---------- Contacts ----------
  {
    label: 'Creating Contacts',
    to: '/docs/Contacts-Module/creating-contacts',
    entities: ['contact', 'contacts'],
    actions: ['create', 'creating', 'add', 'adding', 'new'],
    phrases: [
      'create a contact',
      'create contact',
      'how to create a contact',
      'how to create contact',
      'add contact',
      'new contact',
    ],
  },
  {
    label: 'Contact Details',
    to: '/docs/Contacts-Module/contact-details',
    entities: ['contact', 'contacts'],
    actions: ['details', 'overview', 'profile'],
    phrases: ['contact details', 'contact overview page'],
  },
  {
    label: 'Contact Search and Filters',
    to: '/docs/Contacts-Module/search-and-filters',
    entities: ['contact', 'contacts'],
    actions: ['search', 'filter', 'filters', 'find'],
    phrases: ['search contacts', 'filter contacts', 'find a contact'],
  },
  {
    label: 'Contact Bulk Actions',
    to: '/docs/Contacts-Module/bulk-actions',
    entities: ['contact', 'contacts'],
    actions: ['bulk', 'mass', 'multiple'],
    phrases: ['bulk contacts', 'bulk actions contacts'],
  },
  {
    label: 'Contact Custom Views',
    to: '/docs/Contacts-Module/custom-views',
    entities: ['contact', 'contacts'],
    actions: ['view', 'views', 'custom'],
    phrases: ['contact custom views', 'custom views contacts'],
  },
  {
    label: 'Export Contacts',
    to: '/docs/Contacts-Module/export-contacts',
    entities: ['contact', 'contacts'],
    actions: ['export', 'download'],
    phrases: ['export contacts', 'download contacts'],
  },
  {
    label: 'Contact Notes',
    to: '/docs/Contacts-Module/notes',
    entities: ['contact', 'contacts', 'note', 'notes'],
    actions: ['create', 'add', 'write'],
    phrases: ['contact notes', 'add note to contact'],
  },
  {
    label: 'Contact Tasks',
    to: '/docs/Contacts-Module/tasks',
    entities: ['contact', 'contacts', 'task', 'tasks'],
    actions: ['create', 'add', 'schedule'],
    phrases: ['contact tasks', 'create task for contact'],
  },
  {
    label: 'Linked Deals for Contacts',
    to: '/docs/Contacts-Module/linked-deals',
    entities: ['contact', 'contacts', 'deal', 'deals'],
    actions: ['link', 'linked'],
    phrases: ['linked deals contacts', 'contact linked deals'],
  },
  {
    label: 'Linked Leads for Contacts',
    to: '/docs/Contacts-Module/linked-leads',
    entities: ['contact', 'contacts', 'lead', 'leads'],
    actions: ['link', 'linked'],
    phrases: ['linked leads contacts', 'contact linked leads'],
  },
  {
    label: 'Contacts Overview',
    to: '/docs/Contacts-Module/overview',
    kind: 'definition',
    entities: ['contact', 'contacts', 'people', 'person'],
    actions: ['overview', 'intro'],
    keywords: ['customer', 'person', 'people', 'relationship'],
    phrases: [
      'contacts module',
      'contact overview',
      'contacts overview',
      'what are contacts',
      'what is a contact',
      'explain contacts',
      'define contact',
      'about contacts',
    ],
  },
  {
    label: 'Contact Activities Overview',
    to: '/docs/Contacts-Module/activities-overview',
    kind: 'definition',
    entities: ['contact', 'contacts', 'activity', 'activities'],
    actions: ['overview', 'manage'],
    phrases: ['contact activities', 'activities on contact'],
  },

  // ---------- Organizations ----------
  {
    label: 'Creating Organizations',
    to: '/docs/Organizations-Module/creating-organizations',
    entities: ['organization', 'organizations', 'account', 'accounts', 'company'],
    actions: ['create', 'creating', 'add', 'adding', 'new'],
    phrases: [
      'create an organization',
      'create organization',
      'how to create an organization',
      'how to create organization',
      'add organization',
      'new organization',
      'create company',
    ],
  },
  {
    label: 'Organization Details',
    to: '/docs/Organizations-Module/organization-details',
    entities: ['organization', 'organizations'],
    actions: ['details', 'profile'],
    phrases: ['organization details'],
  },
  {
    label: 'Organization Search and Filters',
    to: '/docs/Organizations-Module/search-and-filters',
    entities: ['organization', 'organizations'],
    actions: ['search', 'filter', 'filters', 'find'],
    phrases: ['search organizations', 'filter organizations'],
  },
  {
    label: 'Organization Bulk Actions',
    to: '/docs/Organizations-Module/bulk-actions',
    entities: ['organization', 'organizations'],
    actions: ['bulk', 'mass', 'multiple'],
    phrases: ['bulk organizations', 'bulk actions organizations'],
  },
  {
    label: 'Organization Custom Views',
    to: '/docs/Organizations-Module/custom-views',
    entities: ['organization', 'organizations'],
    actions: ['view', 'views', 'custom'],
    phrases: ['organization custom views', 'custom views organizations'],
  },
  {
    label: 'Export Organizations',
    to: '/docs/Organizations-Module/export-organizations',
    entities: ['organization', 'organizations'],
    actions: ['export', 'download'],
    phrases: ['export organizations', 'download organizations'],
  },
  {
    label: 'Linked Contacts for Organizations',
    to: '/docs/Organizations-Module/linked-contacts',
    entities: ['organization', 'organizations', 'contact', 'contacts'],
    actions: ['link', 'linked'],
    phrases: ['organization linked contacts'],
  },
  {
    label: 'Linked Deals for Organizations',
    to: '/docs/Organizations-Module/linked-deals',
    entities: ['organization', 'organizations', 'deal', 'deals'],
    actions: ['link', 'linked'],
    phrases: ['organization linked deals'],
  },
  {
    label: 'Organizations Overview',
    to: '/docs/Organizations-Module/overview',
    kind: 'definition',
    entities: ['organization', 'organizations', 'account', 'company', 'companies'],
    actions: ['overview', 'intro'],
    keywords: ['company', 'account', 'business'],
    phrases: [
      'organizations module',
      'organization overview',
      'organizations overview',
      'what are organizations',
      'what is an organization',
      'what is a company',
      'explain organizations',
      'about organizations',
    ],
  },

  // ---------- Activities ----------
  {
    label: 'Activities',
    to: '/docs/Activities-Module/activities',
    kind: 'definition',
    entities: ['activity', 'activities', 'task', 'tasks', 'timeline'],
    actions: ['create', 'track', 'manage', 'overview', 'filter'],
    keywords: ['notes', 'meetings', 'emails', 'follow up'],
    phrases: [
      'activities module',
      'how to manage activities',
      'create activity',
      'activity filters',
      'what are activities',
      'what is an activity',
    ],
  },

  // ---------- Calendar ----------
  {
    label: 'Calendar',
    to: '/docs/Calendar-Module/calendar',
    kind: 'howto',
    entities: ['calendar', 'meeting', 'meetings', 'schedule', 'appointment'],
    actions: ['create', 'view', 'schedule', 'open'],
    phrases: [
      'calendar module',
      'schedule a meeting',
      'create meeting',
      'calendar view',
      'day view',
      'week view',
      'month view',
      'how to schedule a meeting',
      'how to use calendar',
    ],
  },

  // ---------- Pulse Inbox ----------
  {
    label: 'Pulse Inbox',
    to: '/docs/Pulse-Module/Pulse-Overview',
    kind: 'definition',
    entities: ['pulse', 'inbox', 'message', 'messages', 'chat', 'conversation'],
    actions: ['overview', 'open', 'use', 'reply'],
    keywords: ['customer conversations', 'omnichannel', 'support inbox'],
    phrases: [
      'pulse inbox',
      'inbox overview',
      'how to use pulse',
      'open inbox',
      'what is pulse',
      'what is pulse inbox',
      'explain pulse',
      'about pulse',
    ],
  },
  {
    label: 'Pulse Settings Overview',
    to: '/docs/Pulse-Settings/Overview',
    kind: 'configure',
    entities: ['pulse', 'inbox'],
    actions: ['settings', 'configure', 'setup'],
    phrases: ['pulse settings', 'configure pulse'],
  },
  {
    label: 'Pulse Channels',
    to: '/docs/Pulse-Settings/Channels/Channels',
    kind: 'configure',
    entities: ['pulse', 'channel', 'channels', 'whatsapp', 'instagram', 'messenger'],
    actions: ['setup', 'configure', 'add', 'open', 'view'],
    phrases: [
      'channels',
      'channel',
      'pulse channels',
      'setup channels',
      'configure channels',
      'whatsapp channel',
    ],
  },
  {
    label: 'WebChat Setup',
    to: '/docs/Pulse-Settings/Channels/WebChat',
    entities: ['webchat', 'chat', 'widget'],
    actions: ['setup', 'configure', 'create'],
    phrases: ['webchat setup', 'configure webchat', 'pulse web chat'],
  },
  {
    label: 'Widget Setup',
    to: '/docs/Pulse-Settings/Channels/Widget-Setup',
    entities: ['widget'],
    actions: ['setup', 'configure', 'install'],
    phrases: ['widget setup', 'install widget'],
  },
  {
    label: 'Conversation Flow',
    to: '/docs/Pulse-Settings/Channels/Conversation-Flow',
    entities: ['conversation', 'flow'],
    actions: ['setup', 'configure', 'create'],
    phrases: ['conversation flow', 'setup conversation flow'],
  },
  {
    label: 'Pulse Assignment Rules',
    to: '/docs/Pulse-Settings/AssignmentRules',
    entities: ['assignment', 'assign', 'routing'],
    actions: ['create', 'configure', 'setup'],
    phrases: ['assignment rules', 'pulse assignment'],
  },
  {
    label: 'Pulse Knowledge Base',
    to: '/docs/Pulse-Settings/KnowledgeBase',
    entities: ['knowledge', 'knowledgebase', 'kb'],
    actions: ['setup', 'configure', 'add'],
    phrases: ['pulse knowledge base', 'knowledge base'],
  },
  {
    label: 'Support Availability',
    to: '/docs/Pulse-Settings/SupportAvailability',
    entities: ['support', 'availability', 'business hours', 'holiday'],
    actions: ['configure', 'setup'],
    phrases: ['support availability', 'business hours', 'after hours'],
  },
  {
    label: 'Pulse Users and Access',
    to: '/docs/Pulse-Settings/Users&Access',
    entities: ['pulse', 'access', 'agent', 'agents'],
    actions: ['add', 'manage', 'invite'],
    phrases: ['pulse users', 'add pulse user'],
  },
  {
    label: 'Pulse Global Settings',
    to: '/docs/Pulse-Settings/GlobalSettings',
    entities: ['pulse', 'global'],
    actions: ['configure', 'settings'],
    phrases: ['pulse global settings'],
  },

  // ---------- Settings ----------
  {
    label: 'User Management',
    to: '/docs/user-management/overview',
    kind: 'definition',
    entities: ['user', 'users', 'management'],
    actions: ['manage', 'overview', 'configure'],
    phrases: ['user management', 'manage users overview', 'what is user management'],
  },
  {
    label: 'Manage Users',
    to: '/docs/user-management/users',
    kind: 'howto',
    entities: ['user', 'users', 'member', 'members', 'teammate', 'teammates'],
    actions: ['create', 'add', 'invite', 'inviting', 'manage', 'onboard'],
    keywords: ['invitation', 'resend', 'deactivate', 'workspace users', 'email address'],
    phrases: [
      'create user',
      'add user',
      'invite user',
      'invite users',
      'manage users',
      'how to invite users',
      'how to invite a user',
      'how to invite user',
      'how do i invite users',
      'add team members',
      'invite team members',
      'invite teammate',
      'onboard users',
    ],
  },
  {
    label: 'Roles',
    to: '/docs/user-management/roles',
    kind: 'configure',
    entities: ['role', 'roles', 'permission', 'permissions'],
    actions: ['create', 'add', 'manage', 'configure'],
    phrases: [
      'create role',
      'manage roles',
      'user roles',
      'what are roles',
      'how to create a role',
    ],
  },
  {
    label: 'Access and Sharing',
    to: '/docs/user-management/Access',
    entities: ['access', 'sharing', 'team', 'teams'],
    actions: ['create', 'configure', 'manage'],
    phrases: ['sharing rules', 'create team', 'access control'],
  },
  {
    label: 'Organization Profile',
    to: '/docs/Organization/Profile',
    entities: ['organization profile', 'company profile', 'org profile'],
    actions: ['update', 'configure', 'edit'],
    phrases: ['organization profile', 'company profile settings'],
  },
  {
    label: 'Localization',
    to: '/docs/Organization/Localization',
    entities: ['localization', 'locale', 'timezone', 'language', 'currency'],
    actions: ['configure', 'setup', 'change'],
    phrases: ['localization settings', 'change timezone', 'change language'],
  },
  {
    label: 'Work Schedule',
    to: '/docs/Organization/WorkSchedule',
    entities: ['work schedule', 'business hours', 'holiday', 'holidays'],
    actions: ['configure', 'setup'],
    phrases: ['work schedule', 'organization holidays'],
  },
  {
    label: 'Branding',
    to: '/docs/Organization/Branding',
    entities: ['branding', 'logo', 'theme'],
    actions: ['configure', 'update', 'upload'],
    phrases: ['branding settings', 'upload logo'],
  },
  {
    label: 'Custom Fields',
    to: '/docs/Configure/Custom-Fields',
    entities: ['custom field', 'custom fields', 'field', 'fields'],
    actions: ['create', 'add', 'configure'],
    phrases: ['create custom field', 'add custom field', 'custom fields'],
  },
  {
    label: 'Configure Leads',
    to: '/docs/Configure/Leads',
    entities: ['lead', 'leads', 'scoring'],
    actions: ['configure', 'setup', 'score'],
    phrases: ['configure leads', 'lead scoring settings'],
  },
  {
    label: 'Configure Deals',
    to: '/docs/Configure/Deals',
    entities: ['deal', 'deals', 'pipeline', 'stage'],
    actions: ['configure', 'setup', 'create'],
    phrases: ['configure deals', 'create pipeline', 'deal settings'],
  },
  {
    label: 'Tags',
    to: '/docs/Configure/Tags',
    entities: ['tag', 'tags'],
    actions: ['create', 'add', 'configure', 'manage'],
    phrases: ['create tag', 'manage tags', 'configure tags'],
  },
  {
    label: 'Lead Capture Integration',
    to: '/docs/Integrations/Lead-Capture',
    entities: ['integration', 'integrations', 'capture', 'webhook'],
    actions: ['connect', 'setup', 'configure'],
    phrases: ['lead capture', 'setup integration', 'configure integration'],
  },
  {
    label: 'Automation Workflows',
    to: '/docs/Automation/Workflows/Overview',
    kind: 'definition',
    entities: ['automation', 'workflow', 'workflows'],
    actions: ['create', 'setup', 'configure', 'overview'],
    phrases: [
      'create workflow',
      'automation workflows',
      'how to create a workflow',
      'what are workflows',
      'what is automation',
    ],
  },
  {
    label: 'Lead Workflows',
    to: '/docs/Automation/Workflows/Lead-Workflows',
    kind: 'howto',
    entities: ['lead', 'leads', 'workflow', 'workflows'],
    actions: ['create', 'setup', 'automate'],
    phrases: ['lead workflows', 'create lead workflow'],
  },
  {
    label: 'Deal Workflows',
    to: '/docs/Automation/Workflows/Deal-Workflows',
    kind: 'howto',
    entities: ['deal', 'deals', 'workflow', 'workflows'],
    actions: ['create', 'setup', 'automate'],
    phrases: ['deal workflows', 'create deal workflow'],
  },
  {
    label: 'Workflow Action Nodes',
    to: '/docs/Automation/Workflows/Workflow-Action-Nodes',
    kind: 'configure',
    entities: ['workflow', 'workflows', 'action', 'actions', 'node', 'nodes'],
    actions: ['configure', 'setup', 'use'],
    phrases: ['workflow actions', 'action nodes', 'workflow action nodes'],
  },
  {
    label: 'Logic Control Nodes',
    to: '/docs/Automation/Workflows/Logic-Control-Nodes',
    kind: 'configure',
    entities: ['workflow', 'logic', 'condition', 'conditions', 'branch'],
    actions: ['configure', 'setup', 'use'],
    phrases: ['logic control nodes', 'workflow conditions', 'if else workflow'],
  },
  {
    label: 'Timing Delay Nodes',
    to: '/docs/Automation/Workflows/Timing-Delay-Nodes',
    kind: 'configure',
    entities: ['workflow', 'delay', 'timing', 'wait'],
    actions: ['configure', 'setup', 'use'],
    phrases: ['timing delay nodes', 'workflow delay', 'wait node'],
  },
  {
    label: 'Communication Actions',
    to: '/docs/Automation/Workflows/Communication-Actions',
    kind: 'configure',
    entities: ['workflow', 'email', 'sms', 'communication'],
    actions: ['configure', 'send', 'setup'],
    phrases: ['communication actions', 'workflow email action'],
  },
  {
    label: 'Task Activity Actions',
    to: '/docs/Automation/Workflows/Task-Activity-Actions',
    kind: 'configure',
    entities: ['workflow', 'task', 'activity'],
    actions: ['configure', 'create', 'setup'],
    phrases: ['task activity actions', 'workflow create task'],
  },
  {
    label: 'Integration Actions',
    to: '/docs/Automation/Workflows/Integration-Actions',
    kind: 'configure',
    entities: ['workflow', 'integration', 'webhook'],
    actions: ['configure', 'setup', 'connect'],
    phrases: ['integration actions', 'workflow webhook'],
  },
  {
    label: 'Sequences',
    to: '/docs/Automation/Sequences',
    kind: 'howto',
    entities: ['sequence', 'sequences', 'cadence'],
    actions: ['create', 'setup', 'configure'],
    phrases: ['create sequence', 'automation sequences', 'what are sequences'],
  },
  {
    label: 'Scoring',
    to: '/docs/Automation/Scoring',
    kind: 'configure',
    entities: ['scoring', 'score', 'rule', 'rules'],
    actions: ['create', 'setup', 'configure'],
    phrases: ['create scoring rule', 'scoring rules', 'what is scoring'],
  },
];

const ACTION_INTENTS = [
  'create',
  'creating',
  'add',
  'adding',
  'new',
  'convert',
  'converting',
  'export',
  'search',
  'filter',
  'filters',
  'delete',
  'archive',
  'send',
  'upload',
  'schedule',
  'configure',
  'setup',
  'invite',
  'inviting',
  'manage',
  'update',
  'edit',
  'install',
  'connect',
  'automate',
];

const DEFINITION_PATTERNS = [
  /^what\s+(is|are)\b/,
  /^what'?s\b/,
  /^who\s+(is|are)\b/,
  /^explain\b/,
  /^define\b/,
  /^meaning\s+of\b/,
  /^tell\s+me\s+about\b/,
  /^about\b/,
];

const HOWTO_PATTERNS = [
  /^how\s+(to|do|can|should)\b/,
  /^how\s+do\s+i\b/,
  /^steps?\s+to\b/,
  /^way\s+to\b/,
  /\bhow\s+to\b/,
];

function singularize(token) {
  if (token.endsWith('ies') && token.length > 4) {
    return `${token.slice(0, -3)}y`;
  }
  if (token.endsWith('ses') || token.endsWith('xes') || token.endsWith('zes')) {
    return token.slice(0, -2);
  }
  if (token.endsWith('s') && !token.endsWith('ss') && token.length > 3) {
    return token.slice(0, -1);
  }
  return token;
}

function expandTokens(tokens) {
  const expanded = new Set(tokens);
  for (const token of tokens) {
    expanded.add(singularize(token));
    if (!token.endsWith('s')) {
      expanded.add(`${token}s`);
    }
  }
  return [...expanded];
}

export function detectIntent(query) {
  const normalized = normalizeQuery(query);
  if (DEFINITION_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return 'definition';
  }
  if (HOWTO_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return 'howto';
  }
  if (/\b(settings?|configure|configuration|setup)\b/.test(normalized)) {
    return 'configure';
  }
  return 'general';
}

export function normalizeQuery(query) {
  return query
    .toLowerCase()
    .replace(/[^\w\s']/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function tokenize(query) {
  return normalizeQuery(query)
    .split(' ')
    .filter((word) => word && !STOP_WORDS.has(word));
}

function includesTerm(haystack, term) {
  if (!term) {
    return false;
  }
  if (term.includes(' ')) {
    return haystack.includes(term);
  }
  return (
    haystack.split(' ').includes(term) ||
    haystack.includes(` ${term} `) ||
    haystack.startsWith(`${term} `) ||
    haystack.endsWith(` ${term}`)
  );
}

function scoreDoc(doc, normalizedQuery, tokens, intent) {
  let score = 0;
  const expanded = expandTokens(tokens);
  const labelNormalized = normalizeQuery(doc.label);
  const searchable = [
    doc.label,
    ...(doc.entities || []),
    ...(doc.actions || []),
    ...(doc.keywords || []),
    ...(doc.phrases || []),
  ]
    .join(' ')
    .toLowerCase();

  for (const phrase of doc.phrases || []) {
    if (normalizedQuery.includes(phrase)) {
      score += 120;
    }
  }

  const matchedEntities = (doc.entities || []).filter(
    (entity) =>
      expanded.includes(entity) ||
      includesTerm(normalizedQuery, entity) ||
      tokens.some((token) => singularize(token) === singularize(entity)),
  );
  const matchedActions = (doc.actions || []).filter(
    (action) =>
      expanded.includes(action) ||
      includesTerm(normalizedQuery, action) ||
      tokens.some((token) => singularize(token) === singularize(action)),
  );
  const matchedKeywords = (doc.keywords || []).filter((keyword) =>
    includesTerm(normalizedQuery, keyword) ||
    expanded.some((token) => includesTerm(keyword, token)),
  );

  if (matchedEntities.length) {
    score += 25 * matchedEntities.length;
  }
  if (matchedActions.length) {
    score += 40 * matchedActions.length;
  }
  if (matchedKeywords.length) {
    score += 18 * matchedKeywords.length;
  }
  if (matchedEntities.length && matchedActions.length) {
    score += 55;
  }

  // Label token overlap (e.g. "user roles" → Roles)
  for (const token of expanded) {
    if (labelNormalized.includes(token) && token.length > 2) {
      score += 12;
    }
  }

  // Soft keyword bag match
  for (const token of expanded) {
    if (token.length > 2 && searchable.includes(token)) {
      score += 4;
    }
  }

  const isOverview =
    doc.kind === 'definition' ||
    /overview|intro|introduction|what is/i.test(doc.label) ||
    /\/overview$/i.test(doc.to);

  if (intent === 'definition') {
    if (isOverview && matchedEntities.length) {
      score += 90;
    }
    if (doc.kind === 'howto' && matchedActions.length === 0) {
      score -= 35;
    }
    if (matchedActions.some((action) => ACTION_INTENTS.includes(action))) {
      score -= 20;
    }
  }

  if (intent === 'howto') {
    if (doc.kind === 'howto' && matchedEntities.length && matchedActions.length) {
      score += 70;
    }
    if (isOverview && matchedActions.some((action) => ACTION_INTENTS.includes(action))) {
      score -= 45;
    }
  }

  if (intent === 'configure') {
    if (doc.kind === 'configure') {
      score += 40;
    }
  }

  if (matchedEntities.length && !matchedActions.length && isOverview) {
    score += 20;
  }

  return score;
}

const MIN_MATCH_SCORE = 20;

function rankDocs(query) {
  const trimmed = query.trim();
  if (!trimmed) {
    return [];
  }

  const normalizedQuery = normalizeQuery(trimmed);
  const tokens = tokenize(trimmed);
  const intent = detectIntent(trimmed);

  return DOC_INDEX.map((doc) => ({
    ...doc,
    score: scoreDoc(doc, normalizedQuery, tokens, intent),
  }))
    .filter((doc) => doc.score >= MIN_MATCH_SCORE)
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
}

export function resolveSearch(query) {
  const ranked = rankDocs(query);
  if (!ranked.length) {
    return null;
  }
  return {label: ranked[0].label, to: ranked[0].to};
}

export function suggestSearches(query, limit = 6) {
  return rankDocs(query)
    .slice(0, limit)
    .map(({label, to, score}) => ({label, to, score}));
}
