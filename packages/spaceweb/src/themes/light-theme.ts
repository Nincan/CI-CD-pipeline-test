/**
 * @author Yash Soni
 * @author Ivan Torres
 */

/* eslint import/prefer-default-export: 0 */

import { createTheme, LightTheme as BaseuiTheme, lightThemePrimitives as primitives } from 'baseui';
import { Theme } from 'baseui/theme';

import { sharedPrimitives } from './shared';

export const LightTheme: Theme = {
  ...createTheme({ ...primitives, ...sharedPrimitives }),
  name: 'light',
  colors: BaseuiTheme.colors,
};
