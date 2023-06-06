const routes = [
  {
    label: 'Getting started',
    emoji: '🏁',
    children: [
      {
        label: 'Home',
        path: '/',
        isGitHubEditDisabled: true,
      },
      {
        label: 'Setup',
        path: '/getting-started/setup',
      },
    ],
  },
  {
    label: 'Guides',
    emoji: '📖',
    children: [
      {
        label: 'Theming',
        path: '/guides/theming',
      },
      {
        label: 'Styling',
        path: '/guides/styling',
      },
      {
        label: 'How to Test',
        path: '/guides/testing',
        new: true,
      },
      {
        label: 'How Styles are Parsed?',
        path: '/guides/how-styling-works',
      },
      {
        label: 'CSS Utilities',
        path: '/guides/css-utilities',
        new: true,
      },
      {
        label: 'Building Themes',
        path: '/guides/building-themes',
      },
      {
        label: 'Internationalization',
        path: '/guides/internationalization',
      },
      {
        label: 'Overrides',
        path: '/guides/understanding-overrides',
      },
      {
        label: 'Bidirectionality',
        path: '/guides/bidirectionality',
      },
      {
        label: 'Accessibility',
        children: [{ path: '/guides/accessibility/focus-styles', label: 'Focus Styles', new: true }],
      },
    ],
  },
  {
    label: 'Packages',
    emoji: '📦',
    children: [
      {
        label: 'Icons Library',
        path: '/iconLibrary',
        isGitHubEditDisabled: true,
      },
      {
        label: 'Atomic Classes Cheatsheet',
        path: '/cheatsheet',
        isGitHubEditDisabled: true,
      },
      {
        label: 'Live Editor',
        path: '/live-editor',
        isGitHubEditDisabled: true,
      },
    ],
  },
  {
    components: true,
    label: 'Components',
    emoji: '🖇',
    children: [
      {
        label: 'Inputs',
        children: [
          {
            label: 'Button',
            path: '/components/button',
          },
          {
            label: 'Icon Button',
            path: '/components/icon-button',
          },
          {
            label: 'Button Group',
            path: '/components/button-group',
          },
          {
            label: 'Checkbox',
            path: '/components/checkbox',
          },
          {
            label: 'Switch',
            path: '/components/switch',
          },
          {
            label: 'Radio',
            path: '/components/radio',
          },
          {
            label: 'Form Control',
            path: '/components/form-control',
          },
          {
            label: 'Input',
            path: '/components/input',
          },
          {
            label: 'Payment Card',
            path: '/components/payment-card',
          },
          {
            label: 'Phone Input',
            path: '/components/phone-input',
          },
          {
            label: 'Textarea',
            path: '/components/textarea',
          },
          {
            label: 'Search',
            path: '/components/search',
          },
          {
            label: 'Select',
            path: '/components/select',
          },
          {
            label: 'AsyncSelect',
            path: '/components/async-select',
          },
          {
            label: 'Tag',
            path: '/components/tag',
          },
          {
            label: 'Slider',
            path: '/components/slider',
          },
        ],
      },
      {
        label: 'Date & Time',
        children: [
          {
            label: 'Date Picker',
            path: '/components/date-picker',
          },
          {
            label: 'Time Zone Picker',
            path: '/components/time-zone-picker',
          },
          {
            label: 'Time Picker',
            path: '/components/time-picker',
          },
          {
            label: 'Time Range Picker',
            path: '/components/time-range-picker',
          },
          {
            label: 'Date Input',
            path: '/components/date-input',
            new: true,
          },
        ],
      },
      {
        label: 'Content',
        children: [
          {
            label: 'Typography',
            path: '/components/typography',
          },
          {
            label: 'Avatar',
            path: '/components/avatar',
          },
          {
            label: 'Badge',
            path: '/components/badge',
          },
          {
            label: 'Icon',
            path: '/components/icon',
            isGitHubEditDisabled: true,
          },
          {
            label: 'List',
            path: '/components/list',
          },
          {
            label: 'Image',
            path: '/components/image',
          },
          {
            label: 'Video',
            path: '/components/video',
          },
          {
            label: 'Banner',
            path: '/components/banner',
            new: true,
          },
        ],
      },
      {
        label: 'Progress & Validation',
        children: [
          {
            label: 'Loader',
            path: '/components/loader',
          },
          {
            label: 'Progress',
            path: '/components/progress',
          },
          {
            label: 'Snackbar',
            path: '/components/snackbar',
          },
        ],
      },
      {
        label: 'Utilities',
        children: [
          {
            label: 'Box',
            path: '/components/box',
          },
          {
            label: 'Stack',
            path: '/components/stack',
          },
          {
            label: 'Layout & Grid System',
            path: '/components/grid',
          },
          {
            label: 'Base Button',
            path: '/components/base-button',
          },
          {
            label: 'SpacewebProvider',
            path: '/components/spaceweb-provider',
          },
          {
            label: 'Test Provider',
            path: '/components/test-provider',
          },
        ],
      },
      {
        label: 'Navigation',
        children: [
          {
            label: 'Tabs',
            path: '/components/tabs',
          },
          {
            label: 'Link',
            path: '/components/link',
          },
          {
            label: 'BreadCrumb',
            path: '/components/breadcrumb',
            new: true,
          },
        ],
      },
      {
        label: 'Pickers',
        children: [
          {
            label: 'Menu',
            path: '/components/menu',
          },
          {
            label: 'Color Picker',
            path: '/components/color-picker',
            new: true,
          },
        ],
      },
      {
        label: 'Surfaces',
        children: [
          {
            label: 'Modal',
            path: '/components/modal',
          },
          {
            label: 'Tooltip',
            path: '/components/tooltip',
          },
          {
            label: 'Popover',
            path: '/components/popover',
          },
        ],
      },
    ],
  },
];

export default routes;
