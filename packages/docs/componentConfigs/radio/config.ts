import { Radio, RadioGroup } from 'spaceweb/radio';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

const RadioGroupConfig: YardConfig = {
  componentName: 'RadioGroup',
  imports: {
    'spaceweb/radio': { named: ['RadioGroup'] },
  },
  scope: {
    Radio,
    RadioGroup,
  },
  theme: [],
  props: {
    value: {
      value: '2',
      type: PropTypes.String,
      description: 'Passed to the input element value attribute',
      stateful: true,
    },
    size: {
      value: 'md',
      defaultValue: 'md',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the component',
      type: PropTypes.FixedString,
    },
    className: {
      value: undefined,
      type: PropTypes.String,
      description: 'Enriched style to be provided to RadioGroupRoot',
    },
    intent: {
      value: 'default',
      options: ['default', 'success', 'warning', 'error'],
      type: PropTypes.FixedString,
      description: 'Defines the intent of the Radio.',
    },
    style: {
      value: undefined,
      type: PropTypes.String,
      description: 'Enriched style to be provided to RadioGroupRoot',
    },
    onChange: {
      value: 'e => setValue(e.target.value)',
      type: PropTypes.Function,
      description: 'Handler for change events on trigger element.',
      propHook: {
        what: 'e.target.value',
        into: 'value',
      },
    },
    children: {
      value: `<Radio value="1">One</Radio>
<Radio
  value="2"
>
  Two
</Radio>
<Radio value="3">
  Three
</Radio>`,
      type: PropTypes.ReactNode,
      description: 'Radios within the RadioGroup',
      imports: {
        'spaceweb/radio': { named: ['Radio'] },
      },
    },
    name: {
      value: 'number',
      type: PropTypes.String,
      description:
        'String value for the name of RadioGroup, it is used to group buttons. If missed default is random ID string.',
      hidden: false,
    },
    align: {
      value: 'vertical',
      options: ['horizontal', 'vertical'],
      description: 'How to position radio buttons in the group',
      type: PropTypes.FixedString,
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description:
        'Disabled all radio group from being changed. To disable some of radios provide disabled flag in each of them.',
    },
    required: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Set if the control is required to be checked.',
      hidden: true,
    },
    autoFocus: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Set to be focused (active) on selectedchecked radio.',
      hidden: true,
    },
    containsInteractiveElement: {
      value: false,
      type: PropTypes.Boolean,
      description:
        'Indicates the radio contains an interactive element, and the default label behavior should be prevented for child elements.',
      hidden: true,
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
    // ...pick(changeHandlers, [
    //   'onBlur',
    //   'onFocus',
    //   'onMouseLeave',
    //   'onMouseEnter',
    // ]),
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['RadioGroupRoot'],
        sharedProps: {
          $isFocused: {
            type: PropTypes.Boolean,
            description: 'True when the component is focused.',
          },
          $isHovered: {
            type: PropTypes.Boolean,
            description: 'True when the component is hovered.',
          },
          $isActive: {
            type: PropTypes.Boolean,
            description: 'True when the component is active.',
          },
          $isError: 'isError',
          $checked: {
            type: PropTypes.Boolean,
            description: 'True when the component is active.',
          },
          $required: 'required',
          $disabled: 'disabled',
        },
      },
    },
  },
};

export default RadioGroupConfig;
