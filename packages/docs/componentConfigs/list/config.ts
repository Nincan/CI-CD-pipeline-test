import { List, ListItem, ListItemText } from 'spaceweb/list';
import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

const ListConfig: YardConfig = {
  componentName: 'List',
  imports: {
    'spaceweb/list': {
      named: ['List'],
    },
  },
  scope: {
    List,
    ListItem,
    ListItemText,
  },
  theme: [],
  props: {
    children: {
      value:
        '<ListItem>Item 1</ListItem>\n' +
        '<ListItem>Item 2</ListItem>\n' +
        '<ListItem>Item 3</ListItem>\n' +
        '<ListItem>Item 4</ListItem>\n' +
        '<ListItem>Item 5</ListItem>\n' +
        '<ListItem>Item 6</ListItem>',
      type: PropTypes.ReactNode,
      description: 'List items',
      imports: {
        'spaceweb/list': {
          named: ['ListItem'],
        },
      },
    },
    className: {
      value: 'w-full border border-solid rounded-4 spr-border-01',
      type: PropTypes.String,
      description: 'Classes to apply on List Root',
    },
    virtual: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'Add virtualization to list',
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
      description: 'Set the number of over scanned children of the virtualized list',
      hidden: true,
      defaultValue: 5,
    },
    estimateItemSize: {
      value: 34,
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
      custom: { names: ['Root'], sharedProps: {} },
    },
  },
};

export default ListConfig;
