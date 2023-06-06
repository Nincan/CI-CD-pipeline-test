import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

import ListItemConfig from '../list/config';
import PopoverConfig from '../popover/config';

const MenuItemConfig: YardConfig = {
  componentName: 'MenuItem',
  scope: {},
  imports: {},
  theme: [],
  props: {
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [
          { ...ListItemConfig, componentName: 'ListItem' },
          { ...PopoverConfig, componentName: 'Popover' },
        ],
      },
    },
  },
};

export default MenuItemConfig;
