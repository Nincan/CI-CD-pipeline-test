import { TimezonePicker } from 'spaceweb/time-zone-picker';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

import SelectConfig from '../select/config';

export const timezonePickerProps = {
  value: {
    value: 'Asia/Kolkata',
    type: PropTypes.String,
    description: 'Currently selected timezone',
    stateful: true,
  },
  onChange: {
    value: '(option) => setValue(option?.id)',
    type: PropTypes.Function,
    description: 'Event handler that is called when a new timezone is selected.',
    propHook: {
      what: 'option?.id',
      into: 'value',
    },
  },
  disabled: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Renders component in disabled state',
  },
  intent: {
    value: 'default',
    options: ['default', 'success', 'warning', 'error'],
    type: PropTypes.FixedString,
    description: 'Defines the kind (purpose) of a timezone picker.',
  },
  size: {
    value: 'md',
    defaultValue: 'md',
    options: ['sm', 'md', 'lg'],
    type: PropTypes.FixedString,
    description: 'Defines the size (scale) of dropdown menu items. See the Menu component API.',
  },
  date: {
    value: new Date().toISOString(),
    type: PropTypes.Date,
    description:
      'If not provided, defaults to new Date(). Important to note that the timezone picker only displays options related to the provided date. Take Pacific Time for example. On March 9th, Pacific Time equates to the more specific Pacific Standard Time. On March 10th, it operates on Pacific Daylight Time. The timezone picker will never display PST and PDT together. If you need exact specificity, provide a date. Otherwise it will default to the relevant timezone at render.',
  },
  mapLabels: {
    value: undefined,
    type: PropTypes.Function,
    description:
      "Customize the option's label. Useful for translations and optionally mapping from 'America/Los_Angeles' to 'Pacific Time'.",
    placeholder: '({ id, label }) => "Test"',
  },
  timezoneOptions: {
    value: undefined,
    type: PropTypes.Array,
    description: 'Options to be displayed in the dropdown. If not provided, it will defaults to show all the timezones',
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

const TimezonePickerConfig: YardConfig = {
  componentName: 'TimezonePicker',
  imports: {
    'spaceweb/time-zone-picker': {
      named: ['TimezonePicker'],
    },
  },
  scope: { TimezonePicker },
  theme: [],
  props: {
    ...timezonePickerProps,
  },
};

export default TimezonePickerConfig;
