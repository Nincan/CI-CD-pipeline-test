import pick from 'lodash/pick';
import { Input } from 'spaceweb/input';
import { YardConfig } from '../types';
import { changeHandlers, SpacePropsTypes as PropTypes } from '../common';

export const inputProps = {
  value: {
    value: 'Hello',
    type: PropTypes.String,
    description: 'Input value attribute.',
    stateful: true,
  },
  onChange: {
    value: 'e => setValue(e.target.value)',
    type: PropTypes.Function,
    description: 'Called when input value is changed.',
    propHook: {
      what: 'e.target.value',
      into: 'value',
    },
  },
  debouncedOnChange: {
    value: 'e => console.log(e.target.value)',
    type: PropTypes.Function,
    description: 'Debounced handler of onChange. Specify interval with `debounceInterval` prop.',
    propHook: {
      what: 'e.target.value',
      into: 'value',
    },
  },
  debounceInterval: {
    value: 200,
    type: PropTypes.Number,
    description:
      'debouncedOnChange function will be called after onChange stops being called for this duration in milliseconds.',
  },
  className: {
    value: undefined,
    type: PropTypes.String,
    description: 'className to modify style of Input container',
  },
  style: {
    value: 'w-3/4',
    type: PropTypes.String,
    description: 'className to modify style of Input container',
  },
  intent: {
    value: 'default',
    options: ['default', 'success', 'warning', 'error'],
    type: PropTypes.FixedString,
    description: 'Defines the intent of the Input.',
  },
  disabled: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Renders component in disabled state.',
  },
  size: {
    value: undefined,
    type: PropTypes.FixedString,
    description: "Input's size. SPACIOUS | COMFORTABLE -> md, COMPACT -> xxxs, DEFAULT -> md",
    options: ['xs', 'sm', 'md'],
  },
  variant: {
    value: 'default',
    type: PropTypes.FixedString,
    description: "Input's variant - default, line",
    options: ['default', 'line'],
  },
  placeholder: {
    value: 'Controlled Input',
    type: PropTypes.String,
    description: "Input's placeholder.",
  },
  type: {
    value: undefined,
    type: PropTypes.String,
    placeholder: 'password',
    description: 'Input type attribute.',
  },
  clearable: {
    value: false,
    type: PropTypes.Boolean,
    description: 'If true, adds a clear value icon button to the end of the input container.',
    hidden: true,
  },
  startEnhancer: {
    value: undefined,
    placeholder: '() => <span>$</span>',
    type: PropTypes.Function,
    description: 'An input helper rendered before and attached to the input field.',
  },
  endEnhancer: {
    value: undefined,
    placeholder: '() => <span>?</span>',
    type: PropTypes.Function,
    description: 'An input helper rendered after and attached to the input field.',
  },
  inputMode: {
    value: undefined,
    type: PropTypes.String,
    description:
      'A hint as to the type of data that might be entered by the user while editing the element or its contents.',
    hidden: true,
  },
  'aria-label': {
    value: undefined,
    type: PropTypes.String,
    description: `Sets aria-label attribute.`,
    hidden: true,
  },
  'aria-labelledby': {
    value: undefined,
    type: PropTypes.String,
    description: `Sets aria-labelledby attribute.`,
    hidden: true,
  },
  'aria-describedby': {
    value: undefined,
    type: PropTypes.String,
    description: `Sets aria-describedby attribute.`,
    hidden: true,
  },
  autoComplete: {
    value: undefined,
    type: PropTypes.String,
    description: 'Determines if browser should provide value suggestions.',
    hidden: true,
  },
  autoFocus: {
    value: undefined,
    type: PropTypes.String,
    description: `Takes 'start' | 'end' | number | boolean values and sets the position of the cursor on mount.`,
    hidden: true,
  },
  pattern: {
    value: undefined,
    type: PropTypes.String,
    description: 'A regex that is used to validate the value of the input on form submission.',
    hidden: true,
  },
  id: {
    value: undefined,
    type: PropTypes.String,
    description: "Id attribute value to be added to the input element and as a label's for attribute value.",
    hidden: true,
  },
  inputRef: {
    value: undefined,
    type: PropTypes.Ref,
    description: 'A ref to access an input element.',
    hidden: true,
  },
  name: {
    value: undefined,
    type: PropTypes.String,
    description: 'Name attribute.',
    hidden: true,
  },
  min: {
    value: undefined,
    type: PropTypes.String,
    description: 'min value when used as input type=number',
    hidden: true,
  },
  max: {
    value: undefined,
    type: PropTypes.String,
    description: 'max value when used as input type=number',
    hidden: true,
  },
  ...pick(changeHandlers, ['onBlur', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus']),
  required: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Renders component in required state.',
    hidden: true,
  },
};

const InputConfig: YardConfig = {
  componentName: 'Input',
  imports: {
    'spaceweb/input': {
      named: ['Input'],
    },
  },
  scope: {
    Input,
  },
  theme: [],
  props: {
    ...inputProps,
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [
          'Root',
          'Input',
          'InputContainer',
          'After',
          'Before',
          'ClearIcon',
          'ClearIconContainer',
          'EndEnhancer',
          'MaskToggleButton',
          'MaskToggleHideIcon',
          'MaskToggleShowIcon',
          'StartEnhancer',
        ],
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
          $position: {
            type: PropTypes.Enum,
            description: 'ADJOINED state. How is the input grouped with other controls.',
          },
        },
      },
    },
  },
  // mapTokensToProps: {
  //   Input: inputPropsType,
  // },
};

export default InputConfig;
