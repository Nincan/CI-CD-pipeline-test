import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';
import { Breadcrumb, BreadcrumbItem } from 'spaceweb/breadcrumb';
import CheveronRightIcon from 'spaceweb-icons/solid/ChevronRight';

const BreadcrumbConfig: YardConfig = {
  componentName: 'Breadcrumb',
  imports: {
    'spaceweb/breadcrumb': {
      named: ['Breadcrumb'],
    },
    'spaceweb/breadcrumbItem': {
      named: ['BreadcrumbItem'],
    },
  },
  scope: {
    Breadcrumb,
    BreadcrumbItem,
    CheveronRightIcon,
  },
  theme: [],
  props: {
    children: {
      value:
        '<BreadcrumbItem>Link1</BreadcrumbItem>' +
        '<BreadcrumbItem>Link2</BreadcrumbItem>' +
        '<BreadcrumbItem>Link3</BreadcrumbItem>',
      type: PropTypes.ReactNode,
      description: 'Children',
    },
    separator: {
      value: undefined,
      type: PropTypes.ReactNode,
      description: 'Seperator in Links, By Default it is > Icon',
      placeholder: '',
    },
    gap: {
      value: undefined,
      defaultValue: 4,
      type: PropTypes.Number,
      description: 'Gap between sepearator and links',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Separator'],
        sharedProps: {
          $gap: 'gap',
        },
      },
    },
  },
};

export default BreadcrumbConfig;
