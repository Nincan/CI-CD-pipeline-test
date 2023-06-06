import getDayStateCode from 'baseui/datepicker/utils/day-state';
import dateFnsAdapter from 'baseui/datepicker/utils/date-fns-adapter';

import { styled } from '../style';
import { SharedStyleProps } from './types';
import { StyleFn, Styles } from '../types';

export const StyledInputWrapper = styled('div');

const getEdgeDayBeforeStyle = (code: string, firstChild: boolean, peekNextMonth: boolean) => {
  const firstChildStyle = firstChild ? { content: 'none' } : {};
  const lastChildStyle = firstChild ? {} : { content: 'none' };
  const pseudoSelectedStyle = firstChild
    ? {
        borderLeftWidth: '2px',
        borderTopLeftRadius: '100%',
        borderBottomLeftRadius: '100%',
      }
    : {
        borderRightWidth: '2px',
        borderTopRightRadius: '100%',
        borderBottomRightRadius: '100%',
      };
  // See the baseui/datepicker/utils/day-state.js file for the description of all available states
  // rdhsrSsDeDpSrHpHrRrLsMeMoM
  // '0000000000000000'
  return (
    {
      // selected - hasRangeSelected - startDate
      '100111000000000': lastChildStyle,
      // selected - hasRangeSelected - endDate
      '100110100000000': firstChildStyle,
      // selected and hasRangeHighlighted on the right from a selected date
      '100100001010000': lastChildStyle,
      // selected and hasRangeHighlighted on the left from a selected date
      '100100001001000': firstChildStyle,
      // only one date selected in a range
      // '100100000000000': {content: 'none'},
      // pseudo-selected date
      '100010010000000': pseudoSelectedStyle,
      '100010010000100': pseudoSelectedStyle,
      '100010010000010': pseudoSelectedStyle,
      // pseudo-highlighted date
      '100000001100000': pseudoSelectedStyle,
      '100000001100100': pseudoSelectedStyle,
      '100000001100010': pseudoSelectedStyle,
      // highlighted date and hasRangeHighlighted on the right from a selected date
      '101000001010000': firstChildStyle,
      // highlighted date and hasRangeHighlighted on the left from a selected date
      '101000001001000': lastChildStyle,
      // highlighted pseudo-selected date
      '101010010000000': pseudoSelectedStyle,
      // highlighted pseudo-selected date that is first day of the month
      '101010010000100': !peekNextMonth && !firstChild ? { content: 'none' } : pseudoSelectedStyle,
      // highlighted pseudo-selected date that is last day of the month
      '101010010000010': !peekNextMonth && firstChild ? { content: 'none' } : pseudoSelectedStyle,
    }[code] || {}
  );
};

function generateDayStyles(defaultCode: string, defaultStyle) {
  const codeForSM = `${defaultCode.substr(0, 12)}1${defaultCode.substr(12 + 1)}`;
  const codeForEM = `${defaultCode.substr(0, 13)}1${defaultCode.substr(13 + 1)}`;
  return {
    [defaultCode]: defaultStyle,
    [codeForSM]: defaultStyle,
    [codeForEM]: defaultStyle,
  };
}

const getTempRTLAdaptedStyles = (code: string) => {
  const dayStyles = {
    ...generateDayStyles('100110100000000', {
      ':before': {
        right: '0%',
        left: '0%',
      },
    }),
    ...generateDayStyles('100100001001000', {
      ':before': {
        right: '50%',
        left: '0%',
      },
    }),
    ...generateDayStyles('101000001010000', {
      ':before': {
        right: '50%',
        left: '0%',
      },
    }),
    ...generateDayStyles('101110100000000', {
      ':before': {
        right: '50%',
        left: '0%',
      },
    }),
    ...generateDayStyles('101111000000000', {
      ':before': {
        left: '50%',
      },
    }),
    ...generateDayStyles('100111000000000', {
      ':before': {
        left: '50%',
      },
    }),
    ...generateDayStyles('101000001001000', {
      ':before': {
        left: '50%',
      },
    }),
    ...generateDayStyles('100100001010000', {
      ':before': {
        left: '50%',
      },
    }),
  };
  return dayStyles[code] || {};
};

export const getDayStyles: (todaySOD: any) => Styles = (todaySOD: any) => [
  'text-12 leading-8 w-9',
  ({ theme, px2rem }, props: SharedStyleProps & { $hasDateLabel: boolean; $month: number }) => {
    const {
      $isHighlighted,
      $hasRangeHighlighted,
      $date,
      $selected,
      $isHovered,
      $range,
      $outsideMonthWithinRange,
      $startOfMonth,
      $endOfMonth,
      $hasDateLabel,
      $month,
    } = props;
    const code = getDayStateCode(props as any);
    const $outsideMonth = new Date($date).getMonth() !== $month;
    let backgroundColor = 'transparent';
    if ($selected) {
      backgroundColor = theme.spr.ui04;
    } else if (props.$pseudoSelected && $isHighlighted) {
      backgroundColor = theme.spr.ui03;
    } else if ($isHovered || $isHighlighted || props.$pseudoHighlighted) {
      backgroundColor = theme.spr.ui05;
    }

    return {
      height: $hasDateLabel ? px2rem('60px') : px2rem('36px'),
      paddingLeft: px2rem('6px'),
      paddingRight: px2rem('6px'),
      ':after': {
        borderTopWidth: '0px',
        borderBottomWidth: '0px',
        borderLeftWidth: '0px',
        borderRightWidth: '0px',
        ...($isHighlighted &&
          !$selected &&
          !$isHovered &&
          !$hasRangeHighlighted && {
            backgroundColor: 'transparent',
          }),
        backgroundColor,
        height: '100%',
        top: 0,
      },
      ':before': {
        borderTopWidth: '0px',
        borderBottomWidth: '0px',
        borderLeftWidth: '0px',
        borderRightWidth: '0px',
        ...($outsideMonthWithinRange ? { content: '' } : {}),
        ...($startOfMonth
          ? {
              borderTopLeftRadius: '100%',
              borderBottomLeftRadius: '100%',
            }
          : {}),
        ...($endOfMonth
          ? {
              borderTopRightRadius: '100%',
              borderBottomRightRadius: '100%',
            }
          : {}),
        ...($outsideMonth ? { backgroundColor: 'transparent' } : {}),
        // remove once https://github.com/uber/baseweb/pull/5269 this is merged
        ...(getTempRTLAdaptedStyles(code)[':before'] || {}),
      },
      ':first-child': {
        ...($range
          ? {
              ':before': {
                // @ts-ignore
                ...getEdgeDayBeforeStyle(code, true, props.$peekNextMonth),
              },
            }
          : {}),
      },
      ':last-child': {
        ...($range
          ? {
              ':before': {
                // @ts-ignore
                ...getEdgeDayBeforeStyle(code, false, props.$peekNextMonth),
              },
            }
          : {}),
      },
      ...(dateFnsAdapter.isEqual($date, todaySOD) &&
        !$selected && {
          color: theme.spr.text04,
        }),
      ...($outsideMonth && { color: $selected ? theme.spr.text05 : theme.spr.text03 }),
    };
  },
];

export const StyledFooter = styled('div', 'flex px-4 py-3');

export const StyledFooterBeforeEnhancer = styled('div', 'flex-none');

export const getCalendarContainerStyles: StyleFn<SharedStyleProps> = ({ px2rem }) => ({
  paddingTop: px2rem('10px'),
  paddingBottom: px2rem('12px'),
  paddingRight: px2rem('16px'),
  paddingLeft: px2rem('16px'),
});
