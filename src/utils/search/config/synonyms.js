/**
 * Expandable synonym dictionary.
 * Keys are surface forms; values are canonical terms used in matching.
 * Multi-word keys are applied before tokenization where possible.
 */
export const SYNONYM_PHRASES = [
  ['team member', 'user'],
  ['team members', 'user'],
  ['calendar event', 'activity'],
  ['calendar events', 'activity'],
  ['knowledge base', 'knowledgebase'],
  ['pulse inbox', 'pulse'],
  ['pulse ai', 'pulse'],
  ['business hours', 'businesshours'],
  ['deal pipeline', 'pipeline'],
  ['deal pipelines', 'pipeline'],
  ['pipeline stages', 'pipeline'],
  ['pipeline stage', 'pipeline'],
  ['assignment rules', 'assignment'],
  ['user roles', 'role'],
  ['lead scoring', 'scoring'],
  ['workflow automation', 'workflow'],
];

export const SYNONYMS = {
  customer: 'contact',
  customers: 'contact',
  client: 'contact',
  clients: 'contact',
  person: 'contact',
  people: 'contact',

  company: 'organization',
  companies: 'organization',
  organisation: 'organization',
  organisations: 'organization',
  account: 'organization',
  accounts: 'organization',
  firm: 'organization',

  opportunity: 'deal',
  opportunities: 'deal',
  sale: 'deal',
  sales: 'deal',

  permission: 'role',
  permissions: 'role',
  rbac: 'role',

  member: 'user',
  members: 'user',
  teammate: 'user',
  teammates: 'user',
  employee: 'user',
  employees: 'user',

  conversation: 'pulse',
  conversations: 'pulse',
  chat: 'pulse',
  chats: 'pulse',
  inbox: 'pulse',
  chatbot: 'pulse',
  'chat bot': 'pulse',

  kb: 'knowledgebase',
  knowledge: 'knowledgebase',
  knowledgebase: 'knowledgebase',
  article: 'knowledgebase',
  articles: 'knowledgebase',
  document: 'knowledgebase',
  documents: 'knowledgebase',

  meeting: 'activity',
  meetings: 'activity',
  event: 'activity',
  events: 'activity',
  task: 'activity',
  tasks: 'activity',

  prospect: 'lead',
  prospects: 'lead',
  inquiry: 'lead',
  enquiry: 'lead',

  stage: 'pipeline',
  stages: 'pipeline',
  pipeline: 'pipeline',
  pipelines: 'pipeline',

  hour: 'businesshours',
  hours: 'businesshours',
  businesshours: 'businesshours',
  schedule: 'businesshours',
  availability: 'businesshours',

  automation: 'workflow',
  workflows: 'workflow',
  workflow: 'workflow',
};
