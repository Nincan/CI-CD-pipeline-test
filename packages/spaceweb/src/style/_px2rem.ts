/**
 * @author Ivan Torres
 */

import { ThemeContext } from '../types';

const isPercent = /[0-9]+(?:\.[0-9]+)?%/;
const BROWSER_DEFAULT_FONT_SIZE = '16px';

/**
 * Translates length from pixels to rems units (based on theme `htmlFontSize`)
 */
export default ({ theme }: ThemeContext, pixels: number | string): string => {
  const htmlFontSize = theme?.htmlFontSize || BROWSER_DEFAULT_FONT_SIZE;
  const fontPixels = isPercent.test(htmlFontSize) ? `${(parseFloat(htmlFontSize) / 100) * 16}px` : htmlFontSize;

  return `${(typeof pixels === 'string' ? parseInt(pixels, 10) : pixels) / parseInt(fontPixels, 10)}rem`;
};
