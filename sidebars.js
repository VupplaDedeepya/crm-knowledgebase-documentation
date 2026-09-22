const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'CRM Modules',
      items: [
        'Leads-Module/overview',
        'Deals-Module/overview',
      ],
    },
  ],

  onboardingSidebar: [
    'profile-settings',
  ],
  dashboardSidebar: [
    {
      type: 'category',
      label: 'Dashboard',
      items: [
        'Dashboard/overview',
        'Dashboard/sales-representative-dashboard',
        'Dashboard/leadership-dashboard',
        'Dashboard/manager-dashboard',
      ],
    },
  ],
  leadModuleSidebar: [
    {
      type: 'category',
      label: 'Leads Module',
      items: [
        'Leads-Module/overview',
        'Leads-Module/creating-leads',
        'Leads-Module/custom-views',
        'Leads-Module/search-and-filters',
        'Leads-Module/bulk-actions',
        {
          type: 'category',
          label: 'Lead Activities',
          items: [
            'Leads-Module/notes',
            'Leads-Module/tasks',
            'Leads-Module/meetings',
            'Leads-Module/emails',
          ],
        },
        'Leads-Module/smart-nudges',
        'Leads-Module/lead-conversion',
        'Leads-Module/export-leads',
      ],
    },
  ],
  dealModuleSidebar: [
    {
      type: 'category',
      label: 'Deals Module',
      items: [
        'Deals-Module/overview',
        'Deals-Module/creating-deals',
        'Deals-Module/bulk-actions',
        'Deals-Module/custom-views',
        'Deals-Module/search-and-filters',
        'Deals-Module/export-deals',
        'Deals-Module/deal-details',
        'Deals-Module/deal-score',
        'Deals-Module/smart-nudges',
        {
          type: 'category',
          label: 'Deal Activities',
          items: [
            'Deals-Module/tasks',
            'Deals-Module/notes',
            'Deals-Module/meetings',
            'Deals-Module/emails',
            'Deals-Module/proposals',
            'Deals-Module/quotes',
          ],
        },
       
      ],
    },
  ],
  contactModuleSidebar: [
    {
      type: 'category',
      label: 'Contacts Module',
      items: [
        'Contacts-Module/overview',
        'Contacts-Module/creating-contacts',
        'Contacts-Module/bulk-actions',
        'Contacts-Module/export-contacts',
        'Contacts-Module/custom-views',
        'Contacts-Module/search-and-filters',
        'Contacts-Module/contact-details',
        {
          type: 'category',
          label: 'Contact Activities',
          items: [
            'Contacts-Module/activities-overview',
            'Contacts-Module/notes',
            'Contacts-Module/tasks',
          ],
        },
        'Contacts-Module/linked-deals',
        'Contacts-Module/linked-leads',
      ],
    },
  ],
  organizationModuleSidebar: [
    {
      type: 'category',
      label: 'Organizations Module',
      items: [
        'Organizations-Module/overview',
        'Organizations-Module/creating-organizations',
        'Organizations-Module/bulk-actions',
        'Organizations-Module/custom-views',
        'Organizations-Module/search-and-filters',
        'Organizations-Module/export-organizations',
        'Organizations-Module/organization-details',
        'Organizations-Module/linked-contacts',
        'Organizations-Module/linked-deals',
      ],
    },
  ],

   ActivitiesModuleSidebar: [
    {
      type: 'category',
      label: 'Activities Module',
      items: [
        'Activities-Module/activities',
      ],
    },
  ], 
  CalendarSidebar: [
    {
      type: 'category',
      label: 'Calendar Module',
      items: [
        'Calendar-Module/calendar',
      ],
    },
  ],
  PulseInboxSidebar: [
    {
      type: 'category',
      label: 'Pulse Inbox',
      items: [
        'Pulse-Module/Pulse-Overview',
      ],
    },
  ],
  reportsSidebar: [
    {
      type: 'category',
      label: 'Reports',
      items: [
        'Reports/overview',
        'Reports/leads-reports',
        'Reports/deals-reports',
        'Reports/activities-reports',
        'Reports/organizations&contacts-reports',
        'Reports/pulse-reports',
        'Reports/sales-performance-reports',
      ],
    },
  ],
  supportSidebar: [
    {
      type: 'category',
      label: 'Support',
      items: [
        'Support/overview',
      ],
    },
  ],
  settingsSidebar: [
    {
      type: 'category',
      label: 'Settings',
      items: [
        {
          type: 'category',
          label: 'Organization Settings',
          items: [
            'Organization/Profile',
            'Organization/Localization',
            'Organization/WorkSchedule',
            'Organization/Branding',
            'Organization/target-management',
          ],
        },
        {
          type: 'category',
          label: 'User Management',
          items: [
            'user-management/overview',
            'user-management/users',
            'user-management/roles',
            'user-management/Access',
            'user-management/security',
          ],
        },
        {
          type: 'category',
          label: 'Configure',
          items: [
            'Configure/Custom-Fields',
            'Configure/lead-scoring',
            'Configure/lead-import',
            'Configure/pipeline',
            'Configure/deal-settings',
            'Configure/deal-scoring',
            'Configure/deal-import',
            'Configure/contact-import',
            'Configure/organization-import',
            'Configure/activities-import',
            'Configure/catalog',
            'Configure/Tags',
          ],
        },
        {
          type: 'category',
          label: 'Forms',
          items: [
            'Integrations/Lead-Capture',
          ],
        },
         {
          type: 'category',
          label: 'Pulse Settings',
          items: [
            'Pulse-Settings/Overview',
            {
              type: 'category',
              label: 'Channels',
              items: [
                'Pulse-Settings/Channels/Channels',
                'Pulse-Settings/Channels/WebChat',
                'Pulse-Settings/Channels/Widget-Setup',
                'Pulse-Settings/Channels/Conversation-Flow',
              ],
            },
            'Pulse-Settings/Users&Access',
            'Pulse-Settings/AssignmentRules',
            'Pulse-Settings/KnowledgeBase',
            'Pulse-Settings/SupportAvailability',
            'Pulse-Settings/GlobalSettings',
            'Pulse-Settings/PulseTags',
          ],
        },
        {
          type: 'category',
          label: 'Call Settings',
          items: [
            'Call-Settings/providers',
            'Call-Settings/call-logs',
          ],
        },
        {
          type: 'category',
          label: 'Automation',
          items: [
            {
              type: 'category',
              label: 'Workflows',
              items: [
                'Automation/Workflows/Overview',
                'Automation/Workflows/Lead-Workflows',
                'Automation/Workflows/Logic-Control-Nodes',
                'Automation/Workflows/Workflow-Action-Nodes',
                'Automation/Workflows/Timing-Delay-Nodes',
                'Automation/Workflows/Communication-Actions',
                'Automation/Workflows/Task-Activity-Actions',
                'Automation/Workflows/Integration-Actions',
                'Automation/Workflows/Deal-Workflows',
              ],
            },
            'Automation/Sequences',
            'Automation/Scoring',
          ],
        },
      ],
    },
  ]
};

module.exports = sidebars;