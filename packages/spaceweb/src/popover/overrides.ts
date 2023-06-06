import { Placement, SharedProps } from './types';
import { StyleFn, Styles } from '../types';
import { getOppositePosition, splitPlacement } from './utils';
import { ARROW_WIDTH } from './constants';
import { borderRadius } from '../helpers/longHandHelpers';

const arrowPositionStyle: StyleFn<SharedProps> = ({ theme }, { $placement = 'bottom' }) => {
  const [primaryPos] = splitPlacement($placement);
  if (primaryPos === 'top') return { transform: 'rotate(135deg)' };
  else if (primaryPos === 'right') return { transform: 'rotate(225deg)' };
  else if (primaryPos === 'bottom') return { transform: 'rotate(315deg)' };
  else return { transform: 'rotate(45deg)' };
};

export const getPseudoElementPosition = (placement: Placement, popoverMargin: number) => {
  const [primaryPos] = splitPlacement(placement),
    oppositePos = getOppositePosition(primaryPos);
  const isPositionedVertically = primaryPos === 'top' || primaryPos === 'bottom';

  const fullSpaceDimension = isPositionedVertically ? 'width' : 'height',
    marginDimension = isPositionedVertically ? 'height' : 'width',
    zeroOffset = isPositionedVertically ? 'left' : 'top';
  return {
    [fullSpaceDimension]: '100%',
    [marginDimension]: `${popoverMargin}px`,
    [zeroOffset]: 0,
    [oppositePos]: `${-1 * popoverMargin}px`,
  };
};
export const getBodyStyles: StyleFn = (
  { theme },
  { $placement = 'bottom', $popoverMargin = 0, $showArrow, ...rest }
) => ({
  backgroundColor: theme.spr.popup,
  color: theme.spr.text01,
  boxShadow: 'none',
  ...borderRadius(theme.popover.borderRadius),
  '::before': {
    content: '" "',
    position: 'absolute',
    ...getPseudoElementPosition($placement, $showArrow ? $popoverMargin + ARROW_WIDTH : $popoverMargin),
  },
});

export const arrowStyles: Styles = [
  utils => {
    const { theme } = utils;
    return {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      zIndex: 1, // to hide border of inner container
      borderTopWidth: theme.borderWidth.default,
      borderTopStyle: 'solid',
      borderTopColor: theme.spr.popupBorder,
      borderRightWidth: theme.borderWidth.default,
      borderRightStyle: 'solid',
      borderRightColor: theme.spr.popupBorder,
    };
  },
  arrowPositionStyle,
];

export const getInnerStyles: Styles = [
  'border-solid border-1 spr-popup-border spr-shadow-02 spr-text-01 spr-popup',
  ({ theme }) => ({
    ...borderRadius(theme.popover.borderRadius),
    fontFamily: theme.fontFamily.sans,
  }),
];
