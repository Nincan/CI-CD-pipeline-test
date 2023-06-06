import * as React from 'react';
import DateHelpers from 'baseui/datepicker/utils/date-helpers';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import InputMask from 'react-input-mask';
import { borderColor, borderRadius } from '../helpers/longHandHelpers';

import { Input } from '../input';

import { isDayInRange } from './utils';
import { Box } from '../box';
import { getComponentSizeTheme, getDefaultSize } from '../helpers/themeHelpers';
import { useTheme } from '../theme';

const COMMON_STYLE = [
  'px-0 py-0 rounded-2 focus:spr-ui-04 focus:spr-text-05 text-center',
  ({ theme, px2rem }) => ({
    '::selection': {
      backgroundColor: 'transparent',
    },
    ':focus': {
      caretColor: theme.spr.ui01,
    },
    fontVariantNumeric: 'tabular-nums',
  }),
];
const DATE_CLASSNAME = [
  'text-center flex-none',
  {
    maxWidth: '1.9rem',
  },
];
const DATE_OVERRIDES = {
  InputContainer: {
    style: 'border-0',
  },
  Input: {
    style: COMMON_STYLE,
    props: {
      'data-testid': 'date-spin-input',
    },
  },
};

const MONTH_CLASSNAME = [
  'text-center flex-none',
  {
    maxWidth: '2.7rem',
  },
];
const MONTH_OVERRIDES = {
  InputContainer: {
    style: 'border-0',
  },
  Input: {
    style: COMMON_STYLE,
    props: {
      'data-testid': 'month-spin-input',
    },
  },
};

const YEAR_CLASSNAME = [
  'text-center flex-none',
  {
    maxWidth: '3.7rem',
  },
];
const YEAR_OVERRIDES = {
  InputContainer: {
    style: 'border-0',
  },
  Input: {
    style: COMMON_STYLE,
    props: {
      'data-testid': 'year-spin-input',
    },
  },
};

const MONTH_LABELS = [
  //TODO: Should we use localization here
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const MIN_YEAR = 1900;
const MAX_YEAR = 2100;

export const isDateValid = value => value > 0 && value <= 31;

type DateInputProps = {
  locale?: any;
  dateHelpers: DateHelpers<Date>;
  onChange: (date: Date) => void;
  date?: Date | null;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
};

export const DateInput = React.memo(
  // eslint-disable-next-line max-statements
  ({ dateHelpers, date, onChange, maxDate, minDate, disabled }: DateInputProps): JSX.Element => {
    const { theme } = useTheme();
    const [day, setDay] = React.useState(() => (date ? dateHelpers.formatDate(date, 'dd') : ''));
    const [year, setYear] = React.useState(() => (date ? dateHelpers.getYear(date) : ''));
    const [error, setError] = React.useState(false);

    const minAllowedDate = 1;
    const maxAllowedDate = getDaysInMonth(date || new Date());
    const minYear = minDate ? dateHelpers.getYear(minDate) : MIN_YEAR;
    const maxYear = maxDate ? dateHelpers.getYear(maxDate) : MAX_YEAR;

    React.useEffect(() => {
      if (isDayInRange(date, { minDate, maxDate, dateHelpers })) {
        setError(false);
      } else {
        setError(true);
      }
      setDay(date ? dateHelpers.formatDate(date, 'dd') : '');
      setYear(date ? dateHelpers.getYear(date) : '');
    }, [date, minDate, maxDate, dateHelpers]);

    const updateDate = (nextDate: number): void => {
      if (isDateValid(nextDate)) {
        const newDate = dateHelpers.setDate(date || new Date(), nextDate);
        onChange(newDate);
      } else {
        setDay(date ? dateHelpers.formatDate(date, 'dd') : '');
      }
    };

    const dateBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
      setDay(date ? dateHelpers.formatDate(date, 'dd') : '');
    };

    const dayChange = (event): void => {
      setDay(event.target.value);
      if (event.target.value >= minAllowedDate && event.target.value <= maxAllowedDate) {
        updateDate(event.target.value);
      }
    };

    const dateKeyDown = (event): void => {
      const { key } = event;
      const _value = parseInt(event.target.value, 10);

      if (key === 'ArrowDown' || key === 'ArrowUp') {
        event.preventDefault(); //to prevent arrow keys to change pointer in input field

        let nextDate = (_value || 0) + (key === 'ArrowDown' ? -1 : 1);
        if (nextDate === minAllowedDate - 1) {
          nextDate = maxAllowedDate;
        } else if (nextDate === maxAllowedDate + 1) {
          nextDate = minAllowedDate;
        }
        updateDate(nextDate);
      }
    };

    const changeMonth = (sign: -1 | 1) => {
      const currentMonthIndex = dateHelpers.getMonth(date || new Date());
      const nextMonth = currentMonthIndex + sign;
      const newDate = dateHelpers.setMonth(date || new Date(), (nextMonth + MONTH_LABELS.length) % MONTH_LABELS.length);
      onChange(newDate);
    };

    const monthKeyDown = (event): void => {
      const { key } = event;

      if (key === 'ArrowDown' || key === 'ArrowUp') {
        event.preventDefault(); //to prevent arrow keys to change pointer in input field
        changeMonth(key === 'ArrowDown' ? -1 : 1);
      } else {
        const monthLabel = event.key.toLowerCase();
        const currentMonthIndex = dateHelpers.getMonth(date || new Date());
        let monthIndex = MONTH_LABELS.findIndex(
          (month, index) => index > currentMonthIndex && monthLabel === month[0].toLowerCase()
        );

        if (monthIndex === -1) {
          monthIndex = MONTH_LABELS.findIndex(month => monthLabel === month[0].toLowerCase());
        }
        if (monthIndex === -1 || monthIndex === currentMonthIndex) {
          return;
        }
        const newDate = dateHelpers.setMonth(date || new Date(), monthIndex);
        onChange(newDate);
      }
    };

    // year
    const updateYear = (nextYear: number): void => {
      if (nextYear >= minYear && nextYear <= maxYear) {
        const newDate = dateHelpers.setYear(date || new Date(), nextYear);
        onChange(newDate);
      } else {
        setYear(date ? dateHelpers.getYear(date) : '');
      }
    };

    const yearBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
      setYear(date ? dateHelpers.formatDate(date, 'yyyy') : '');
    };

    const yearChange = (event): void => {
      setYear(event.target.value);
      if (event.target.value >= minYear && event.target.value <= maxYear) {
        updateYear(event.target.value);
      }
    };

    const yearKeyDown = (event): void => {
      const { key } = event;
      const _value = parseInt(event.target.value, 10);

      if (key === 'ArrowDown' || key === 'ArrowUp') {
        event.preventDefault(); //to prevent arrow keys to change pointer in input field
        let nextYear = (_value || minYear) + (key === 'ArrowDown' ? -1 : 1);
        if (nextYear === minYear - 1) {
          nextYear = maxYear;
        } else if (nextYear === maxYear + 1) {
          nextYear = minYear;
        }
        updateYear(nextYear);
      }
    };

    const month = date ? dateHelpers.formatDate(date, 'MMM') : '';
    const inputSizeTheme = getComponentSizeTheme(theme, 'input', 'sm', getDefaultSize(theme));

    return (
      <Box
        data-testid="date-input"
        className={[
          'px-3 flex items-center border-1 border-solid border-box',
          {
            ...borderColor(error ? theme.spr.supportError : theme.spr.ui03),
            ...borderRadius(inputSizeTheme.borderRadius ?? theme.input.borderRadius),
            paddingLeft: inputSizeTheme.paddingX,
            paddingRight: inputSizeTheme.paddingX,
            paddingTop: inputSizeTheme.paddingY,
            paddingBottom: inputSizeTheme.paddingY,
            ...(disabled ? { backgroundColor: theme.spr.ui02 } : { backgroundColor: theme.spr.ui01 }),
          },
        ]}
      >
        <InputMask
          onBlur={dateBlur}
          onKeyDown={dateKeyDown}
          mask="99"
          value={day}
          onChange={dayChange}
          maskChar="_"
          disabled={disabled}
        >
          {props => (
            <Input
              {...props}
              className={DATE_CLASSNAME}
              overrides={DATE_OVERRIDES}
              placeholder="dd"
              size="sm"
              disabled={disabled}
            />
          )}
        </InputMask>

        <InputMask value={month} onKeyDown={monthKeyDown} mask="aaa" maskChar="_" disabled={disabled}>
          {props => (
            <Input
              {...props}
              className={MONTH_CLASSNAME}
              overrides={MONTH_OVERRIDES}
              placeholder="MM"
              size="sm"
              disabled={disabled}
            />
          )}
        </InputMask>

        <InputMask
          onBlur={yearBlur}
          onKeyDown={yearKeyDown}
          mask="9999"
          value={year}
          onChange={yearChange}
          maskChar="_"
          disabled={disabled}
        >
          {props => (
            <Input
              {...props}
              className={YEAR_CLASSNAME}
              overrides={YEAR_OVERRIDES}
              placeholder="yyyy"
              size="sm"
              disabled={disabled}
            />
          )}
        </InputMask>
      </Box>
    );
  }
);
