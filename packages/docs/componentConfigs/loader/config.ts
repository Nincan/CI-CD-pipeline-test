import { Loader, DEFAULT_DELAY, DEFAULT_SIZE } from 'spaceweb/loader';
import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

const LoaderConfig: YardConfig = {
  componentName: 'Loader',
  imports: {
    'spaceweb/loader': {
      named: ['Loader'],
    },
  },
  scope: { Loader },
  theme: [],
  props: {
    variant: {
      type: PropTypes.FixedString,
      value: 'beat',
      defaultValue: 'beat',
      options: ['beat', 'clip'],
      description: 'Defines variant of Loader.',
    },
    size: {
      type: PropTypes.Number,
      value: DEFAULT_SIZE,
      defaultValue: DEFAULT_SIZE,
      description: 'Size of the Loader(excluding loadingText). In case of BeatLoader size is applied to each balls.',
    },
    delay: {
      type: PropTypes.Number,
      value: DEFAULT_DELAY,
      defaultValue: DEFAULT_DELAY,
      description: `(in ms) Loader will be visible after delay. Defaults is: ${DEFAULT_DELAY}. If delay is 0, loader will be visible as soon as the component mounts.`,
    },
    loadingContent: {
      type: PropTypes.ReactNode,
      value: '',
      placeholder: 'Loading',
      description:
        'Content to display below loader. Content can be wrapped inside any Component.' +
        " If Typography component is used, content won't be wrapped inside Text and Text overrides won't work.",
    },
    className: {
      value: '',
      placeholder: 'mt-1',
      type: PropTypes.String,
      description: 'Classes to apply on Loader Root.',
      hidden: true,
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: { names: ['Root', 'Text', 'Loader', 'BeatLoaderBall'], sharedProps: {} },
    },
  },
};

export default LoaderConfig;
