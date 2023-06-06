import _ from 'lodash';
import path from 'path';
import postjss from 'postcss-js';
import CleanCSS from 'clean-css';
import postcss from 'postcss';
import { execSync } from 'child_process';

import { ThemeConfig, ThemeFileInfo } from './types';
import { cleanDirectory, exists, getAbsPath, load, stop, readFile, getRootDir, writeFile } from './utils/files';
import * as colors from '../../../../utils/colors';
import { getCorePlugins, getRequiredPluginsFromTheme } from './tailwindPlugins/getCorePlugins';
import resetVariants from './tailwindPlugins/resetVariants';
import { convertTokensToTheme } from './utils/convertTokensToTheme';
import {
  removeDotFromKeys,
  removeFunctionQuotes,
  replaceCssFloat,
  replaceShorthandWithFunctionCall,
  unEscapeKeys,
} from './utils/common';
import { createCommonThemeFiles } from './utils/createCommonThemeFiles';
import { getCssContentFromConfig } from './utils/getCssContentFromConfig';
import { createThemeFiles } from './utils/createThemeFiles';
import { buildThemeVariables } from './buildThemeVariables';
import emoji from '../../../../utils/emoji';
import fileUtils from '../../../../utils/fileUtils';
import { getResolvedThemeObject } from './utils/getResolvedThemeObject';
import { getThemeObjectForThemeVariables } from './utils/createThemeVariables';

const NORMALIZE_CSS_FILE_PATH = path.join(getRootDir(), 'dist/styles/', 'normalize.css');
const MIN_NORMALIZE_CSS_FILE_PATH = path.join(getRootDir(), 'dist/styles/', 'normalize.min.css');
const GLOBAL_CSS_FILE_PATH = path.join(getRootDir(), 'dist/styles/', 'globals.css');
const MIN_GLOBAL_CSS_FILE_PATH = path.join(getRootDir(), 'dist/styles/', 'globals.min.css');

async function getUtilitiesContent(themeConfig: ThemeConfig, isCommonTheme?: boolean) {
  const { theme } = themeConfig;
  // @ts-ignore
  return getCssContentFromConfig(
    { ...themeConfig, variants: resetVariants },
    isCommonTheme ? [...getCorePlugins(), ...getRequiredPluginsFromTheme(theme)] : getRequiredPluginsFromTheme(theme)
  )
    .then(css => {
      const root = postcss.parse(css || '', { from: undefined });
      const jss = postjss.objectify(root);
      const formatUtilityPipeline = _.flow([
        removeDotFromKeys, // removes dot from className
        unEscapeKeys, // unescape keys
        replaceCssFloat, // replaces cssFloat -> float
        replaceShorthandWithFunctionCall, // replaces shorthand styles with longhand function call, like  {'m-0': {margin: 0}} with  {'m-0': "margin('0')"}
        JSON.stringify, // stringify object to write in the file
        removeFunctionQuotes, // Identify the function calls and remove double quotes around the function, e.g. from 2nd step - { "m-0": "margin('0')" } => { "m-0": margin('0') }
      ]);
      return formatUtilityPipeline(jss);
    })
    .catch(err => {
      console.error(err, err.stack);
    });
}

/**
 *
 * @param themeFileInfo
 * @param subThemeType - light / dark
 * @param isCommonTheme
 */
const buildSubTheme = async (themeFileInfo: ThemeFileInfo, { subThemeType = '', isCommonTheme = false }) => {
  const { input, output } = themeFileInfo;
  const { theme, ...rest }: ThemeConfig = load(getAbsPath(path.join(input, isCommonTheme ? '' : subThemeType))),
    unresolvedTheme = convertTokensToTheme(theme, true);

  const themeObjectContent = JSON.stringify(await getResolvedThemeObject({ theme: unresolvedTheme, ...rest }));
  const utilitiesContent = await getUtilitiesContent({ theme: unresolvedTheme, ...rest }, isCommonTheme);
  if (isCommonTheme) {
    await createCommonThemeFiles(themeObjectContent, utilitiesContent, output);
  } else {
    await createThemeFiles(themeObjectContent, utilitiesContent, path.join(output, subThemeType));
  }
};

export const buildTheme = async (themeFileInfo: ThemeFileInfo, { isCommonTheme = false } = {}) => {
  const normalizeCss = readFile(NORMALIZE_CSS_FILE_PATH);
  const globalsCss = readFile(GLOBAL_CSS_FILE_PATH);
  writeFile(MIN_NORMALIZE_CSS_FILE_PATH, new CleanCSS().minify(normalizeCss).styles);
  writeFile(MIN_GLOBAL_CSS_FILE_PATH, new CleanCSS().minify(globalsCss).styles);

  const { input, output, name } = themeFileInfo;
  cleanDirectory(getAbsPath(output));
  fileUtils.log(colors.info(emoji.hourglass, `Building ${name} theme`));
  if (!exists(getAbsPath(input))) {
    stop(colors.error(colors.file(input), 'does not exist.'));
  }
  if (isCommonTheme) {
    await buildSubTheme(themeFileInfo, { isCommonTheme });
  } else {
    await buildSubTheme(themeFileInfo, { isCommonTheme, subThemeType: 'light' });
    await buildSubTheme(themeFileInfo, { isCommonTheme, subThemeType: 'dark' });

    const themeObjects = await getThemeObjectForThemeVariables(themeFileInfo);
    await buildThemeVariables(themeFileInfo, themeObjects);
  }
  execSync(`git add ${getAbsPath(output)}`);
  fileUtils.log(colors.file(emoji.disk, `${name} theme built and saved successfully to ${output}`));
};
