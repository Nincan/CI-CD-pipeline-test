import { buildTheme } from './buildTheme';
import { COMMON_THEME, HYPERSPACE_THEME, SPACE_THEME } from '../../config/filePaths';
import { buildCssUtils } from './buildCssUtils';

(async () => {
  await buildTheme(COMMON_THEME, { isCommonTheme: true });
  buildTheme(SPACE_THEME);
  await buildTheme(HYPERSPACE_THEME);
  buildCssUtils();
})();
