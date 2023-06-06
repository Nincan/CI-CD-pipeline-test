import { TimeRangePicker } from 'spaceweb/time-range-picker';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

import TimezonePickerConfig from '../time-zone-picker/config';
import MenuConfig from '../menu/config';
import MenuItemConfig from '../menu/menu-item-config';
import TimePickerConfig from '../time-picker/config';
import { inputProps } from '../input/config';

const TimeRangeListConfig: YardConfig = {
  componentName: 'TimeRangeList',
  scope: {},
  imports: {},
  theme: [],
  props: {
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [
          { ...MenuConfig, componentName: 'Menu' },
          { ...MenuItemConfig, componentName: 'MenuItem' },
        ],
      },
    },
  },
};

export const timeRangePickerProps = {
  value: {
    value: 'TODAY',
    defaultValue: undefined,
    type: PropTypes.Array || PropTypes.String,
    description: 'Currently selected date. Either Array of Date or string from the ids of timeRangePresets',
    stateful: true,
    placeholder: 'Enter Value',
  },
  placeholder: {
    value: 'MM/dd/yyyy-MM/dd/yyyy',
    type: PropTypes.String,
    description: "Input's placeholder.",
    placeholder: 'Select a time range',
  },
  timezone: {
    value: 'Asia/Kolkata',
    defaultValue: 'System Timezone',
    type: PropTypes.String,
    description: 'Currently selected timezone.',
    stateful: true,
  },
  timeRangePresets: {
    value: undefined,
    type: PropTypes.Array,
    description:
      'Array of objects, each containing property id, label and getTimeRangeLimits. getTimeRangeLimits function should return array of startDate and endDate.',
    placeholder: 'Paste time range options here...',
  },
  weekStartsOn: {
    value: 0,
    type: PropTypes.Number,
    description: 'Decides the start day of week. 0 indicates Sunday. This will depend on locale',
    placeholder: 'Enter number from 0-6 inclusive. 0 indicates Sunday.',
  },
  clearable: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Allows to clears value from input',
  },
  disableTimezone: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Hides the time zone picker',
  },
  disabled: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Renders component in disabled state.',
  },
  autoSizeInput: {
    value: true,
    defaultValue: false,
    type: PropTypes.Boolean,
    description: 'Adjusts the width according to value',
  },
  showTimezoneInSummary: {
    value: true,
    defaultValue: false,
    type: PropTypes.Boolean,
    description: 'If true shows timezone in input with date',
  },
  showFullDateInSummary: {
    value: true,
    defaultValue: false,
    type: PropTypes.Boolean,
    description: 'If true, will show the full date with preset in input.',
  },
  timeSelect: {
    value: true,
    defaultValue: false,
    type: PropTypes.Boolean,
    description: 'Renders the time picker to select end time',
  },
  peekNextMonth: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Defines if dates outside of the range of the current month are displayed.',
  },
  size: inputProps.size,
  displayVariant: {
    value: 'default',
    type: PropTypes.FixedString,
    description: 'If compact, it tries to minimize the size of input, by showing minimal info about the range upfront',
    options: ['default', 'compact', 'iconButton'],
  },
  monthsShown: {
    value: 2,
    type: PropTypes.Number,
    description: 'A number of months rendered in the calendar.',
    hidden: true,
  },
  intent: {
    value: 'default',
    options: ['default', 'success', 'warning', 'error'],
    type: PropTypes.FixedString,
    description: 'Defines the intent of the Input.',
  },
  variant: {
    value: 'default',
    type: PropTypes.FixedString,
    description: "Input's variant - default, line",
    options: ['default', 'line'],
  },
  startOpen: {
    value: undefined,
    type: PropTypes.Boolean,
    description: 'If true, opens the dropdown when the time range picker mounts.',
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
  fixedHeight: {
    value: undefined,
    type: PropTypes.Boolean,
    description: 'Defines if 6 rows should always be displayed for all the months.',
    hidden: true,
  },
  onSubmit: {
    value: '({value, date, preset, timezone}) => {\
        setValue(value);\
        setTimezone(timezone);\
      }',
    type: PropTypes.Function,
    description: 'Event handler that is called when user will press the save button',
    propHook: {
      what: `preset!=='CUSTOM' ? preset : (Array.isArray(date) && date[0] && date[1]) ?"[new Date('" + date[0].toISOString() + "'), new Date('" + date[1].toISOString() + "')]": "[]" `,
      // what: `(Array.isArray(date) && date[0] && date[1]) ? "[new Date('" + date[0].toISOString() + "'), new Date('" + date[1].toISOString() + "')]": preset==='CUSTOM' ? "[]": value`,
      into: 'value',
    },
  },
  onChange: {
    value: undefined,
    type: PropTypes.Function,
    placeholder: '({date, preset, timezone}) => {}',
    description:
      'Event handler that is called when any update is made to date either by selecting preset, directly selecting date from calendar or changing time.',
    hidden: true,
  },
  formatString: {
    value: 'MMM dd, yyyy hh:mm a',
    defaultValue: 'MM/dd/yyyy',
    type: PropTypes.String,
    description: 'String format passed to date-fns.',
    placeholder: 'yyyy/MM/dd',
  },
  onClose: {
    value: undefined,
    type: PropTypes.Function,
    placeholder: '() => {}',
    description:
      'A function () => {} that is called every time datepicker closes except when it closes due after submit.',
    hidden: true,
  },
  excludeDates: {
    value: undefined,
    type: PropTypes.Array,
    placeholder: '[new Date()]',
    description: 'A list of dates to disable. Array<Date>',
    hidden: true,
  },
  filterDate: {
    value: undefined,
    type: PropTypes.Function,
    placeholder: '(Date) => {}',
    description:
      'A filter function (Date => boolean) that is called to check the disabled state of a day. If false is returned the day is considered to be disabled.',
    hidden: true,
  },
};

const TimeRangePickerConfig: YardConfig = {
  componentName: 'TimeRangePicker',
  imports: {
    'spaceweb/time-range-picker': {
      named: ['TimeRangePicker'],
    },
  },
  scope: { TimeRangePicker },
  theme: [],
  props: {
    ...timeRangePickerProps,
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [
          'TimeSelectFormControl',
          'TimeSelect',
          { ...TimeRangeListConfig, componentName: 'TimeRangeList' },
          { ...TimePickerConfig, componentName: 'TimePicker' },
          'DateQuickSelectOptions',
          'Header',
          'Footer',
          'FooterBeforeEnhancer',
          'HeaderBeforeEnhancer',
          { ...TimezonePickerConfig, componentName: 'TimezonePicker' },
        ],
        sharedProps: {
          $date: 'value',
          $disabled: 'disabled',
          $endDate: 'endDate',
          $endOfMonth: 'endOfMonth',
          $hasRangeHighlighted: 'hasRangeHighlighted',
          $hasRangeOnRight: 'hasRangeOnRight',
          $hasRangeSelected: 'hasRangeSelected',
          $isFocusVisible: 'isFocusVisible',
          $isHighlighted: 'isHighlighted',
          $isHovered: 'isHovered',
          $outsideMonth: 'outsideMonth',
          $peekNextMonth: 'peekNextMonth',
          $pseudoHighlighted: 'pseudoHighlighted',
          $pseudoSelected: 'pseudoSelected',
          $range: 'range',
          $selected: 'selected',
          $startDate: 'startDate',
          $startOfMonth: 'startOfMonth',
        },
      },
    },
  },
};

export default TimeRangePickerConfig;
