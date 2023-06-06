import { Badge } from 'spaceweb/badge';
import { Box } from 'spaceweb/box';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

const BadgeConfig: YardConfig = {
  componentName: 'Badge',
  imports: {
    'spaceweb/badge': {
      named: ['Badge'],
    },
  },
  scope: {
    Badge,
    Box,
  },
  theme: [],
  props: {
    children: {
      value: '<Box className="h-10 w-10 spr-tag-02" />',
      type: PropTypes.ReactNode,
      description: 'Element on top of which the badge should be rendered.',
      imports: {
        'spaceweb/box': {
          named: ['Box'],
        },
      },
    },
    content: {
      value: undefined,
      placeholder: 'Content of the anchor',
      type: PropTypes.Function,
      description: 'Defines the content of the anchor.',
    },
    horizontalPosition: {
      value: 'right',
      options: ['left', 'right'],
      type: PropTypes.FixedString,
      description: 'Defines the horizontal position of the anchor.',
    },
    verticalPosition: {
      value: 'bottom',
      options: ['top', 'bottom'],
      type: PropTypes.FixedString,
      description: 'Defines the vertical position of the anchor.',
    },
    intent: {
      value: 'error',
      options: ['success', 'warning', 'error'],
      type: PropTypes.FixedString,
      description: 'Defines the intent of the badge.',
    },
    overlap: {
      value: 'rectangle',
      options: ['rectangle', 'circle'],
      type: PropTypes.FixedString,
      description: 'Defines the shape of the badge.',
    },
    size: {
      value: 'lg',
      options: ['sm', 'lg'],
      type: PropTypes.FixedString,
      description: 'Defines the size of the anchor.',
    },

    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Anchor'],
        sharedProps: {
          $intent: 'intent',
          $overlap: 'overlap',
          $size: 'size',
          $content: 'content',
          $horizontalPosition: 'horizontalPosition',
          $verticalPosition: 'verticalPosition',
        },
      },
    },
  },
};

export default BadgeConfig;
