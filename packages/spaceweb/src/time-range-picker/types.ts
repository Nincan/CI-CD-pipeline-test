import { DatepickerOverrides, FormatString, StatelessDatePickerProps } from '../date-picker';
import { Override } from '../overrides';
import { Option } from 'baseui/select';
import { BaseSelectProps } from '../select/types';

export type { FormatString } from '../date-picker';

export type TimeRangePreset = {
  id: string;
  label: string;
  getTimeRangeLimits?: (timezone?: string) => [Date, Date] | [];
};

export type TimezonePickerProps = {
  setTimezone: React.Dispatch<string>;
  timezone: string;
  overrides?: BaseSelectProps['overrides'];
};

export type TimeRangeListProps = {
  timeRangePresets: TimeRangePreset[];
  onChange: ({ date, preset }: any) => void;
  timeRange?: Date[];
  preset: string | undefined;
  overrides?: {
    Menu?: Override<any>;
    MenuItem?: Override<any>;
  };
};

export type TimeRangePickerOverrides = DatepickerOverrides<Record<string, any>> & {
  TimeRangeList?: Override<TimeRangeListProps & Record<string, any>>;
  Header?: Override<Record<string, any>>;
  HeaderBeforeEnhancer?: Override<Record<string, any>>;
  FooterBeforeEnhancer?: Override<Record<string, any>>;
  TimezonePicker?: Override<Record<string, any>>;
  Calendar?: Override<Record<string, any>>;
};

export type TimeRangePickerValue = {
  // value is array of date when custom range is selected else it will be string.
  value: Date[] | string;
  date: Date[];
  preset: string;
  timezone?: string;
};

type Preset = string;
export type SizeVariant = 'default' | 'compact' | 'iconButton';

export type FormatSummaryValueOptions = {
  date: Date[];
  presetId: string;
  presetLabel: string;
  timezone?: string;
  formatString?: string;
  showFullDateInSummary?: boolean;
  showTimezoneInSummary?: boolean;
  adapter?: any;
  locale?: any;
  hidePresetLabel?: boolean;
  displayVariant?: SizeVariant;
};

export type TimeRangePickerProps = Omit<
  StatelessDatePickerProps,
  'value' | 'overrides' | 'onChange' | 'isOpen' | 'onFocus' | 'onBlur' | 'range' | 'formatDisplayValue'
> & {
  /**
   * @deprecated Please prevent passing preset to value. Instead, pass it in the prop `preset`.
   *   This will be removed in future major releases.
   */
  value?: Preset | Date[];
  preset?: Preset;
  timeRangePresets?: TimeRangePreset[];
  onSubmit: (timeRangePickerValue: TimeRangePickerValue) => void;
  overrides?: TimeRangePickerOverrides;
  mapLabels?: (args: Option) => React.ReactNode;
  onChange?: (timeRangePickerValue: TimeRangePickerValue) => any;
  showTimezoneInSummary?: boolean;
  onClear?: () => void;
  showFullDateInSummary?: boolean;
  startOpen?: boolean;
  disableTimezone?: boolean;
  displayVariant?: SizeVariant;
  formatDisplayValue?: (
    date: Date | undefined | null | Array<Date | undefined | null>,
    formatString: string,
    options: FormatSummaryValueOptions
  ) => string;
};

export type RangeSelectorContainerProps = Omit<
  TimeRangePickerProps,
  'onFocus' | 'onBlur' | 'timeRangePresets' | 'onSubmit' | 'formatDisplayValue' | 'onClear' | 'timezone'
> & {
  timeRangePresets: TimeRangePreset[];
  onSubmit: ({ timeRange, preset, timezone }: { timeRange: Date[]; preset?: string; timezone?: string }) => void;
  onClose: () => void;
  timeRange: Date[];
  timezone: string;
  formatString: FormatString;
};

export type RangeSelectorProps = Omit<
  RangeSelectorContainerProps,
  'onSubmit' | 'onClose' | 'onChage' | 'formatDate' | 'formatDisplayValue'
> & {
  timeRange?: Date[];
  onChange: ({ date, preset }: any) => void;
  preset: string | undefined;
};
