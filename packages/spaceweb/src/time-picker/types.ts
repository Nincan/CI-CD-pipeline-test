import { Intent, Styles } from '../types';
import { Override } from '../overrides/types';
import { SharedProps, Size } from '../select/types';

import {
  TimePickerProps as BaseTimePickerProps,
  TimePickerOverrides as BaseTimePickerOverrides,
} from 'baseui/timepicker';
import { DateIOAdapter } from 'baseui/datepicker/utils/types';

export type TimePickerOverrides = {
  [key in keyof BaseTimePickerOverrides]?: Override<SharedProps>;
};

export type TimePickerProps = Omit<
  BaseTimePickerProps,
  'error' | 'positive' | 'overrides' | 'size' | 'nullable' | 'adapter'
> & {
  adapter?: DateIOAdapter<Date>;
  intent?: Intent;
  className?: Styles;
  style?: Styles;
  overrides?: TimePickerOverrides;
  size?: Size;
  clearable?: boolean;
};
