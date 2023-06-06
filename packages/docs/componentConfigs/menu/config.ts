import { Menu, MenuItem, NestedMenuProvider } from 'spaceweb/menu';
import { ListItemText } from 'spaceweb/list';
import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

import ListConfig from '../list/config';

const MenuConfig: YardConfig = {
  componentName: 'Menu',
  imports: {
    'spaceweb/menu': {
      named: ['Menu'],
    },
  },
  scope: {
    Menu,
    MenuItem,
    NestedMenuProvider,
    ListItemText,
  },
  theme: [],
  props: {
    children: {
      value: '<MenuItem>Item 1</MenuItem>\n' + '<MenuItem>Item 2</MenuItem>\n' + '<MenuItem>Item 3</MenuItem>',
      type: PropTypes.ReactNode,
      description: 'Menu items',
      imports: {
        'spaceweb/menu': {
          named: ['MenuItem'],
        },
      },
    },
    className: {
      value: 'w-full border border-solid rounded-4 spr-border-01',
      type: PropTypes.String,
      description: 'Classes to apply on List Root',
    },
    disableNavigationOnMount: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'By default keyboard navigation starts as soon as Menu mounts. Flag to opt-out of this behaviour.',
      hidden: true,
    },
    selectOnTab: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'When enabled allows to click on highlighted item on Tab key press.',
      hidden: true,
    },
    focusWhenNavigationEnabled: {
      value: true,
      defaultValue: true,
      type: PropTypes.Boolean,
      description:
        'Whether Items container be focused in DOM, when keyboard navigation is enabled.' +
        'In Select, you would probably want it to be false, so that focus remains on Input of Selectbox.',
      hidden: true,
    },
    disableAutoHighlight: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description:
        'If true, Menu will not highlight item any item initially. By default Menu highlights selected item/1st highlightable item on mount.',
      hidden: true,
    },
    resetMenuHighlightOnMouseLeave: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'If true, Any highlighted MenuItem will unhighlight as soon as mouse/focus leaves Menu.',
      hidden: true,
    },
    captureScroll: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'When the user reaches top/bottom of the menu, prevents scroll to the body/scroll-parent',
    },
    virtual: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'Add virtualization to menu',
    },
    // scrollElement: {
    //   value: undefined,
    //   type: PropTypes.Ref,
    //   description: 'Set the reference of the scroll container of the virtualized list',
    //   hidden: true,
    // },
    overscanCount: {
      value: 5,
      type: PropTypes.Number,
      description: 'Set the number of over scanned children of the virtualized menu',
      hidden: true,
      defaultValue: 5,
    },
    estimateItemSize: {
      value: 5,
      type: PropTypes.Number,
      description: 'Default size for items of virtual list',
      hidden: true,
      defaultValue: 34,
    },
    $showFocusOutline: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'Adds outline on focus to the list',
      hidden: true,
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: { names: [{ ...ListConfig, componentName: 'List' }], sharedProps: {} },
    },
  },
};

export default MenuConfig;
