import { Box } from 'spaceweb/box';
import { Stack } from 'spaceweb/stack';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

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
    sm: {
      value: '{ direction : "vertical", gap : 8}',
      type: PropTypes.Object,
      description: 'responsive layout for sm breakpoint',
    },
    md: {
      value: '{ direction : "horizontal", gap : 2}',
      type: PropTypes.Object,
      description: 'responsive layout for md breakpoint',
    },
    lg: {
      value: undefined,
      type: PropTypes.Object,
      description: 'responsive layout for lg breakpoint',
    },
    xl: {
      value: '{ direction : "vertical", gap : 8}',
      type: PropTypes.Object,
      description: 'responsive layout for xl breakpoint',
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
  },
};

export default verticalStackConfig;
