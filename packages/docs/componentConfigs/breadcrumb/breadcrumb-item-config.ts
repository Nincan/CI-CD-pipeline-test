import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';
import { BreadcrumbItem } from 'spaceweb/breadcrumb';

const BreadcrumbItemConfig: YardConfig = {
  componentName: 'BreadcrumbItem',
  imports: {
    'spaceweb/breadcrumbItem': {
      named: ['BreadcrumbItem'],
    },
  },
  scope: {
    BreadcrumbItem,
  },
  theme: [],
  props: {
    children: {
      value: '<div> Hello </div>',
      type: PropTypes.ReactNode,
      description: 'Children',
    },
    onClick: {
      value: '(e,index) => alert(`${index+1} link clicked`)',
      type: PropTypes.Function,
      description:
        'Function called when link is clicked. It will be called with 2 props one the event Handler and second the' +
        ' index of the Link clicked',
    },
    href: {
      value: 'https://frontend.sprinklr.com/spaceweb',
      type: PropTypes.String,
      description: 'The URL that the hyperlink points to.',
    },
    startEnhancer: {
      value: undefined,
      placeholder: '() => <span>🦊</span>',
      type: PropTypes.Function,
      description: 'A component rendered at the start of the breadcrumb item.',
    },
    separator: {
      value: undefined,
      type: PropTypes.ReactNode,
      description: 'Edit the separator next to it and overrides the default separator, By Default it is > Icon',
      placeholder: '',
    },
    endEnhancer: {
      value: undefined,
      placeholder: '<i>world!</i>',
      type: PropTypes.Function,
      description: 'A component rendered at the end of the breadcrumb item.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Link', 'StartEnhancer', 'EndEnhancer', 'ListItem', 'Separator'],
        sharedProps: {
          $isLastChild: 'isLastChild',
          $withStartEnhancer: 'withStartEnhancer',
          $withEndEnhancer: 'withEndEnhancer',
        },
      },
    },
  },
};

export default BreadcrumbItemConfig;
