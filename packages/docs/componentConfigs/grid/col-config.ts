import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

const ColConfig: YardConfig = {
  componentName: 'Col',
  scope: {},
  props: {
    colSpan: {
      value: undefined,
      type: PropTypes.Number,
      description: 'Cell spans to given number of cells.',
    },
    colStart: {
      value: undefined,
      type: PropTypes.Number,
      description: 'Cell starts from given column.',
    },
    colEnd: {
      value: undefined,
      type: PropTypes.Number,
      description: 'Cell ends at given column.',
    },
    rowSpan: {
      value: undefined,
      type: PropTypes.Number,
      description: 'Cell spans to given number of rows.',
    },
    rowStart: {
      value: undefined,
      type: PropTypes.Number,
      description: 'Cell starts from given row.',
    },
    rowEnd: {
      value: undefined,
      type: PropTypes.Number,
      description: 'Cell ends at given row.',
    },
    className: {
      value: undefined,
      type: PropTypes.String,
      description: 'Utility class names to be provided to Col.',
    },
    xs: {
      value: undefined,
      type: PropTypes.Object,
      description: 'Responsive layout for xs breakpoint.',
      hidden: true,
    },
    sm: {
      value: undefined,
      type: PropTypes.Object,
      description: 'Responsive layout for sm breakpoint.',
      hidden: true,
    },
    md: {
      value: undefined,
      type: PropTypes.Object,
      description: 'Responsive layout for md breakpoint.',
      hidden: true,
    },
    lg: {
      value: undefined,
      type: PropTypes.Object,
      description: 'Responsive layout for lg breakpoint.',
      hidden: true,
    },
    xl: {
      value: undefined,
      type: PropTypes.Object,
      description: 'Responsive layout for xl breakpoint.',
      hidden: true,
    },
  },
  theme: [],
  imports: {},
};

export default ColConfig;
