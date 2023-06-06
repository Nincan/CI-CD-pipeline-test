import { PropsWithChildren, ReactElement, useState, useMemo, useCallback, KeyboardEvent } from 'react';
import { Calendar as BaseCalendar } from 'baseui/datepicker';
import dateFnsAdapter from 'baseui/datepicker/utils/date-fns-adapter';
import DateHelpers from 'baseui/datepicker/utils/date-helpers';
import { DENSITY } from 'baseui/datepicker/constants';
import _merge from 'lodash/merge';

import ChevronLeft from '../icon/components/chevron-left';
import ChevronRight from '../icon/components/chevron-right';
import { useConvertOverrides } from '../helpers/baseui/useConvertOverrides';
import { StyleObject } from '../types';
import { Popover } from '../popover';
import { Menu, MenuItem } from '../menu';
import { IconButton } from '../button';
import { themeContext, useTheme } from '../theme';
import { DateTimeContainer } from './DateTimeContainer';

import { SharedStyleProps, CalendarProps } from './types';
import withThemeOverride from '../helpers/baseui/withThemeOverride';
import { getDayStyles, getCalendarContainerStyles } from './styled-components';
import { DEFAULT_FORMAT_STRING } from './constants';
import { prepareLocale } from './utils';
import { useIsMobileDevice } from '../hooks/useIsMobileDevice';

const CALENDAR_CUSTOM_THEME = { theme: { input: { borderRadius: '4px', sizeSm: { borderRadius: '4px' } } } };

type MonthYearItem = {
  id: string;
  label: string;
};

type MonthYearSelectMenuType = {
  items: Array<MonthYearItem>;
  onItemSelect: (MonthYearValue: { item: MonthYearItem; event: KeyboardEvent<Element> }) => void;
  initialState: {
    highlightedIndex: number;
    isFocused: boolean;
  };
};

const MonthYearSelectMenu = (props: MonthYearSelectMenuType): ReactElement => {
  const [highlightedIndex, setHighlightedIndex] = useState(props.initialState.highlightedIndex);
  const { onItemSelect } = props;

  const onClick = useCallback(
    ({ item, event, index }: { item: MonthYearItem; event: KeyboardEvent<Element>; index: number }) => {
      onItemSelect({ item, event });
      setHighlightedIndex(index);
    },
    [onItemSelect]
  );

  return (
    <Menu
      className={[
        'overflow-y-scroll',
        {
          maxHeight: '25rem',
        },
      ]}
    >
      {props.items.map((item, index) => (
        <MenuItem
          key={item.id}
          selected={index === highlightedIndex}
          onClick={(event): void => onClick({ item, event, index })}
          role="option"
        >
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

const isHiddenPaginationButton = (direction, order, monthsShown) => {
  if (direction === 'next') {
    return order !== monthsShown - 1;
  }
  return order !== 0;
};

const ArrowButton = ({ $order, monthsShown, direction, ...nextButtonProps }: any): ReactElement => {
  const isHidden = isHiddenPaginationButton(direction, $order, monthsShown);
  const ChevronIcon = direction === 'next' ? ChevronRight : ChevronLeft;
  return (
    <IconButton
      className={[
        'h-6 w-6',
        isHidden ? 'invisible' : 'visible',
        ({ px2rem }) => ({
          minWidth: px2rem(24),
        }),
      ]}
      {...nextButtonProps}
    >
      <ChevronIcon size={8} />
    </IconButton>
  );
};

const Calendar = ({
  overrides,
  adapter = dateFnsAdapter,
  formatString = DEFAULT_FORMAT_STRING,
  weekStartsOn,
  ...props
}: PropsWithChildren<CalendarProps>): ReactElement => {
  const currentTheme = useTheme();
  const isMobileDevice = useIsMobileDevice();
  const { Provider } = themeContext;

  const dateHelpers = useMemo(() => new DateHelpers(adapter), [adapter]);
  const todaySOD = adapter.startOfDay(new Date());
  const { value, onChange, range, timeSelectStart, timeSelectEnd } = props;
  const monthsShown = isMobileDevice ? 1 : props.monthsShown ?? 1;

  const dateFnsLocale = useMemo(() => prepareLocale(props.locale, { weekStartsOn }), [weekStartsOn, props.locale]);

  const setTime = useCallback(
    ({ date, hours, minutes, seconds }: { date?: Date; hours: number; minutes: number; seconds: number }) =>
      dateHelpers.setSeconds(dateHelpers.setMinutes(dateHelpers.setHours(date, hours), minutes), seconds),
    [dateHelpers]
  );

  const handleCalendarDateChange = useCallback(
    ({ date }): void => {
      if (Array.isArray(date)) {
        const nextDate = date;
        // if we have start date previously selected, then copy time from it, same for end date.
        if (props.value?.[0] && nextDate[0] && props.timeSelectStart) {
          nextDate[0] = setTime({
            date: nextDate[0],
            hours: adapter.getHours(props.value[0]),
            minutes: adapter.getMinutes(props.value[0]),
            seconds: adapter.getSeconds(props.value[0]),
          });
        } else if (nextDate[0]) {
          nextDate[0] = adapter.startOfDay(date[0]);
        }

        if (nextDate[1]) {
          nextDate[1] = adapter.endOfDay(date[1]);
        }

        onChange?.({
          date: nextDate,
        });
      } else {
        let nextDate = date;
        if (props.value && date && props.timeSelectStart) {
          nextDate = setTime({
            date: nextDate,
            hours: adapter.getHours(props.value),
            minutes: adapter.getMinutes(props.value),
            seconds: adapter.getSeconds(props.value),
          });
        } else {
          nextDate = adapter.startOfDay(date);
        }
        onChange?.({
          date: nextDate,
        });
      }
    },
    [adapter, onChange, props.value, setTime, props.timeSelectStart]
  );

  const convertedOverrides = useConvertOverrides<SharedStyleProps>(
    {
      MonthYearSelectPopover: {
        // @ts-ignore
        component: Popover,
        props: {
          showArrow: false,
        },
      },
      NextButton: {
        component: nextButtonProps => <ArrowButton monthsShown={monthsShown} direction="next" {...nextButtonProps} />,
      },
      PrevButton: {
        component: nextButtonProps => (
          <ArrowButton monthsShown={monthsShown} direction="previous" {...nextButtonProps} />
        ),
      },
      MonthYearSelectStatefulMenu: {
        // @ts-ignore
        component: MonthYearSelectMenu,
      },
      CalendarContainer: {
        style: getCalendarContainerStyles,
        props: {
          'data-testid': 'calendar-container',
        },
      },
      WeekdayHeader: {
        style: 'text-12 font-normal leading-8 spr-text-01 w-9 h-9',
        props: {
          'data-testid': 'week-day-header',
        },
      },
      MonthHeader: {
        style: ({ theme }): StyleObject => ({
          borderBottomColor: theme.spr.border02,
          borderBottomStyle: 'solid',
          borderBottomWidth: theme.borderWidth.default,
          color: theme.spr.text01,
        }),
      },
      Root: {
        style: ({ theme }): StyleObject => ({
          ...theme.typography.bl3,
        }),
      },
      TimeSelectContainer: {
        props: {
          range,
          adapter,
          timeSelectStart,
          timeSelectEnd,
          value,
          monthsShown,
          onChange,
          overrides,
          locale: dateFnsLocale,
          minDate: props.minDate,
          maxDate: props.maxDate,
        },
        // @ts-ignore
        component: DateTimeContainer,
      },
      Day: {
        style: getDayStyles(todaySOD),
      },
      MonthContainer: {
        style: 'flex-row',
      },
      CalendarHeader: {
        style: 'py-3',
      },
      MonthYearSelectButton: {
        style: 'typography-bs1',
      },
      Week: {
        style: 'mb-1',
      },
    },
    overrides,
    [
      overrides,
      todaySOD,
      monthsShown,
      range,
      timeSelectEnd,
      timeSelectStart,
      dateFnsLocale,
      value,
      adapter,
      formatString,
      props.minDate,
      props.maxDate,
    ]
  );

  const calendarTheme = useMemo(() => _merge({}, currentTheme, CALENDAR_CUSTOM_THEME), [currentTheme]);

  return (
    <Provider value={calendarTheme}>
      <BaseCalendar
        orientation="vertical"
        {...props}
        onChange={handleCalendarDateChange}
        overrides={convertedOverrides}
        timeSelectEnd={false}
        locale={dateFnsLocale}
        monthsShown={monthsShown}
        //@ts-ignore baseweb has type inconsistency in declaration file
        density={DENSITY.high}
      />
    </Provider>
  );
};

export default withThemeOverride(Calendar, theme => ({
  colors: {
    calendarHeaderBackground: theme.spr.ui01,
    calendarHeaderForeground: theme.spr.text01,
    accent: theme.spr.ui04,
    mono400: theme.spr.border02,
    mono300: theme.spr.ui05,
    calendarDayBackgroundSelectedHighlighted: theme.spr.ui04,
    calendarDayForegroundSelected: theme.spr.text05,
    calendarBackground: theme.spr.ui01,
  },
  sizing: {
    scale1000: '36px',
    scale800: '20px',
    scale300: '8px',
    scale200: '6px',
  },
}));
