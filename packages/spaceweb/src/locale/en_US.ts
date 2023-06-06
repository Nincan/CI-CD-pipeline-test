import { Locale } from './types';

export const DEFAULT_LOCALE: Locale = {
  colorPicker: {
    resetButtonLabel: 'Reset Color',
  },
  select: {
    noResultsMsg: 'No Results',
    selectAllLabel: 'Select All',
    hideButtonAriaLabel: 'Hide',
    selectPlaceholder: 'Select...',
    clearOptionLabel: 'Unassign',
    selectedValuesPrefix: 'Selected ${values}.',
  },
  asyncSelect: {
    searchingText: 'Searching',
    emptyInputMsg: 'Type to Search',
  },
  calendar: {
    timePickerStartLabel: 'Start Time',
    dateInputStartLabel: 'Start Date',
    timePickerEndLabel: 'End Time',
    dateInputEndLabel: 'End Date',
    calendarButtonAriaLabel: 'Open Calendar',
  },
  datePicker: {
    popoverAriaLabel: 'Select a date',
    timezonePickerLabel: 'Timezone',
    timezonePickerPlaceholder: 'Select a timezone',
  },
  timeRangePicker: {
    today: 'Today',
    yesterday: 'Yesterday',
    lastOneHour: 'Last 1 Hour',
    lastTwelveHour: 'Last 12 Hours',
    lastTwentyFourHour: 'Last 24 Hours',
    thisWeek: 'This Week',
    lastWeek: 'Last Week',
    lastSevenDays: 'Last 7 Days',
    thisMonth: 'This Month',
    lastMonth: 'Last Month',
    lastTwentyEightDays: 'Last 28 Days',
    lastThirtyDays: 'Last 30 Days',
    lastSixtyDays: 'Last 60 Days',
    lastNinetyDays: 'Last 90 Days',
    lastOneTwentyDays: 'Last 120 Days',
    lastOneEightyDays: 'Last 180 Days',
    thisYear: 'This Year',
    lastYear: 'Last Year',
    lastThreeSixtyFiveDays: 'Last 365 Days',
    nextSevenDays: 'Next 7 Days',
    nextFourteenDays: 'Next 14 Days',
    nextMonth: 'Next Month',
    customRange: 'Custom Range',
    headerLabel: 'Date Range',
    timezoneLabel: 'Timezone',
    cancelBtnLabel: 'Cancel',
    saveBtnLabel: 'Save',
    timeSelectStartLabel: 'Start Time',
    timeSelectEndLabel: 'End Time',
    screenReaderMessageInput:
      'Press down arrow key to navigate quick select options and tab key to navigate to calendar. Press the down arrow key to interact with the calendar and select a date. Press the escape button to close the calendar.',
    ariaLabelRange: 'Select a time range.',
    ariaLabel: 'Select a date.',
    selectedDate: 'Selected date is ${date}.',
    selectedDateRange: 'Selected date range is from ${startDate} to ${endDate}.',
    selectSecondDatePrompt: 'Select the second date.',
    timezonePlaceholder: 'Search',
    rangeErrorMsg: 'Please select valid range.',
    presetMenuAriaLabel: 'Select a duration',
    popoverAriaLabel: 'Select a date range',
    maxDateErrorMessage: 'Please select a date earlier than ${maxDate}',
    minDateErrorMessage: 'Please select a date later than ${minDate}',
    minMaxDateErrorMessage: 'Please select a date range between ${minDate} & ${maxDate}',
  },
  phoneInput: {
    countrySelectPlaceholder: 'Search',
    inputAriaLabel: 'Please enter a phone number without the country dial code.',
    flagContainerAriaLabel:
      'Press the enter key to navigate country select dropdown. Press the up or down arrow key to interact with the dropdown and select a country. Press the escape button to close the dropdown.',
  },
  menu: {
    nestedMenuItemAriaLabel:
      'You are currently at an item that opens a nested menu. Press right arrow or spacebar to enter that element and left arrow or escape to return.',
  },
  banner: {
    toggleButtonShowLabel: 'Show',
    toggleButtonHideLabel: 'Hide',
    toggleButtonShowAriaLabel: 'Show Alerts',
    toggleButtonHideAriaLabel: 'Hide Alerts',
  },
  input: {
    clearAriaLabel: 'Clear Value',
  },
  modal: {
    closeAriaLabel: 'Close Modal',
  },
  snackbar: {
    closeAriaLabel: 'Hide Snackbar',
  },
  tag: {
    closeAriaLabel: 'Remove Tag',
  },
  search: {
    searchPlaceholder: 'Search',
  },
  langCode: 'en-US',
};
