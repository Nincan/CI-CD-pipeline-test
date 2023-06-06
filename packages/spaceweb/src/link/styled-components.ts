import styled, { StyledComponent } from '../style/styled';
import { buttonResetStyles } from '../base-button';
import { StyleObject, Styles } from '../types';

const focusVisibleStyles: Styles = [
  'focus-visible:rounded-2 focus-visible:underline',
  'focus-visible:outline-01 focus-visible:outline-offset-1',
];

const linkStyles: Styles = [
  'cursor-pointer spr-link no-underline hover:underline',
  ({ theme }): StyleObject => ({
    fontSize: theme.link.fontSize,
  }),
  focusVisibleStyles,
];

export const StyledLink: StyledComponent = styled('a', linkStyles);

export const StyledButtonLink: StyledComponent = styled('button', buttonResetStyles, linkStyles);
