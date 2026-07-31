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
    entities: ['intro', 'introduction', 'getting started', 'start'],
    actions: ['overview', 'begin', 'start'],
    phrases: ['getting started', 'introduction', 'crm intro'],
  },
  {
    label: 'Leads Module Intro',
    to: '/docs/leads-module',
    entities: ['lead', 'leads'],
    actions: ['intro', 'introduction'],
    phrases: ['leads module intro'],
  },
  {
    label: 'Deals Module Intro',
    to: '/docs/deal-module',
    entities: ['deal', 'deals'],
    actions: ['intro', 'introduction'],
    phrases: ['deals module intro'],
  },

  // ---------- User Onboarding ----------
  {
    label: 'User Onboarding',
    to: '/docs/onboarding',
    entities: ['onboarding', 'signup', 'sign up', 'register', 'registration'],
    actions: ['start', 'begin', 'complete', 'create'],
    phrases: [
      'user onboarding',
      'how to signup',
      'sign up',
      'create account',
      'register account',
      'onboarding guide',
    ],
  },
  {
    label: 'Profile Settings',
    to: '/docs/profile-settings',
    entities: ['profile', 'password', 'signature', 'calendar'],
    actions: ['change', 'update', 'configure', 'setup'],
    phrases: ['profile settings', 'change password', 'email signature'],
  },

  // ---------- Leads ----------
  {
    label: 'Creating Leads',
    to: '/docs/Leads-Module/creating-leads',
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
    ],
  },
  {
    label: 'Lead Conversion',
    to: '/docs/Leads-Module/lead-conversion',
    entities: ['lead', 'leads'],
    actions: ['convert', 'converting', 'conversion', 'qualify', 'qualification'],
    phrases: ['convert a lead', 'convert lead', 'lead conversion', 'qualify lead'],
  },
  {
    label: 'Lead Search and Filters',
    to: '/docs/Leads-Module/search-and-filters',
    entities: ['lead', 'leads'],
    actions: ['search', 'filter', 'filters', 'find', 'locate'],
    phrases: ['search leads', 'filter leads', 'find a lead'],
  },
  {
    label: 'Lead Bulk Actions',
    to: '/docs/Leads-Module/bulk-actions',
    entities: ['lead', 'leads'],
    actions: ['bulk', 'mass', 'multiple', 'delete', 'archive', 'assign'],
    phrases: ['bulk leads', 'bulk actions leads', 'archive leads', 'delete leads'],
  },
  {
    label: 'Lead Custom Views',
    to: '/docs/Leads-Module/custom-views',
    entities: ['lead', 'leads'],
    actions: ['view', 'views', 'custom'],
    phrases: ['lead custom views', 'custom views leads', 'create lead view'],
  },
  {
    label: 'Export Leads',
    to: '/docs/Leads-Module/export-leads',
    entities: ['lead', 'leads'],
    actions: ['export', 'download', 'csv'],
    phrases: ['export leads', 'download leads'],
  },
  {
    label: 'Lead Smart Nudges',
    to: '/docs/Leads-Module/smart-nudges',
    entities: ['lead', 'leads', 'nudge', 'nudges'],
    actions: ['smart', 'ai', 'recommend'],
    phrases: ['smart nudges', 'lead nudges'],
  },
  {
    label: 'Lead Notes',
    to: '/docs/Leads-Module/notes',
    entities: ['lead', 'leads', 'note', 'notes'],
    actions: ['create', 'add', 'write'],
    phrases: ['lead notes', 'add note to lead', 'create note lead'],
  },
  {
    label: 'Lead Tasks',
    to: '/docs/Leads-Module/tasks',
    entities: ['lead', 'leads', 'task', 'tasks'],
    actions: ['create', 'add', 'schedule'],
    phrases: ['lead tasks', 'create task for lead'],
  },
  {
    label: 'Lead Meetings',
    to: '/docs/Leads-Module/meetings',
    entities: ['lead', 'leads', 'meeting', 'meetings'],
    actions: ['schedule', 'create', 'log'],
    phrases: ['lead meetings', 'schedule meeting lead', 'log meeting lead'],
  },
  {
    label: 'Lead Emails',
    to: '/docs/Leads-Module/emails',
    entities: ['lead', 'leads', 'email', 'emails'],
    actions: ['send', 'compose'],
    phrases: ['lead emails', 'email a lead', 'send email lead'],
  },
  {
    label: 'Leads Overview',
    to: '/docs/Leads-Module/overview',
    entities: ['lead', 'leads'],
    actions: ['overview', 'intro', 'introduction'],
    phrases: ['leads module', 'lead overview', 'leads overview'],
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
    entities: ['deal', 'deals', 'pipeline'],
    actions: ['overview', 'intro'],
    phrases: ['deals module', 'deal overview', 'deals overview'],
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
    entities: ['contact', 'contacts'],
    actions: ['overview', 'intro'],
    phrases: ['contacts module', 'contact overview', 'contacts overview'],
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
    entities: ['organization', 'organizations', 'account', 'company'],
    actions: ['overview', 'intro'],
    phrases: ['organizations module', 'organization overview', 'organizations overview'],
  },

  // ---------- Activities ----------
  {
    label: 'Activities',
    to: '/docs/Activities-Module/activities',
    entities: ['activity', 'activities', 'task', 'tasks', 'timeline'],
    actions: ['create', 'track', 'manage', 'overview', 'filter'],
    phrases: [
      'activities module',
      'how to manage activities',
      'create activity',
      'activity filters',
    ],
  },

  // ---------- Calendar ----------
  {
    label: 'Calendar',
    to: '/docs/Calendar-Module/calendar',
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
    ],
  },

  // ---------- Pulse Inbox ----------
  {
    label: 'Pulse Inbox',
    to: '/docs/Pulse-Module/Pulse-Overview',
    entities: ['pulse', 'inbox', 'message', 'messages', 'chat', 'conversation'],
    actions: ['overview', 'open', 'use', 'reply'],
    phrases: ['pulse inbox', 'inbox overview', 'how to use pulse', 'open inbox'],
  },
  {
    label: 'Pulse Settings Overview',
    to: '/docs/Pulse-Settings/Overview',
    entities: ['pulse', 'inbox'],
    actions: ['settings', 'configure', 'setup'],
    phrases: ['pulse settings', 'configure pulse'],
  },
  {
    label: 'Pulse Channels',
    to: '/docs/Pulse-Settings/Channels',
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
    entities: ['user', 'users', 'management'],
    actions: ['manage', 'overview', 'configure'],
    phrases: ['user management', 'manage users overview'],
  },
  {
    label: 'Manage Users',
    to: '/docs/user-management/users',
    entities: ['user', 'users'],
    actions: ['create', 'add', 'invite', 'manage'],
    phrases: ['create user', 'add user', 'invite user', 'manage users'],
  },
  {
    label: 'Roles',
    to: '/docs/user-management/roles',
    entities: ['role', 'roles', 'permission', 'permissions'],
    actions: ['create', 'add', 'manage', 'configure'],
    phrases: ['create role', 'manage roles', 'user roles'],
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
    entities: ['automation', 'workflow', 'workflows'],
    actions: ['create', 'setup', 'configure', 'overview'],
    phrases: ['create workflow', 'automation workflows', 'how to create a workflow'],
  },
  {
    label: 'Lead Workflows',
    to: '/docs/Automation/Workflows/Lead-Workflows',
    entities: ['lead', 'leads', 'workflow', 'workflows'],
    actions: ['create', 'setup', 'automate'],
    phrases: ['lead workflows', 'create lead workflow'],
  },
  {
    label: 'Deal Workflows',
    to: '/docs/Automation/Workflows/Deal-Workflows',
    entities: ['deal', 'deals', 'workflow', 'workflows'],
    actions: ['create', 'setup', 'automate'],
    phrases: ['deal workflows', 'create deal workflow'],
  },
  {
    label: 'Sequences',
    to: '/docs/Automation/Sequences',
    entities: ['sequence', 'sequences'],
    actions: ['create', 'setup', 'configure'],
    phrases: ['create sequence', 'automation sequences'],
  },
  {
    label: 'Scoring',
    to: '/docs/Automation/Scoring',
    entities: ['scoring', 'score', 'rule', 'rules'],
    actions: ['create', 'setup', 'configure'],
    phrases: ['create scoring rule', 'scoring rules'],
  },
];

const ACTION_INTENTS = [
  'create',
  'creating',
  'add',
  'adding',
  'new',
  'convert',
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
];

export function normalizeQuery(query) {
  return query
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function tokenize(query) {
  return normalizeQuery(query)
    .split(' ')
    .filter((word) => word && !STOP_WORDS.has(word));
}

function scoreDoc(doc, normalizedQuery, tokens) {
  let score = 0;

  for (const phrase of doc.phrases || []) {
    if (normalizedQuery.includes(phrase)) {
      score += 100;
    }
  }

  const matchedEntities = (doc.entities || []).filter(
    (entity) => tokens.includes(entity) || normalizedQuery.includes(entity),
  );
  const matchedActions = (doc.actions || []).filter(
    (action) => tokens.includes(action) || normalizedQuery.includes(action),
  );

  if (matchedEntities.length) {
    score += 20 * matchedEntities.length;
  }
  if (matchedActions.length) {
    score += 35 * matchedActions.length;
  }
  if (matchedEntities.length && matchedActions.length) {
    score += 40;
  }
  if (matchedEntities.length && !matchedActions.length && /overview/i.test(doc.label)) {
    score += 15;
  }
  if (
    matchedActions.some((action) => ACTION_INTENTS.includes(action)) &&
    /overview/i.test(doc.label)
  ) {
    score -= 25;
  }

  return score;
}

export function resolveSearch(query) {
  const trimmed = query.trim();
  if (!trimmed) {
    return null;
  }

  const normalizedQuery = normalizeQuery(trimmed);
  const tokens = tokenize(trimmed);

  let best = null;
  let bestScore = 0;

  for (const doc of DOC_INDEX) {
    const score = scoreDoc(doc, normalizedQuery, tokens);
    if (score > bestScore) {
      bestScore = score;
      best = doc;
    }
  }

  if (best && bestScore > 0) {
    return {label: best.label, to: best.to};
  }

  return {
    label: trimmed.replace(/\b\w/g, (char) => char.toUpperCase()),
    to: '/docs/intro',
  };
}

export function suggestSearches(query, limit = 6) {
  const trimmed = query.trim();
  if (!trimmed) {
    return [];
  }

  const normalizedQuery = normalizeQuery(trimmed);
  const tokens = tokenize(trimmed);

  return DOC_INDEX.map((doc) => ({
    ...doc,
    score: scoreDoc(doc, normalizedQuery, tokens),
  }))
    .filter((doc) => doc.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({label, to, score}) => ({label, to, score}));
}
