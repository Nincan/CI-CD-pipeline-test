import { Box } from 'spaceweb/box';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

const BoxConfig: YardConfig = {
  componentName: 'Box',
  imports: {
    'spaceweb/box': {
      named: ['Box'],
    },
  },
  scope: { Box },
  theme: [],
  props: {
    children: {
      value: 'this is a box',
      type: PropTypes.ReactNode,
      description: 'Visible label.',
    },
    className: {
      value: 'border border-solid spr-border-02 spr-text-04 h-40 w-40 flex justify-center items-center',
      type: PropTypes.String,
      description: 'Utility class names to be provided to Box',
    },
    $as: {
      value: 'section',
      type: PropTypes.String,
      description: 'Component to replace the default div container',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Box'],
        sharedProps: {
          $as: '$as',
          $className: 'className',
        },
      },
    },
  },
};

export default BoxConfig;
