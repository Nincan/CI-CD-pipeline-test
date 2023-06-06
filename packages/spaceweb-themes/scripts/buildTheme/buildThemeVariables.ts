import path from 'path';
import CleanCSS from 'clean-css';

import { createThemeVariables } from './utils/createThemeVariables';
import { getAbsPath, prettifyCSS, writeFile } from './utils/files';
import { ThemeFileInfo } from './types';
import * as colors from '../../../../utils/colors';
import emoji from '../../../../utils/emoji';
import fileUtils from '../../../../utils/fileUtils';

// colorScheme helps user agent styles to apply correct styles. e.g. autofill
const LIGHT_COLOR_SCHEME = 'color-scheme: light;';
const DARK_COLOR_SCHEME = 'color-scheme: dark;';

export async function buildThemeVariables(themeFileInfo: ThemeFileInfo, { lightThemeObject, darkThemeObject }) {
  fileUtils.log(colors.info(emoji.hourglass, 'Building Theme Variables'));
  const { output } = themeFileInfo;
  const lightThemeVariables = createThemeVariables(lightThemeObject);
  const darkThemeVariables = createThemeVariables(darkThemeObject);

  const fileContent = `
  /**
  * SPACEWEB-GENERATED-CSS-FILE
  * DO NOT EDIT THIS FILE DIRECTLY, CHECK spaceweb-themes/scripts/buildTheme/buildThemeVariables
  */
  
  .${lightThemeObject.name} {
    ${LIGHT_COLOR_SCHEME}
    ${lightThemeVariables}
  }
  .${darkThemeObject.name} {
    ${DARK_COLOR_SCHEME}
    ${darkThemeVariables}
  }
  `;
  const minifiedFileContent = new CleanCSS().minify(fileContent).styles;

  writeFile(getAbsPath(path.join(output, 'themeVars.css')), await prettifyCSS(fileContent));
  writeFile(getAbsPath(path.join(output, 'themeVars.min.css')), minifiedFileContent);

  fileUtils.log(
    colors.file(emoji.disk, `CSS Utilities built and saved successfully to ${path.join(output, 'themeVars.css')}`)
  );
}