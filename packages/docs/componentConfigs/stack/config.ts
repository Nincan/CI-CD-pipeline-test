import { Box } from 'spaceweb/box';
import { Stack } from 'spaceweb/stack';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';
import BoxConfig from '../box/config';

const verticalStackConfig: YardConfig = {
  componentName: 'Stack',
  imports: {
    'spaceweb/stack': {
      named: ['Stack'],
    },
  },
  scope: { Stack, Box },
  theme: [],
  props: {
    direction: {
      value: 'vertical',
      options: ['vertical', 'horizontal'],
      type: PropTypes.FixedString,
      description: 'direction of the stack',
    },
    gap: {
      value: 4,
      type: PropTypes.Number,
      description: 'Gap between siblings',
    },
    shrink: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Shrink children to take their own width in stack',
    },
    children: {
      value: `<Box className="spr-ui-03 spr-text-01 p-4">Block 1</Box>
<Box className="spr-ui-03 spr-text-01 p-4">Block 2</Box>
<Box className="spr-ui-03 spr-text-01 p-4">Block 3</Box>`,
      type: PropTypes.ReactNode,
      description: 'Children',
    },
    className: {
      value: undefined,
      type: PropTypes.String,
      description: 'Utility classes',
    },
    sm: {
      value: undefined,
      type: PropTypes.Object,
      description: 'responsive layout for sm breakpoint',
    },
    md: {
      value: undefined,
      type: PropTypes.Object,
      description: 'responsive layout for md breakpoint',
    },
    lg: {
      value: undefined,
      type: PropTypes.Object,
      description: 'responsive layout for lg breakpoint',
    },
    xl: {
      value: undefined,
      type: PropTypes.Object,
      description: 'responsive layout for xl breakpoint',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: { names: [{ ...BoxConfig, componentName: 'Stack' }], sharedProps: {} },
    },
  },
};

export default verticalStackConfig;
