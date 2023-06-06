import { Banner, BannerItem } from 'spaceweb/banner';
import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

const BannerItemConfig: YardConfig = {
  componentName: 'BannerItem',
  imports: {
    'spaceweb/banner': {
      named: ['BannerItem'],
    },
  },
  scope: {
    Banner,
    BannerItem,
  },
  theme: [],
  props: {
    children: {
      value: 'Error Message',
      type: PropTypes.ReactNode,
      description: 'Banner items content',
    },
    className: {
      value: '',
      type: PropTypes.String,
      description: 'Classes to apply on Banner Root',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: { names: ['Root'], sharedProps: {} },
    },
  },
};

export default BannerItemConfig;
