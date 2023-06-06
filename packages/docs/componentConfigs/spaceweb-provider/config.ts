import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';
import SpacewebProvider from 'spaceweb/spacewebProvider';
import sprLight from '@sprinklr/spaceweb-themes/space/light';
import { Box } from 'spaceweb/box';

const SpacewebProviderConfig: YardConfig = {
  componentName: 'SpacewebProvider',
  imports: {
    'spaceweb/spacewebProvider': {
      default: 'SpacewebProvider',
    },
    'spaceweb/box': {
      named: ['Box'],
    },
    'spaceweb-theme': {
      named: ['sprLight'],
    },
  },
  scope: { SpacewebProvider, Box, sprLight },
  theme: [],
  props: {
    children: {
      value: '<Box className="spr-support-success-text">This is styled</Box>',
      type: PropTypes.ReactNode,
      description: 'SpacewebProvider wrapping the app to style',
    },
    theme: {
      //@ts-ignore
      value: sprLight,
      type: PropTypes.Custom,
      description: 'Pass theme to your app',
    },
    direction: {
      value: 'ltr',
      type: PropTypes.FixedString,
      options: ['ltr', 'rtl'],
      description: 'Provide direction of the content for your app.',
    },
    styleEngine: {
      value: undefined,
      type: PropTypes.String,
      description: 'Styletron engine for your app to load styles & cache. Defaults to styletron atomic engine.',
    },
    layersZIndex: {
      value: undefined,
      type: PropTypes.Number,
      description: 'Lets you customize the z-index of layer in which all portals will open.',
    },
    locale: {
      //@ts-ignore
      value: {
        select: {
          noResultsMsg: 'No Results found',
          selectAllLabel: 'Select All',
        },
      },
      type: PropTypes.Object,
      description: 'Internationalisation configuration for locale',
    },
    ownerDocument: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Owner document to initialize styles & other setup in case of iframe',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize aspects of SpacewebProvider',
      custom: {
        names: ['AppContainer', 'LayersContainer'],
      },
    },
  },
};

export default SpacewebProviderConfig;
