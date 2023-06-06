import Search from 'spaceweb-icons/line/Search';
import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

const IconConfig: YardConfig = {
  componentName: 'Search',
  imports: {
    'spaceweb-icons/line/Search': {
      default: 'Search',
    },
  },
  scope: { Search },
  theme: [],
  props: {
    size: {
      value: 40,
      type: PropTypes.Number,
      description: 'Size of the icon in pixels.',
    },
    title: {
      value: undefined,
      type: PropTypes.String,
      description: 'Allows you to set the SVG <title> label, which is used for accessibility.',
    },
    className: {
      value: 'spr-icon-01',
      type: PropTypes.String,
      description: 'Color of icon, will be used as svg fill.',
    },
  },
};

export default IconConfig;
