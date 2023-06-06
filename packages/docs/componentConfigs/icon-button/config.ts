import { IconButton } from 'spaceweb/button';
import StarIcon from 'spaceweb-icons/solid/Star';

import TooltipConfig from '../tooltip/config';

import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

const IconButtonConfig: YardConfig = {
  componentName: 'IconButton',
  imports: {
    'spaceweb/button': {
      named: ['IconButton'],
    },
  },
  scope: {
    IconButton,
    StarIcon,
  },
  theme: [],
  props: {
    children: {
      value: '<StarIcon/>',
      type: PropTypes.ReactNode,
      description: 'Icon within the button.',
    },
    onClick: {
      value: '() => alert("click")',
      type: PropTypes.Function,
      description: 'Function called when button is clicked.',
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Indicates that the button is disabled.',
    },
    bordered: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Adds border to button.',
    },
    shape: {
      value: 'round',
      options: ['round', 'square'],
      type: PropTypes.FixedString,
      description: 'Defines the shape of the button.',
    },
    size: {
      value: undefined,
      options: ['xxxxs', 'xxxs', 'xxs', 'xs', 'sm', 'md'],
      type: PropTypes.FixedString,
      description: 'Defines the size of the button. SPACIOUS | COMFORTABLE -> md, COMPACT -> xxxs, DEFAULT -> md',
    },
    isLoading: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Show loading button style and spinner.',
    },
    isSelected: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Indicates that the button is selected.',
    },
    tooltipContent: {
      value: "'Add To Favourites'",
      type: PropTypes.ReactNode,
      description: 'The content of the tooltip. If provided, IconButton will be wrapped with StatefulTooltip.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [
          'BaseButton',
          'LoadingSpinner',
          'LoadingSpinnerContainer',
          { ...TooltipConfig, componentName: 'StatefulTooltip' },
        ],
        sharedProps: {
          $variant: 'variant',
          $intent: 'intent',
          $isSelected: 'isSelected',
          $shape: 'shape',
          $size: 'size',
          $isLoading: 'isLoading',
          $disabled: 'disabled',
        },
      },
    },
  },
};

export default IconButtonConfig;
