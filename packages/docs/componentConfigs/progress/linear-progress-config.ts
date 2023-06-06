import { LinearProgress } from 'spaceweb/progress';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

const LinearProgressConfig: YardConfig = {
  componentName: 'LinearProgress',
  imports: {
    'spaceweb/progress': { named: ['LinearProgress'] },
  },
  scope: {
    LinearProgress,
  },
  theme: [],
  props: {
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
      description: 'Progress bar value attribute normalized in the 0 to 100 range.',
    },
    label: {
      value: undefined,
      type: PropTypes.String,
      description: 'Can be used to display a label for the progress bar.',
    },
    infinite: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Can be used to show the infinite progress bar.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Bar', 'Progress', 'Label'],
        sharedProps: {
          $withLabel: {
            type: PropTypes.Boolean,
            description: 'True when label is provided.',
          },
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

export default LinearProgressConfig;
