import { TailwindPlugin, ThemeConfig } from '../types';
import resolveConfig from 'tailwindcss/lib/util/resolveConfig';
import postcss from 'postcss';
import runTailwindPlugins from '../tailwindPlugins/runTailwindPlugins';

export async function getCssContentFromConfig(themeConfig: ThemeConfig, plugins: TailwindPlugin[] = []) {
  const { name, htmlFontSize, theme, ...rest } = themeConfig;
  const utilitiesTailwindConfig = resolveConfig([
    {
      name,
      htmlFontSize,
      // tailwind adds this prefix to all utility classes
      prefix: '',
      // tailwind separates group-hover/focus selectors with separator
      separator: ':',
      // targeted browsers/system
      target: 'relaxed',
      theme,
      ...rest,
    },
  ]);
  // @ts-ignore
  return postcss([runTailwindPlugins(utilitiesTailwindConfig, plugins)])
    .process('@tailwind utilities;', { from: undefined })
    .then(result => result.css)
    .catch(err => {
      console.error(err, err.stack);
    });
}
