import { styled } from '../style';
import { Styles } from '../types';

export const buttonResetStyles: Styles = [
  'inline-flex items-center justify-center',
  'm-0 p-0 border-0 rounded-0 border-none',
  'cursor-pointer no-underline appearance-none select-none spr-text-01',
  { backgroundColor: 'transparent', fontSize: 'inherit' },
  'focus-visible:outline-01',
];

export const StyledBaseButton = styled('button', ...buttonResetStyles);
