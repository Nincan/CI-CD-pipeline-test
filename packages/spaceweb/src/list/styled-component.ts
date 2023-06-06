import cx from '../classNames';
import { borderRadius } from '../helpers/longHandHelpers';
import { getComponentTheme } from '../helpers/themeHelpers';
import { styled } from '../style';
import { StyleFn, StyleObject } from '../types';

export const LIST_MIN_WIDTH = 150;
export const StyledList = styled(
  'ul',
  // bottom spacing will be added by ListItem
  'box-border spr-ui-01 py-1 px-1 my-0',
  borderRadius('inherit'),
  ({ px2rem }) => ({ minWidth: px2rem(LIST_MIN_WIDTH) }),
  (_, { $showFocusOutline }) => ($showFocusOutline ? 'focus-visible:outline-01' : '')
);

const backgroundColor: StyleFn = ({ theme }, { $button, $selected, $disabled, $highlighted, $isFocusVisible }) => {
  const { hoverBackgroundColor } = getComponentTheme(theme, 'list');
  const styles: StyleObject = { backgroundColor: theme.spr.ui01 };
  if ($button && !$disabled) {
    styles[':hover'] = { backgroundColor: hoverBackgroundColor };

    if ($isFocusVisible) {
      styles[':focus-within'] = { backgroundColor: hoverBackgroundColor };
    }
  }
  if (($selected || $highlighted) && !$disabled) {
    styles.backgroundColor = hoverBackgroundColor;
  }
  return styles;
};

const getListItemCompactStyles = ({ theme }) => {
  if (theme.density === 'COMPACT') return 'py-1 px-2 typography-l2 rounded-4 mb-0.5 last-child:mb-0';
  else return 'py-1.5 px-2 typography-l1 rounded-6 mb-0.5 last-child:mb-0';
};

export const StyledListItem = styled(
  'li',
  getListItemCompactStyles,
  ({ getStyle, theme }, props) =>
    getStyle(
      cx('relative flex justify-start fill-current spr-ui-01', {
        'items-start': props.$alignItems === 'start',
        'items-center': props.$alignItems === 'center',
        'cursor-pointer': props.$button && !props.$disabled,
        'spr-text-03 spr-icon-disable cursor-not-allowed': props.$disabled,
      })
    ),
  backgroundColor,
  'focus-visible:outline-01 focus-visible:-outline-offset-2 focus-visible:rounded-6',
  ({ getStyle, px2rem, theme }, props) => {
    const { selectedEnhancerBackground } = getComponentTheme(theme, 'list');
    return {
      ...(props.$selected && {
        '::before': {
          content: '" "',
          width: px2rem(2),
          backgroundColor: selectedEnhancerBackground,
          ...getStyle('h-full absolute top-0 left-0'),
        },
      }),
    };
  }
);

export const StyledListItemText = styled('div', 'flex-auto flex flex-col');
export const StyledPrimaryText = styled('div', 'typography-l1');
export const StyledSecondaryText = styled('div', 'spr-text-02 typography-l3', ({ px2rem }) => ({
  marginTop: px2rem(2),
}));
export const StyledListItemDivider = styled('li', 'block h-px spr-ui-03 mb-0.5 last-child:mb-0');

export const StyledStartEnhancer = styled('div', 'inline-flex pr-2', ({ getStyle }, props) =>
  getStyle(
    cx({
      'mt-1': props.$alignItems === 'start',
    })
  )
);

export const StyledEndEnhancer = styled('div', 'inline-flex pl-2', ({ getStyle }, props) =>
  getStyle(
    cx({
      'mt-1': props.$alignItems === 'start',
    })
  )
);

export const StyledChildContainer = styled('div', 'flex-auto', ({ theme, px2rem }, props) => ({
  fontWeight: props.$selected ? 700 : 400,
  fontSize: px2rem(13),
}));
