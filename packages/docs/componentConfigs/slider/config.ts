import { Slider } from 'spaceweb/slider';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

const SliderConfig: YardConfig = {
  componentName: 'Slider',
  imports: {
    'spaceweb/slider': { named: ['Slider'] },
  },
  scope: {
    Slider,
  },
  theme: [],
  props: {
    intent: {
      value: 'default',
      defaultValue: 'default',
      type: PropTypes.FixedString,
      options: ['default', 'error', 'warning', 'success'],
      description: 'Intent of slider component',
    },
    value: {
      value: '[25]',
      type: PropTypes.Array,
      description: 'Value for the slider component.',
      stateful: true,
    },
    min: {
      value: '0',
      defaultValue: '0',
      type: PropTypes.Number,
      description: 'Minimum value for range of slider.',
    },
    max: {
      value: '100',
      defaultValue: '100',
      type: PropTypes.Number,
      description: 'Maximum value for range of slider.',
    },
    step: {
      value: '1',
      defaultValue: '1',
      type: PropTypes.Number,
      description: 'Step size',
    },
    marks: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Displays mark on each step.',
    },
    markLabel: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Displays text label on each steps.',
    },
    getMarkLabel: {
      value: undefined,
      type: PropTypes.Function,
      description: 'Provide custom label for marks.',
    },
    onChange: {
      value: '({value}) => setValue(value)',
      type: PropTypes.Function,
      description: 'called when value changes',
      propHook: {
        what: 'JSON.stringify(value)',
        into: 'value',
      },
    },
    onFinalChange: {
      value: 'console.log',
      type: PropTypes.Function,
      description: 'called when user is done with changing',
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: 'slider will be disabled',
    },
    persistentThumb: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Causes the value/thumb to always display.',
    },
    valueToLabel: {
      value: undefined,
      placeholder: '(value) => `${value}:00 AM`',
      type: PropTypes.Function,
      description: 'Used to transform the thumb value/min/max labels into a user-friendly label.',
    },
    className: {
      value: undefined,
      type: PropTypes.String,
      description: 'Enriched style to be provided to Slider Root',
    },
    style: {
      value: undefined,
      type: PropTypes.Function,
      description: 'Passes style function, object or string to the Slider Root.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Track', 'InnerTrack', 'Thumb', 'InnerThumb', 'ThumbValue', 'Mark', 'MarkLabel'],
        sharedProps: {
          $value: 'value',
          $min: 'min',
          $max: 'max',
          $step: 'step',
          $intent: 'intent',
          $disabled: 'disabled',
          $isFocusVisible: 'isFocusVisible',
          $marks: 'marks',
        },
      },
    },
  },
};

export default SliderConfig;
