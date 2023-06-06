import { Avatar } from 'spaceweb/avatar';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

const AvatarConfig: YardConfig = {
  componentName: 'Avatar',
  imports: {
    'spaceweb/avatar': {
      named: ['Avatar'],
    },
  },
  scope: { Avatar },
  theme: [],
  props: {
    name: {
      value: 'Jane Doe',
      type: PropTypes.String,
      description: 'Alternative text description of the image.',
    },
    size: {
      value: 'md',
      type: PropTypes.Number,
      description:
        'Defines the width/height of the image. Accepts size labels sm, md, lg and xl, or diameter ( in pixel ).',
    },
    color: {
      value: undefined,
      type: PropTypes.String,
      description:
        'Defines the custom color or gradient to be shown in background if the image fails to loads underneath the initials',
    },
    src: {
      value: 'https://material-ui.com/static/images/avatar/2.jpg',
      type: PropTypes.String,
      description: 'Image to display.',
    },
    allowPhoneInitials: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description:
        "When Avatar detects name as phone number, it renders userIcon as initials. Setting this to true will display phone number's initial",
    },
    initials: {
      value: '',
      type: PropTypes.String,
      description: 'Initials to display when image fails to load.',
    },
    shape: {
      value: 'circle',
      options: ['rectangle', 'circle'],
      type: PropTypes.FixedString,
      description: 'Defines the shape of avatar.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Avatar', 'Initials'],
        sharedProps: {
          $size: 'size',
          $shape: 'shape',
          $didImageFailToLoad: {
            type: PropTypes.Boolean,
            description: 'True when the src does not resolve to a valid image.',
          },
        },
      },
    },
  },
};

export default AvatarConfig;
