import { ListItem, ListItemText } from 'spaceweb/list';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';
import TooltipConfig from '../tooltip/config';

const ListItemConfig: YardConfig = {
  componentName: 'ListItem',
  imports: {
    'spaceweb/list': {
      named: ['ListItem'],
    },
  },
  scope: {
    ListItem,
    ListItemText,
    ChevronDown,
  },
  theme: [],
  props: {
    children: {
      value: '<ListItemText>Item</ListItemText>',
      type: PropTypes.ReactNode,
      description: 'Text/node to render inside item',
      imports: {
        'spaceweb/list': {
          named: ['ListItemText'],
        },
        'spaceweb-icons/line/ChevronDown': {
          default: 'ChevronDown',
        },
      },
    },
    $as: {
      value: 'li',
      defaultValue: 'li',
      type: PropTypes.String,
      description: 'Modifies the base element used to render item.',
    },
    startEnhancer: {
      value: '() => <span>🦊</span>',
      type: PropTypes.Function,
      description: 'A component rendered at the start of the item.',
    },
    endEnhancer: {
      value: '<ChevronDown size={12} className="transform -rotate-90" />',
      type: PropTypes.Function,
      description: 'A component rendered at the end of the item.',
    },
    alignItems: {
      value: 'center',
      defaultValue: 'center',
      type: PropTypes.FixedString,
      options: ['start', 'center'],
      description: 'Vertical align of the enhancers.',
    },
    disabled: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'Applies no-cursor and disabled styles to text.',
    },
    selected: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'Applies selected style to item.',
    },
    highlighted: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'Applies hovered style to item if button is true.',
    },
    autoFocus: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'Focus item on mount. Item should be focusable.',
    },
    tooltipContent: {
      value: "'How are you?'",
      type: PropTypes.ReactNode,
      description: 'The content of the tooltip. If provided, Listitem will be wrapped with StatefulTooltip.',
    },
    button: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'List item has a look and feel of button.',
    },
    onClick: {
      value: undefined,
      type: PropTypes.Function,
      description:
        'click listener on list item. This will also be triggered if user presses enter when item is focused.',
    },
    className: {
      value: 'border border-solid rounded-4 spr-border-01',
      type: PropTypes.String,
      description: 'Classes to apply on Item Root',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [
          'Root',
          'StartEnhancer',
          'EndEnhancer',
          'ChildContainer',
          { ...TooltipConfig, componentName: 'StatefulTooltip' },
        ],
        sharedProps: {
          $withStartEnhancer: 'true if rendered with start enhancer.',
          $withEndEnhancer: 'true if rendered with end enhancer.',
          $alignItems: 'alignItems',
          $disabled: 'disabled',
          $selected: 'selected',
          $highlighted: 'highlighted',
          $button: 'button',
        },
      },
    },
  },
};

export default ListItemConfig;
