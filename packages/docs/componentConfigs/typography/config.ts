import { Typography } from 'spaceweb/typography';
import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

const TypographyConfig: YardConfig = {
  componentName: 'Typography',
  imports: {
    'spaceweb/typography': {
      named: ['Typography'],
    },
  },
  scope: { Typography },
  theme: [],
  props: {
    children: {
      value: 'Hello World',
      type: PropTypes.String,
      description: 'Text to render',
    },
    variant: {
      value: 'body-14',
      defaultValue: 'body-14',
      type: PropTypes.FixedString,
      options: [
        'body-8',
        'body-10',
        'body-12',
        'body-13',
        'body-14',
        'body-16',
        'display-18',
        'display-20',
        'display-24',
        'display-28',
        'display-32',
        'display-40',
        'display-42',
      ],
      description: 'Variant of the Font type',
    },
    $as: {
      value: undefined,
      type: PropTypes.String,
      description: 'Modifies the base element used to render the text block',
    },
    className: {
      value: '',
      type: PropTypes.String,
      description: 'Utility classes along with style argument',
    },
    weight: {
      value: 'regular',
      type: PropTypes.FixedString,
      options: ['regular', 'medium', 'semibold', 'bold'],
      description:
        'Font weight [Note:- Default Font-Weight for Body variants is regular and for Display variants is medium]',
    },
  },
};

export default TypographyConfig;
