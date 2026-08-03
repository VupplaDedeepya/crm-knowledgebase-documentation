/**
 * Map surface verbs to a canonical action.
 * Expand this object when new action synonyms appear in docs.
 */
export const ACTION_MAP = {
  add: 'create',
  adding: 'create',
  create: 'create',
  creating: 'create',
  new: 'create',
  make: 'create',
  making: 'create',
  register: 'create',
  registering: 'create',

  modify: 'edit',
  update: 'edit',
  updating: 'edit',
  change: 'edit',
  changing: 'edit',
  edit: 'edit',
  editing: 'edit',
  rename: 'edit',

  remove: 'delete',
  removing: 'delete',
  delete: 'delete',
  deleting: 'delete',
  erase: 'delete',
  eraseing: 'delete',

  assign: 'assign',
  assigning: 'assign',
  allocate: 'assign',
  allocating: 'assign',
  invite: 'invite',
  inviting: 'invite',

  configure: 'configure',
  configuring: 'configure',
  setup: 'configure',
  'set up': 'configure',
  customize: 'configure',
  customizing: 'configure',
  settings: 'configure',
  setting: 'configure',

  find: 'search',
  finding: 'search',
  search: 'search',
  searching: 'search',
  locate: 'search',
  locating: 'search',
  filter: 'search',
  filtering: 'search',

  view: 'view',
  viewing: 'view',
  open: 'view',
  opening: 'view',
  show: 'view',
  showing: 'view',
  see: 'view',
  display: 'view',

  upload: 'upload',
  uploading: 'upload',
  import: 'import',
  importing: 'import',
  export: 'export',
  exporting: 'export',
  download: 'export',

  manage: 'manage',
  managing: 'manage',
  convert: 'convert',
  converting: 'convert',
};

/** Canonical actions that imply a how-to / mutate intent. */
export const MUTATING_ACTIONS = new Set([
  'create',
  'edit',
  'delete',
  'assign',
  'invite',
  'configure',
  'upload',
  'import',
  'export',
  'manage',
  'convert',
]);
