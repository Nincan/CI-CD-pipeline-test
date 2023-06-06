import { Tab, TabList } from 'spaceweb/tabs';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

const TabsConfig: YardConfig = {
  componentName: 'TabList',
  imports: {
    'spaceweb/tabs': { named: ['TabList'] },
  },
  scope: {
    TabList,
    Tab,
  },
  theme: ['tabsFill', 'tabColor'],
  props: {
    position: {
      value: 'top',
      type: PropTypes.FixedString,
      options: ['top', 'left', 'right'],
      description: 'The orientation of the tabs component.',
    },
    className: {
      value: 'border-b border-solid spr-border-03',
      type: PropTypes.String,
      description: 'Enriched style to be provided to TabList',
    },
    variant: {
      value: 'default',
      type: PropTypes.FixedString,
      options: ['default', 'flap'],
      description: 'The variant of the tab component.',
    },
    children: {
      value: `<Tab>
  Tab Link 1
</Tab>
<Tab>
  Tab Link 2
</Tab>
<Tab>
  Tab Link 3
</Tab>`,
      type: PropTypes.ReactNode,
      description: 'An array of Tab components.',
      imports: {
        'spaceweb/tabs': { named: ['Tab'] },
      },
    },
    onChange: {
      value: '({ activeTabId }) => {\n  setActiveTabId(activeTabId);\n}',
      type: PropTypes.Function,
      description: 'Change handler that is called every time a new tab is selected.',
      propHook: {
        what: 'activeTabId',
        into: 'activeTabId',
      },
    },
    activeTabId: {
      value: '1',
      type: PropTypes.String,
      description: 'Key of the the tab to be selected.',
      stateful: true,
    },
    activateOnFocus: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Indicates when focusing/navigating using arrow keys, tab should also be selected.',
      defaultValue: false,
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['TabList', 'Tab'],
        sharedProps: {
          $active: {
            type: PropTypes.Boolean,
            description: 'True when the tab is active.',
          },
          $orientation: 'orientation',
          $variant: 'variant',
        },
      },
    },
  },
};

export default TabsConfig;
