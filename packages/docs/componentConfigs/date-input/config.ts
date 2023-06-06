import _omit from 'lodash/omit';

import { DateInput } from 'spaceweb/date-input';
import DatePickerConfig from '../date-picker/config';

import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';
import InputConfig from '../input/config';

const DateInputConfig: YardConfig = {
  componentName: 'DateInput',
  imports: {
    'spaceweb/date-input': {
      named: ['DateInput'],
    },
  },
  scope: {
    DateInput,
  },
  theme: [],
  props: {
    value: {
      value: new Date().toISOString(),
      type: PropTypes.Date,
      description: 'Input value attribute.',
      stateful: true,
    },
    timeSelect: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'Renders the time picker to select time',
    },
    onChange: {
      value: '(value, timezone) => {setValue(value); setTimezone(timezone)}',
      type: PropTypes.Function,
      description: 'Called when valid date is entered in input or selected from datepicker.',
      propHook: {
        what: `!value ? undefined : value.toISOString()`,
        into: 'value',
      },
    },
    showTimezone: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description:
        'If true, shows the timezone picker within datepicker. If false will only hide picker. If user passes timezone, date adaption will continue to happen',
    },
    timezone: {
      value: 'Asia/Kolkata',
      defaultValue: 'System Timezone',
      type: PropTypes.String,
      description: 'Currently selected timezone.',
      stateful: true,
    },
    placeholder: {
      value: 'Enter Date',
      type: PropTypes.String,
      description: "Input's placeholder.",
    },
    mask: {
      value: '99/99/9999',
      type: PropTypes.String,
      description: 'Mask used for the text input. Passed to react-input-mask',
    },
    formatString: {
      value: 'MM/dd/yyyy',
      type: PropTypes.String,
      description: 'String format passed to date-fns.',
    },
    maxDate: {
      value: undefined,
      type: PropTypes.Date,
      description: 'A max date that is selectable.',
      placeholder: '2020-10-17T07:00:00.000Z',
      hidden: true,
    },
    minDate: {
      value: undefined,
      type: PropTypes.Date,
      description: 'A min date that is selectable.',
      placeholder: '2018-10-17T07:00:00.000Z',
      hidden: true,
    },
    ..._omit(InputConfig.props, [
      'overrides',
      'min',
      'max',
      'value',
      'onChange',
      'debouncedOnChange',
      'debounceInterval',
      'type',
      'inputMode',
      'placeholder',
    ]),
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [
          ...InputConfig.props.overrides.custom.names,
          {
            componentName: 'Before',
            props: {
              overrides: {
                value: undefined,
                type: PropTypes.Custom,
                description: 'Lets you customize all aspects of the component.',
                custom: {
                  names: [{ ...DatePickerConfig, componentName: 'DatePicker' }],
                },
              },
            },
          },
        ],
      },
    },
  },
};

export default DateInputConfig;
