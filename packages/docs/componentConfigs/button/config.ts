import { Button } from 'spaceweb/button';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

import TooltipConfig from '../tooltip/config';

const ButtonConfig: YardConfig = {
  componentName: 'Button',
  imports: {
    'spaceweb/button': {
      named: ['Button'],
    },
  },
  scope: {
    Button,
  },
  theme: [],
  props: {
    children: {
      value: 'Hello',
      type: PropTypes.ReactNode,
      description: 'Visible label.',
    },
    onClick: {
      value: '() => alert("click")',
      type: PropTypes.Function,
      description: 'Function called when button is clicked.',
    },
    startEnhancer: {
      value: undefined,
      placeholder: '() => <span>🦊</span>',
      type: PropTypes.Function,
      description: 'A component rendered at the start of the button.',
    },
    endEnhancer: {
      value: undefined,
      placeholder: '<i>world!</i>',
      type: PropTypes.Function,
      description: 'A component rendered at the end of the button.',
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Indicates that the button is disabled',
    },
    shape: {
      value: 'default',
      defaultValue: 'default',
      options: ['default', 'square', 'pill'],
      type: PropTypes.FixedString,
      description: 'Defines the shape of the button.',
    },
    variant: {
      value: 'primary',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary', 'minimal'],
      type: PropTypes.FixedString,
      description: 'Defines the kind (purpose) of a button.',
    },
    size: {
      value: undefined,
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      type: PropTypes.FixedString,
      description: 'Defines the size of the button. SPACIOUS | COMFORTABLE -> md, COMPACT -> xxxs, DEFAULT -> md',
    },
    intent: {
      value: 'default',
      defaultValue: 'default',
      options: ['default', 'success', 'warning', 'error'],
      type: PropTypes.FixedString,
      description: 'Defines the intent of the button.',
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
    fullWidth: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Gives full width to button',
    },
    tooltipContent: {
      value: "'How are you?'",
      type: PropTypes.ReactNode,
      description: 'The content of the tooltip. If provided, Button will be wrapped with StatefulTooltip.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [
          'BaseButton',
          'EndEnhancer',
          'LoadingSpinner',
          'LoadingSpinnerContainer',
          'StartEnhancer',
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
          $fullWidth: 'fullWidth',
        },
      },
    },
  },
};

export default ButtonConfig;
