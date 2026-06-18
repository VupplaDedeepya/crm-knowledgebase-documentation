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
          ],
        },
      ],
    },
  ]
};

export default sidebars;