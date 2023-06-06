import pick from 'lodash/pick';
import { Switch } from 'spaceweb/switch';
import { changeHandlers, SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

const SwitchConfig: YardConfig = {
  componentName: 'Switch',
  imports: {
    'spaceweb/switch': {
      named: ['Switch'],
    },
  },
  scope: {
    Switch,
  },
  theme: [],
  props: {
    checked: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Renders component in checked state.',
      stateful: true,
    },
    size: {
      value: 'md',
      defaultValue: 'md',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the component',
      type: PropTypes.FixedString,
    },
    children: {
      value: 'Sign up for the newsletter',
      type: PropTypes.ReactNode,
      description: 'The React Nodes displayed next to the switch.',
    },
    intent: {
      value: 'default',
      options: ['default', 'success', 'warning', 'error'],
      type: PropTypes.FixedString,
      description: 'Defines the intent of the Switch.',
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Renders component in disabled state.',
    },
    onChange: {
      value: 'e => setChecked(e.target.checked)',
      type: PropTypes.Function,
      description: 'Called when switch value is changed.',
      propHook: {
        what: 'e.target.checked',
        into: 'checked',
      },
    },
    required: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Renders component in required state.',
      hidden: true,
    },
    inputRef: {
      value: undefined,
      type: PropTypes.Ref,
      description: 'A ref to access an input element.',
      hidden: true,
    },
    autoFocus: {
      value: false,
      type: PropTypes.Boolean,
      description: 'If true the component will be focused on the first mount.',
      hidden: true,
    },
    name: {
      value: undefined,
      type: PropTypes.String,
      description: 'Name attribute.',
      hidden: true,
    },
    title: {
      value: undefined,
      type: PropTypes.String,
      description: 'Title attribute.',
      hidden: true,
    },
    ...pick(changeHandlers, ['onBlur', 'onFocus', 'onMouseDown', 'onMouseEnter', 'onMouseLeave']),
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Label', 'Toggle', 'ToggleTrack'],
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
          $checked: 'checked',
          $required: 'required',
          $disabled: 'disabled',
        },
      },
    },
  },
};

export default SwitchConfig;
