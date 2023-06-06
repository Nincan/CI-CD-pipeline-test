/**
 * @author Yash Soni
 * @author Ivan Torres
 */

import { Theme } from 'baseui/theme';
import _merge from 'lodash/merge';

import { DarkTheme } from './dark-theme';
import { LightTheme } from './light-theme';
import { withResponsiveTheme } from './responsive-theme';

const SPACEWEB_THEME_VS_BASEUI_THEME: { [theme: string]: Theme } = {
  'space-dark': withResponsiveTheme(DarkTheme),
  'space-light': withResponsiveTheme(LightTheme),
  'hyperspace-dark': withResponsiveTheme(DarkTheme),
  'hyperspace-light': withResponsiveTheme(LightTheme),
};

export default SPACEWEB_THEME_VS_BASEUI_THEME;

export function createTheme<P>(theme: Theme, overrides: P): Theme & P {
  return _merge({}, theme, overrides);
}
