const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'CRM Modules',
      items: [
        'lead-module',
        'deal-module',
      ],
    },
  ],

  onboardingSidebar: [
    'onboarding',
    'profile-settings'
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
          ],
        },
        {
          type: 'category',
          label: 'Configure',
          items: [
            'Configure/Custom-Fields',
            'Configure/Leads',
            'Configure/Deals',
            'Configure/Tags',
          ],
        },
        {
          type: 'category',
          label: 'Integrations',
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
                'Automation/Workflows/Deal-Workflows',
                'Automation/Workflows/Logic-Control-Nodes',
                'Automation/Workflows/Workflow-Action-Nodes',
                'Automation/Workflows/Timing-Delay-Nodes',
                'Automation/Workflows/Communication-Actions',
                'Automation/Workflows/Task-Activity-Actions',
                'Automation/Workflows/Integration-Actions',
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

export default sidebars;