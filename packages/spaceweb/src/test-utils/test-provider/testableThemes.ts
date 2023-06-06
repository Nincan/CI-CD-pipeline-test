import baseSprLight from '@sprinklr/spaceweb-themes/space/light';
import baseSprDark from '@sprinklr/spaceweb-themes/space/dark';
import baseHyperspaceLight from '@sprinklr/spaceweb-themes/hyperspace/light';
import baseHyperspaceDark from '@sprinklr/spaceweb-themes/hyperspace/dark';

import { convertToTestableTheme } from './helpers';
import { ThemeModule } from '@sprinklr/spaceweb-themes/types';

export const sprLight = convertToTestableTheme(baseSprLight) as unknown as ThemeModule;
export const sprDark = convertToTestableTheme(baseSprDark) as unknown as ThemeModule;
export const hyperspaceLight = convertToTestableTheme(baseHyperspaceLight) as unknown as ThemeModule;
export const hyperspaceDark = convertToTestableTheme(baseHyperspaceDark) as unknown as ThemeModule;
