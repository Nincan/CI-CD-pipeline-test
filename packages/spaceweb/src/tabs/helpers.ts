import { StyleObject } from '../types';
import { position } from './types';

export const resetStyles = (): StyleObject => ({
  borderColor: 'transparent',
  outlineStyle: 'none',
});

export const baseTabClasses =
  'spr-text-01 cursor-pointer border-solid border-t-0 border-l-0 border-r-0 border-b-0 hover:spr-text-04 focus-visible:spr-text-04 focus-visible:-outline-offset-2';

export const isVertical = ($position?: position): boolean => $position === 'left' || $position === 'right';
