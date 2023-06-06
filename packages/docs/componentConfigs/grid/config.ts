import { Grid, Col } from 'spaceweb/grid';
import { SpacePropsTypes as PropTypes, SpacePropsTypes } from '../common';
import { YardConfig } from '../types';

const GridConfig: YardConfig = {
  componentName: 'Grid',
  imports: {
    'spaceweb/grid': { named: ['Grid', 'Col'] },
  },
  scope: {
    Grid,
    Col,
  },
  theme: [],
  props: {
    cols: {
      value: 3,
      type: PropTypes.Number,
      description: 'number of columns.',
    },
    rows: {
      value: undefined,
      type: PropTypes.Number,
      description: 'number of rows.',
    },
    gap: {
      value: 5,
      type: PropTypes.Number,
      description: 'Space between adjacent rows and columns.',
    },
    colGap: {
      value: undefined,
      type: SpacePropsTypes.Number,
      description: 'Space between adjacent columns.',
    },
    rowGap: {
      value: undefined,
      type: PropTypes.Number,
      description: 'Space between adjacent rows.',
    },
    className: {
      value: undefined,
      type: PropTypes.String,
      description: 'Utility class names to be provided to Grid.',
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
    children: {
      value:
        '<Col className="p-4 spr-ui-focus">Item 1</Col>\n' +
        '<Col className="p-4 spr-ui-focus">Item 2</Col>\n' +
        '<Col className="p-4 spr-ui-focus">Item 3</Col>\n' +
        '<Col className="p-4 spr-ui-focus">Item 4</Col>\n' +
        '<Col className="p-4 spr-ui-focus">Item 5</Col>\n' +
        '<Col className="p-4 spr-ui-focus">Item 6</Col>',
      type: PropTypes.ReactNode,
      description: 'Content, to be placed inside the grid.',
    },
  },
};

export default GridConfig;
