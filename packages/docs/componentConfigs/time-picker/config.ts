import { TimePicker } from 'spaceweb/time-picker';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

import SelectConfig from '../select/config';

export const timePickerProps = {
  value: {
    value: new Date().toISOString(),
    type: PropTypes.Date,
    description: 'Currently selected time',
    stateful: true,
  },
  onChange: {
    value: 'date => setValue(date)',
    type: PropTypes.Function,
    description: 'Event handler that is called when a new timezone is selected.',
    propHook: {
      what: `!date ? undefined : date.toISOString()`,
      into: 'value',
    },
  },
  placeholder: {
    value: undefined,
    type: PropTypes.String,
    placeholder: 'HH:mm',
    description: 'If the value is undefined, the placeholder is shown. Defaults to HH:mm',
  },
  step: {
    value: undefined,
    type: PropTypes.Number,
    placeholder: '900',
    description: 'Amount of seconds between each option time. Defaults to 900 (15 minutes).',
  },
  format: {
    value: '12',
    options: ['12', '24'],
    type: PropTypes.FixedString,
    description: '12 or 24. Render options in AM/PM format or 24 hour format. Defaults to 12 hour.',
  },
  size: {
    value: 'md',
    defaultValue: 'md',
    options: ['sm', 'md', 'lg'],
    type: PropTypes.FixedString,
    description: 'Defines the size (scale) of dropdown menu items. See the Menu component API.',
  },
  intent: {
    value: 'default',
    options: ['default', 'success', 'warning', 'error'],
    type: PropTypes.FixedString,
    description: 'Defines the kind (purpose) of a button.',
  },
  disabled: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Renders component in disabled state',
  },
  creatable: {
    value: false,
    type: PropTypes.Boolean,
    description:
      "Set to true to allow times that aren't displayed in the options list to be entered manually. Defaults to false.",
  },
  clearable: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Set to true to allow the timepicker to have an undefined value. Defaults to false.',
  },
  overrides: {
    value: undefined,
    type: PropTypes.Custom,
    description: 'Lets you customize all aspects of the component.',
    custom: {
      names: [{ ...SelectConfig, componentName: 'Select' }],
    },
  },
};

const TimePickerConfig: YardConfig = {
  componentName: 'TimePicker',
  imports: {
    'spaceweb/time-picker': {
      named: ['TimePicker'],
    },
  },
  scope: { TimePicker },
  theme: [],
  props: timePickerProps,
};

export default TimePickerConfig;
