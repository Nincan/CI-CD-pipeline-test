import { DatePicker } from 'spaceweb/date-picker';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

import InputConfig, { inputProps } from '../input/config';
import PopoverConfig from '../popover/config';
import FormControl from '../form-control/config';
import TimePickerConfig from '../time-picker/config';

export const datePickerProps = {
  value: {
    value: new Date().toISOString(),
    type: PropTypes.Date,
    description: 'Currently selected date (Date object).',
    stateful: true,
  },
  clearable: {
    value: false,
    type: PropTypes.Boolean,
    description: 'If true, adds a clear value icon button to the end of the input container.',
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
  timeSelect: {
    value: true,
    type: PropTypes.Boolean,
    description: 'Determines if TimePicker component will be enabled for start time',
  },
  disabled: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Renders component in disabled state.',
  },
  intent: {
    value: 'default',
    options: ['default', 'success', 'warning', 'error'],
    type: PropTypes.FixedString,
    description: 'Defines the intent of the Input.',
  },
  peekNextMonth: {
    value: true,
    type: PropTypes.Boolean,
    description: 'Defines if dates outside of the range of the current month are displayed.',
  },
  size: inputProps.size,
  variant: {
    value: 'default',
    type: PropTypes.FixedString,
    description: "Input's variant - default, line",
    options: ['default', 'line'],
  },
  autoSizeInput: {
    value: false,
    defaultValue: false,
    type: PropTypes.Boolean,
    description: 'Adjusts the width according to value',
  },
  onChange: {
    value: '({ value, timezone }) => {setValue(value); if(timezone){setTimezone(timezone)}}',
    type: PropTypes.Function,
    description: 'Event handler that is called when a new date is selected.',
    propHook: {
      // eslint-disable-next-line quotes
      what: `!value ? undefined : value.toISOString()`,
      into: 'value',
    },
  },
  monthsShown: {
    value: 1,
    type: PropTypes.Number,
    description: 'A number of months rendered in the calendar.',
  },
  weekStartsOn: {
    value: 0,
    type: PropTypes.Number,
    description: 'Decides the start day of week. 0 indicates Sunday. This will depend on locale',
    placeholder: 'Enter number from 0-6 inclusive. 0 indicates Sunday.',
  },
  startOpen: {
    value: undefined,
    type: PropTypes.Boolean,
    description: 'If true, opens the dropdown when the date picker mounts.',
  },
  fixedHeight: {
    value: undefined,
    type: PropTypes.Boolean,
    description: 'Defines if 6 rows should always be displayed for all the months.',
    hidden: true,
  },
  formatString: {
    value: 'MM/dd/yyyy',
    type: PropTypes.String,
    description: 'String format passed to date-fns.',
    placeholder: 'yyyy/MM/dd',
  },
  maxDate: {
    value: undefined,
    type: PropTypes.Date,
    description: 'A max date that is selectable.',
    placeholder: '2020-10-17T07:00:00.000Z',
  },
  minDate: {
    value: undefined,
    type: PropTypes.Date,
    description: 'A min date that is selectable.',
    placeholder: '2018-10-17T07:00:00.000Z',
  },
  trapTabbing: {
    value: false,
    type: PropTypes.Boolean,
    description: 'Defines if tabbing inside the calendar is circled within it.',
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

const DatePickerConfig: YardConfig = {
  componentName: 'DatePicker',
  imports: {
    'spaceweb/date-picker': {
      named: ['DatePicker'],
    },
  },
  scope: { DatePicker },
  theme: [],
  props: {
    ...datePickerProps,
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [
          'CalendarContainer',
          'CalendarHeader',
          'Calendar',
          'Day',
          { ...InputConfig, componentName: 'Input' },
          'Month',
          'MonthContainer',
          'MonthHeader',
          'MonthYearSelectButton',
          'MonthYearSelectIconContainer',
          { ...PopoverConfig, componentName: 'MonthYearSelectPopover' },
          'MonthYearSelectStatefulMenu',
          'NextButton',
          'NextButtonIcon',
          { ...PopoverConfig, componentName: 'Popover' },
          'PrevButton',
          'PrevButtonIcon',
          'QuickSelect',
          'QuickSelectContainer',
          'QuickSelectFormControl',
          'Root',
          { ...TimePickerConfig, componentName: 'TimeSelect' },
          'TimeSelectContainer',
          { ...FormControl, componentName: 'TimeSelectFormControl' },
          'Week',
          'WeekdayHeader',
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

export default DatePickerConfig;
