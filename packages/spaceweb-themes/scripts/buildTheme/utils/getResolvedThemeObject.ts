import _ from 'lodash';
import resolveConfig from 'tailwindcss/lib/util/resolveConfig';
import resetVariants from '../tailwindPlugins/resetVariants';
import { convertKeysToCamelCase, removeDotFromKeys } from './common';
import { ThemeConfig } from '../types';

// These keys are part of tailwind config to generate utility classes. Not required in themeObject
const KEYS_TO_OMIT_FROM_THEME = [
  '__tokens',
  'tokens',
  'lineClamp',
  'backgroundPosition',
  'backgroundSize',
  'container',
  'cursor',
  'fill',
  'flex',
  'flexGrow',
  'flexShrink',
  'listStyleType',
  'objectPosition',
  'opacity',
  'order',
  'outline',
  'strokeWidth',
  'zIndex',
  'gridTemplateColumns',
  'gridColumn',
  'gridColumnStart',
  'gridColumnEnd',
  'gridTemplateRows',
  'gridRow',
  'gridRowStart',
  'gridRowEnd',
  'transformOrigin',
  'scale',
  'rotate',
  'skew',
  'transitionProperty',
  'transitionDuration',
  'colors',
  'transitionDelay',
  'spacing',
  'backgroundColor',
  'height',
  'width',
  'fontVariantNumeric',
];

export async function getResolvedThemeObject(themeConfig: ThemeConfig) {
  const { name, htmlFontSize, theme, density, ...rest } = themeConfig;
  const themeTailwindConfig = resolveConfig([
    {
      name,
      htmlFontSize,
      density,
      // tailwind adds this prefix to all utility classes
      prefix: '',
      // targeted browsers/system
      target: 'relaxed',
      theme,
      variants: resetVariants,
      ...rest,
    },
  ]);
  return {
    name,
    htmlFontSize,
    density,
    ..._.flow([removeDotFromKeys, convertKeysToCamelCase])(_.omit(themeTailwindConfig.theme, KEYS_TO_OMIT_FROM_THEME)),
  };
}
