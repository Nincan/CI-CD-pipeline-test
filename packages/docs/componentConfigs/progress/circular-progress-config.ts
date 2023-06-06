import { CircularProgress } from 'spaceweb/progress';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

const CircularProgressConfig: YardConfig = {
  componentName: 'CircularProgress',
  imports: {
    'spaceweb/progress': { named: ['CircularProgress'] },
  },
  scope: {
    CircularProgress,
  },
  theme: [],
  props: {
    size: {
      value: undefined,
      defaultValue: 50,
      type: PropTypes.Number,
      description: 'Diameter in pixels for rendered circle. Defaults to 50px',
    },
    thickness: {
      value: undefined,
      defaultValue: 3,
      type: PropTypes.Number,
      description: 'Thickness of the Circular Progress.',
    },
    intent: {
      value: 'default',
      defaultValue: 'default',
      type: PropTypes.FixedString,
      options: ['default', 'success', 'error', 'warning'],
      description: 'Intent of the Progress.',
    },
    color: {
      value: undefined,
      description: 'Color of the Progress.',
      type: PropTypes.String,
      placeholder: '#E44045',
    },
    backgroundColor: {
      value: undefined,
      type: PropTypes.String,
      description: 'Color of the ProgressBar.',
      placeholder: '#BE8C8E',
    },
    value: {
      value: 25,
      type: PropTypes.Number,
      description: 'Progress value attribute normalized in the 0 to 100 range.',
    },
    label: {
      value: undefined,
      type: PropTypes.String,
      description: 'Can be used to display a label for the progress.',
    },
    infinite: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Can be used to show the infinite progress.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'LabelContainer', 'Label', 'Svg', 'BarContainer', 'Bar', 'Progress'],
        sharedProps: {
          $withLabel: {
            type: PropTypes.Boolean,
            description: 'True when label is provided.',
          },
          $strokeWidth: {
            type: PropTypes.Number,
            description: 'Strokewdith of the `circle` rendered inside svg.',
          },
          $thickness: 'thickness',
          $size: 'size',
          $infinite: 'infinite',
          $intent: 'intent',
          $value: 'value',
          $backgroundColor: 'backgroundColor',
          $color: 'color',
        },
      },
    },
  },
};

export default CircularProgressConfig;
