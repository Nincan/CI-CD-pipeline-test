import { Banner, BannerItem } from 'spaceweb/banner';
import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

const BannerConfig: YardConfig = {
  componentName: 'Banner',
  imports: {
    'spaceweb/banner': {
      named: ['Banner'],
    },
  },
  scope: {
    Banner,
    BannerItem,
  },
  theme: [],
  props: {
    intent: {
      value: 'error',
      defaultValue: 'error',
      options: ['error', 'warning', 'success'],
      type: PropTypes.FixedString,
      description: 'Defines the intent of the banner.',
    },
    collapsible: {
      value: true,
      type: PropTypes.Boolean,
      description: 'Adds show/hide button to the banner.',
    },
    title: {
      value: '"Banner Header"',
      type: PropTypes.ReactNode,
      description: 'Defines the title of the banner.',
    },
    $as: {
      value: 'div',
      defaultValue: 'div',
      options: ['ol', 'ul', 'div'],
      type: PropTypes.FixedString,
      description: 'Defines the numeric/bullet/none style for bannerItem list',
    },
    maxItemContainerHeight: {
      value: undefined,
      type: PropTypes.String,
      description: 'Sets max height of the items container list.',
      placeholder: '80px',
    },
    children: {
      value:
        '<BannerItem>Error 1</BannerItem>\n' +
        '<BannerItem>Error 2</BannerItem>\n' +
        '<BannerItem>Error 3</BannerItem>\n' +
        '<BannerItem>Error 4</BannerItem>\n' +
        '<BannerItem>Error 5</BannerItem>\n' +
        '<BannerItem>Error 6</BannerItem>',
      type: PropTypes.ReactNode,
      description: 'Banner items',
      imports: {
        'spaceweb/banner': {
          named: ['BannerItem'],
        },
      },
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
      custom: {
        names: [
          'Root',
          'BannerItemContainer',
          'HeaderTitle',
          'HeaderIcon',
          'TitleContainer',
          'HeaderContainer',
          'ToggleButton',
        ],
        sharedProps: {},
      },
    },
  },
};

export default BannerConfig;
