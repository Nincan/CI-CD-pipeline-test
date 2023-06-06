import { Link } from 'spaceweb/link';
import { PropTypes } from 'react-view';
import { YardConfig } from '../types';

const LinkConfig: YardConfig = {
  componentName: 'Link',
  imports: {
    'spaceweb/link': {
      named: ['Link'],
    },
  },
  scope: { Link },
  theme: ['linkText', 'linkVisited', 'linkHover', 'linkActive'],
  props: {
    children: {
      value: 'Link to Spaceweb',
      type: PropTypes.ReactNode,
      description: "Link's content.",
    },
    className: {
      value: '',
      type: PropTypes.String,
      description: 'Utility class names to be provided to Link',
    },
    href: {
      value: 'https://frontend.sprinklr.com/spaceweb',
      type: PropTypes.String,
      description: 'The URL that the hyperlink points to.',
    },
  },
};

export default LinkConfig;
