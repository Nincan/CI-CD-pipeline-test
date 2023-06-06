import _omit from 'lodash/omit';
import { Button } from 'spaceweb/button';
import { Input } from 'spaceweb/input';
import { StatefulTooltip, Tooltip } from 'spaceweb/tooltip';

import { SpacePropsTypes as PropTypes } from '../common';
import PopoverConfig from '../popover/config';
import { YardConfig } from '../types';

const TooltipConfig: YardConfig = {
  ...PopoverConfig,
  componentName: 'StatefulTooltip',
  imports: {
    'spaceweb/tooltip': { named: ['StatefulTooltip'] },
  },
  scope: {
    Button,
    Input,
    StatefulTooltip,
    Tooltip,
  },
  theme: [],
  props: {
    ..._omit(PopoverConfig.props, ['autoFocus', 'returnFocus', 'focusLock']),
    content: {
      value: "'Hello There'",
      type: PropTypes.ReactNode,
      description: 'The content of the popover.',
    },
    triggerType: {
      ...PopoverConfig.props.triggerType,
      value: 'hover',
      defaultValue: 'hover',
    },
    accessibilityType: {
      ...PopoverConfig.props.accessibilityType,
      value: 'tooltip',
      defaultValue: 'tooltip',
    },
    size: {
      value: 'sm',
      options: ['sm', 'md', 'lg'],
      type: PropTypes.FixedString,
      description: 'Defines the size of the Tooltip.',
      defaultValue: 'sm',
    },
    label: {
      value: '',
      type: PropTypes.ReactNode,
      description: 'To display label on top of tooltip content.',
    },
    children: {
      value: 'Hover me',
      type: PropTypes.ReactNode,
      description: 'The content that will trigger the popover.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Arrow', 'Body', 'Inner', 'Label'],
        sharedProps: {
          $showArrow: 'showArrow',
          $placement: 'placement',
          $isOpen: {
            type: PropTypes.Boolean,
            description: 'True when the popover is opened.',
          },
          $isAnimating: {
            type: PropTypes.Boolean,
            description: 'True when the popover is animating.',
          },
          $size: 'size',
          $label: {
            type: PropTypes.Boolean,
            description: 'True when label is provided.',
          },
        },
      },
    },
  },
};

export default TooltipConfig;
