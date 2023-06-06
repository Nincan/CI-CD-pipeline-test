import { WeekStartsOn } from '../date-picker';
import { InputProps } from '../input';

export type DateInputProps = Omit<
  InputProps,
  'value' | 'onChange' | 'min' | 'max' | 'debouncedOnChange' | 'debounceInterval' | 'type' | 'inputMode'
> & {
  formatString?: string;
  adapter?: any;
  mask?: string;
  locale?: any;
  value?: Date;
  onChange: (value?: Date | null, timezone?: string) => void;
  weekStartsOn?: WeekStartsOn;
  maskChar?: string;
  minDate?: Date;
  maxDate?: Date;
  timeSelect?: boolean;
  showTimezone?: boolean;
  timezone?: string;
};
