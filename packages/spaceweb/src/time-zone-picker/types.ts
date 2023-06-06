import React from 'react';
import { Intent, Styles } from '../types';
import { SharedProps, Size, Option } from '../select/types';

import { Override } from '../overrides';

export type TimezonePickerOverrides = {
  Select?: Override<SharedProps>;
};

export type Timezone = {
  id: string;
  label: React.ReactNode;
  offset: number;
};

export type TimezonePickerProps = {
  date?: Date;
  disabled?: boolean;
  mapLabels?: (args: Option) => React.ReactNode;
  onChange?: (value: Timezone) => any;
  timezoneOptions?: Timezone[];
  value?: string;
  intent?: Intent;
  className?: Styles;
  style?: Styles;
  overrides?: TimezonePickerOverrides;
  size?: Size;
  clearable?: boolean;
  placeholder?: string;
};
