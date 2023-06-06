import { FormControl } from 'spaceweb/form-control';
import { Input } from 'spaceweb/input';
import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

import TooltipConfig from '../tooltip/config';

const TextareaConfig: YardConfig = {
  componentName: 'FormControl',
  imports: {
    'spaceweb/form-control': { named: ['FormControl'] },
  },
  scope: {
    FormControl,
    Input,
  },
  theme: [],
  props: {
    children: {
      value: '<Input />',
      type: PropTypes.ReactNode,
      description: 'Content wrapped by FormControl.',
      imports: { 'spaceweb/input': { named: ['Input'] } },
    },
    label: {
      value: "() => 'Label'",
      type: PropTypes.Function,
      description: 'A label rendered above the input field.',
    },
    subText: {
      value: "() => 'The description will come here'",
      type: PropTypes.Function,
      description: 'A text rendered b/w label and the form field. Info Icon will be rendered for horizontal layout.',
    },
    subTextAsIcon: {
      value: false,
      type: PropTypes.Boolean,
      description:
        'Render info icon beside label. Displays subText in tooltip. For horizontal layout subText will be rendered as icon only.',
    },
    intent: {
      value: 'error',
      defaultValue: 'default',
      options: ['default', 'success', 'warning', 'error'],
      type: PropTypes.FixedString,
      description: 'Defines the intent of the Input.',
    },
    className: {
      value: 'w-full',
      type: PropTypes.String,
      description: 'Utility class names to be provided to form-control root',
    },
    layout: {
      value: 'vertical',
      options: ['vertical', 'horizontal'],
      type: PropTypes.FixedString,
      description: 'Defines the layout of the field',
    },
    caption: {
      value: "() => 'Hold On!'",
      type: PropTypes.Function,
      description: 'A message rendered below the form field.',
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Displays label in light gray color if true.',
    },
    required: {
      value: false,
      type: PropTypes.Boolean,
      description: 'If form property is required, display red dot beside Label.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [
          'Root',
          'LabelContainer',
          'Label',
          'RequiredDot',
          'SubText',
          'Caption',
          'ControlContainer',
          'InfoIconContainer',
          { ...TooltipConfig, componentName: 'SubTextTooltip' },
        ],
        sharedProps: {
          $required: 'required',
          $disabled: 'disabled',
          $layout: 'layout',
          $intent: 'intent',
          $error: {
            type: PropTypes.Boolean,
            description: 'True if error message provided.',
          },
          $positive: {
            type: PropTypes.Boolean,
            description: 'True if positive message provided.',
          },
        },
      },
    },
  },
};

export default TextareaConfig;
