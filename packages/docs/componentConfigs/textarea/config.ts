import omit from 'lodash/omit';
import { Textarea } from 'spaceweb/textarea';
import { PropTypes } from 'react-view';
import { YardConfig } from '../types';
import { inputProps } from '../input/config';

const TextareaConfig: YardConfig = {
  componentName: 'Textarea',
  imports: {
    'spaceweb/textarea': { named: ['Textarea'] },
  },
  scope: {
    Textarea,
  },
  theme: [],
  props: {
    ...omit(inputProps, ['type', 'startEnhancer', 'endEnhancer']),
    autoSize: {
      value: false,
      type: PropTypes.Boolean,
      description: 'If true, textarea resizes as per the value entered automatically.',
    },
    rows: {
      value: undefined,
      type: PropTypes.Number,
      description: 'Sets the height of textarea. Defaults to 3 (if autoSize is false), 1 (if autoSize is true)',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Input', 'InputContainer'],
        sharedProps: {
          $isFocused: {
            type: PropTypes.Boolean,
            description: 'True when the component is focused.',
          },
          $disabled: 'disabled',
          $error: 'error',
          $adjoined: 'adjoined',
          $size: 'size',
          $required: 'required',
        },
      },
    },
  },
  // mapTokensToProps: {
  //   Textarea: textareaProps,
  // },
};

export default TextareaConfig;
