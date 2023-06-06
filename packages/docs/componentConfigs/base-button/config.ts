import { BaseButton } from 'spaceweb/base-button';
import { YardConfig } from '../types';
import { PropTypes } from 'react-view';

const BaseButtonConfig: YardConfig = {
  componentName: 'BaseButton',
  imports: {
    'spaceweb/base-button': {
      named: ['BaseButton'],
    },
  },
  scope: { BaseButton },
  theme: [],
  props: {
    children: {
      value: 'This clickable bar is made with BaseButton',
      type: PropTypes.ReactNode,
      description: 'Visible label.',
    },
    className: {
      value:
        'border-t border-r border-b border-l border-solid spr-border-02 spr-shadow-01 h-10 w-full flex justify-center items-center typography-l1',
      type: PropTypes.String,
      description: 'Utility class names to be provided to BaseButton',
    },
    style: {
      value: undefined,
      type: PropTypes.String,
      description: 'styles to be provided to BaseButton',
    },
    $as: {
      value: 'section',
      type: PropTypes.String,
      description: 'Component to replace the default div container',
    },
    'aria-label': {
      value: 'Click this bar to test base button',
      type: PropTypes.String,
      description: 'Sets aria-label attribute.',
      hidden: true,
    },
    onClick: {
      value: '() => alert("click")',
      type: PropTypes.Function,
      description: 'Function called when base button is clicked.',
    },
  },
};

export default BaseButtonConfig;
