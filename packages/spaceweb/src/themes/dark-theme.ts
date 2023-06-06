/**
 * @author Yash Soni
 * @author Ivan Torres
 */

/* eslint import/prefer-default-export: 0 */

import { createTheme, DarkTheme as BaseuiTheme, darkThemePrimitives as primitives } from 'baseui';
import { Theme } from 'baseui/theme';

import { sharedPrimitives } from './shared';

export const DarkTheme: Theme = {
  ...createTheme({ ...primitives, ...sharedPrimitives }),
  name: 'dark',
  colors: BaseuiTheme.colors,
};
