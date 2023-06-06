import { Image } from 'spaceweb/image';
import { PropTypes } from 'react-view';
import { YardConfig } from '../types';

const FallbackImgConfig: YardConfig = {
  componentName: 'FallbackImg',
  imports: {},
  scope: {},
  theme: [],
  props: {
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Svg'],
        sharedProps: {},
      },
    },
  },
};

const MediaConfig: YardConfig = {
  componentName: 'Image',
  imports: {
    'spaceweb/image': {
      named: ['Image'],
    },
  },
  scope: { Image },
  theme: [],
  props: {
    height: {
      value: 200,
      type: PropTypes.Number,
      description: 'Height to be provided to the Image.',
    },
    width: {
      value: 200,
      type: PropTypes.Number,
      description: 'Width to be provided to the Image.',
    },
    src: {
      value:
        'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg',
      type: PropTypes.String,
      description: 'Image to display.',
    },
    alt: {
      value: 'Cute doggo',
      type: PropTypes.String,
      description: 'Alternative text',
    },
    className: {
      value: undefined,
      type: PropTypes.String,
      description: 'className to provide style to Image component',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Image', { ...FallbackImgConfig, componentName: 'FallbackImg' }],
        sharedProps: {},
      },
    },
  },
};

export default MediaConfig;
