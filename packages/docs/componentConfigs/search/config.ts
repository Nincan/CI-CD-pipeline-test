import pick from 'lodash/pick';
import { Search } from 'spaceweb/search';
import { YardConfig } from '../types';
import { changeHandlers, SpacePropsTypes as PropTypes } from '../common';

export const searchProps = {
  value: {
    value: 'Hello',
    type: PropTypes.String,
    description: 'Search value attribute.',
    stateful: true,
  },
  onChange: {
    value: 'e => setValue(e.target.value)',
    type: PropTypes.Function,
    description: 'Called when search value is changed.',
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
  className: {
    value: undefined,
    type: PropTypes.String,
    description: 'className to modify style of Search container',
  },
  style: {
    value: 'w-3/4',
    type: PropTypes.String,
    description: 'className to modify style of Search container',
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
    options: ['xxs', 'xs', 'sm', 'md'],
  },
  variant: {
    value: 'default',
    type: PropTypes.FixedString,
    description: 'Variant of SearchInput',
    options: ['default', 'light'],
  },
  placeholder: {
    value: 'Search',
    type: PropTypes.String,
    description: "Search Input's placeholder.",
  },
  clearable: {
    value: false,
    type: PropTypes.Boolean,
    description: 'If true, adds a clear value icon button to the end of the input container.',
  },
  inputMode: {
    value: undefined,
    type: PropTypes.String,
    description:
      'A hint as to the type of data that might be entered by the user while editing the element or its contents.',
    hidden: true,
  },
  debounceInterval: {
    value: 200,
    type: PropTypes.Number,
    description:
      'debouncedOnChange function will be called after onChange stops being called for this duration in milliseconds.',
  },
  'aria-label': {
    value: undefined,
    type: PropTypes.String,
    description: 'Sets aria-label attribute.',
    hidden: true,
  },
  'aria-labelledby': {
    value: undefined,
    type: PropTypes.String,
    description: 'Sets aria-labelledby attribute.',
    hidden: true,
  },
  'aria-describedby': {
    value: undefined,
    type: PropTypes.String,
    description: 'Sets aria-describedby attribute.',
    hidden: true,
  },
  autoComplete: {
    value: undefined,
    type: PropTypes.String,
    description: 'Determines if browser should provide value suggestions.',
    hidden: true,
  },
  autoFocus: {
    value: false,
    type: PropTypes.Boolean,
    description: 'If true the input will be focused on the first mount.',
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
  ...pick(changeHandlers, ['onBlur', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus']),
};

const SearchConfig: YardConfig = {
  componentName: 'Search',
  imports: {
    'spaceweb/search': {
      named: ['Search'],
    },
  },
  scope: {
    Search,
  },
  theme: [],
  props: {
    ...searchProps,
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Input', 'InputContainer', 'After', 'Before', 'SearchIcon', 'ClearIcon', 'ClearIconContainer'],
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
            description: 'ADJOINED state. How is the search input grouped with other controls.',
          },
        },
      },
    },
  },
};

export default SearchConfig;
