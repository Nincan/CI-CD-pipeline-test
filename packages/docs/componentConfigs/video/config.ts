import { Video } from 'spaceweb/video';
import { PropTypes } from 'react-view';
import { YardConfig } from '../types';

const VideoConfig: YardConfig = {
  componentName: 'Video',
  imports: {
    'spaceweb/video': {
      named: ['Video'],
    },
  },
  scope: { Video },
  theme: [],
  props: {
    height: {
      value: 200,
      type: PropTypes.Number,
      description: 'Height of the Video to display.',
    },
    width: {
      value: 400,
      type: PropTypes.Number,
      description: 'Width of the Video to display.',
    },
    src: {
      value: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: PropTypes.String,
      description: 'Video to display.',
    },
    poster: {
      value:
        'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg',
      type: PropTypes.String,
      description: 'Thumbnail to display.',
    },
    autoPlay: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Plays video on mount.',
      defaultValue: false,
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Video', 'PlayButton', 'PosterImage'],
        sharedProps: {},
      },
    },
  },
};

export default VideoConfig;
