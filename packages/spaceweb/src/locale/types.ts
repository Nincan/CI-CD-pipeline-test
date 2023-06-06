import { TimeRangePickerLocale } from '../time-range-picker';
import { SelectLocale } from '../select';
import { AsyncSelectLocale } from '../asyncSelect';
import { PhoneInputLocale } from '../phone-input';
import { DatePickerLocale } from '../date-picker/locale';
import { BannerLocale } from '../banner';
import { ColorPickerLocale } from '../color-picker/locale';

export type Locale = {
  select: SelectLocale;
  colorPicker: ColorPickerLocale;
  asyncSelect: AsyncSelectLocale;
  datePicker: DatePickerLocale;
  timeRangePicker: TimeRangePickerLocale;
  phoneInput: PhoneInputLocale;
  calendar: {
    timePickerStartLabel: string;
    dateInputStartLabel: string;
    timePickerEndLabel: string;
    dateInputEndLabel: string;
    calendarButtonAriaLabel: string;
  };
  menu: {
    nestedMenuItemAriaLabel: string;
  };
  banner: BannerLocale;
  input: {
    clearAriaLabel: string;
  };
  modal: {
    closeAriaLabel: string;
  };
  snackbar: {
    closeAriaLabel: string;
  };
  tag: {
    closeAriaLabel: string;
  };
  search: {
    searchPlaceholder: string;
  };
  langCode: string;
};
