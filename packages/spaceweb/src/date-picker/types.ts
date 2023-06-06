import {
  CalendarProps as BaseCalendarProps,
  DatepickerProps as BaseDatepickerProps,
  SharedStylePropsT,
} from 'baseui/datepicker';
import { TimePickerProps } from '../time-picker';

import { InputSize, InputVariant } from '../input';
import { Override } from '../overrides/types';
import { Intent } from '../types';

export type FormatString = string;

export type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type CalendarProps = Omit<BaseCalendarProps, 'overrides'> & {
  formatString?: FormatString;
  overrides?: DatepickerOverrides;
  adapter?: any;
  weekStartsOn?: WeekStartsOn;
};

export type TimeSelect = 'start' | 'end';

export type DateTimeSelectSharedProps = {
  $timeSelect: TimeSelect;
};

export type DatepickerOverrides<T = SharedStyleProps> = {
  CalendarContainer?: Override<T>;
  CalendarHeader?: Override<T>;
  Calendar?: Override<CalendarProps & Record<string, any>>;
  Day?: Override<T>;
  Input?: Override<T>;
  InputWrapper?: Override<T>;
  Month?: Override<T>;
  MonthContainer?: Override<T>;
  MonthHeader?: Override<T>;
  MonthYearSelectButton?: Override<T>;
  MonthYearSelectIconContainer?: Override<T>;
  MonthYearSelectPopover?: Override<T>;
  MonthYearSelectStatefulMenu?: Override<T>;
  NextButton?: Override<T>;
  NextButtonIcon?: Override<T>;
  Popover?: Override<T>;
  PrevButton?: Override<T>;
  PrevButtonIcon?: Override<T>;
  Root?: Override<T>;
  TimePicker?: Override<TimePickerProps & Record<string, any>>;
  TimePickerFormControl?: Override<Record<string, any>>;
  DateInputFormControl?: Override<Record<string, any>>;
  Week?: Override<T>;
  WeekdayHeader?: Override<T>;
  Footer?: Override<T>;
  DateTimeSelect?: Override<DateTimeSelectSharedProps>;
};

export type Nullable<T> = T | null | undefined;

//TODO: should DatepickerProps also omits the range?
export type StatelessDatePickerProps = Omit<
  BaseDatepickerProps,
  | 'timeSelectStart'
  | 'timeSelectEnd'
  | 'value'
  | 'onChange'
  | 'quickSelect'
  | 'quickSelectOptions'
  | 'size'
  | 'overrides'
  | 'onDayClick'
  | 'onDayMouseOver'
  | 'onDayMouseLeave'
  | 'onMonthChange'
  | 'onYearChange'
  | 'formatString'
  | 'peekNextMonth'
  | 'fixedHeight'
> & {
  id?: string;
  showTimezone?: boolean;
  timezone?: string;
  intent?: Intent;
  timeSelect?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  adapter?: any;
  isOpen?: boolean;
  variant?: InputVariant;
  value: Date | Date[] | undefined;
  onChange?: (data: { value?: Nullable<Date>[] | Nullable<Date>; timezone?: string }) => any;
  size?: InputSize;
  overrides?: DatepickerOverrides;
  autoSizeInput?: boolean;
  formatString?: string;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * @deprecated This will be removed in next major release. Spaceweb will handle this prop.
   */
  peekNextMonth?: boolean;
  /**
   * @deprecated This will be removed in next major release. Spaceweb will handle this prop.
   */
  fixedHeight?: boolean;
};

export type StatefulContainerProps = {
  children: (props: StatelessDatePickerProps) => JSX.Element;
  adapter?: any;
  value?: Date;
  onChange?: (data: { value?: Date | undefined | null; timezone?: string }) => any;
  startOpen?: boolean;
  showTimezone?: boolean;
  timezone?: string;
};

export type DatePickerProps = Omit<StatelessDatePickerProps, 'value' | 'range'> &
  Omit<StatefulContainerProps, 'children'>;

export type DatePickerSharedProps = SharedStylePropsT;

export type SharedStyleProps = {
  $date: Date;
  $disabled?: boolean;
  $endDate?: boolean;
  $endOfMonth?: boolean;
  $hasRangeHighlighted?: boolean;
  $hasRangeOnRight?: boolean;
  $hasRangeSelected?: boolean;
  $isFocusVisible?: boolean;
  $isHighlighted?: boolean;
  $isHovered?: boolean;
  $outsideMonth?: boolean;
  $peekNextMonth?: boolean;
  $pseudoHighlighted?: boolean;
  $pseudoSelected?: boolean;
  $range?: boolean;
  $selected?: boolean;
  $startDate?: boolean;
  $startOfMonth?: boolean;
  $outsideMonthWithinRange?: boolean;
  $month?: number;
};
