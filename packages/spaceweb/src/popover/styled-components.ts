import { ARROW_SIZE } from './constants';

export { StyledInner, StyledArrow, StyledBody, StyledPadding } from 'baseui/popover';
import styled from '../style/styled';

export const StyledArrowTriangle = styled('div', ({ theme }) => ({
  boxSizing: 'border-box',
  borderWidth: `${ARROW_SIZE}px`,
  borderTopColor: theme.spr.popup,
  borderRightColor: theme.spr.popup,
  borderLeftColor: theme.borderColor.transparent,
  borderBottomColor: theme.borderColor.transparent,
  borderStyle: 'solid',
}));
