import path from 'path';
import { prettify, getRootDir, mkdir, readFile, writeFile, getAbsPath } from './files';
import { COMMON_THEME } from '../../../config/filePaths';
import { runTSC } from './runTSC';

const THEME_UTILITIES_TEMPLATE_NAME_MATCHER = new RegExp('%%THEME_UTILITIES%%', 'g');
const COMMON_UTILITIES_PATH_TEMPLATE_NAME_MATCHER = new RegExp('%%COMMON_UTILITIES_PATH%%', 'g');
const utilityTemplatePath = path.join(getRootDir(), 'scripts/buildTheme/templates/space-utilities.txt');
const utilityTemplate = readFile(utilityTemplatePath);

const THEME_TEMPLATE_NAME_MATCHER = new RegExp('%%THEME%%', 'g');
const COMMON_THEME_PATH_TEMPLATE_NAME_MATCHER = new RegExp('%%COMMON_THEME_PATH%%', 'g');
const themeTemplatePath = path.join(getRootDir(), 'scripts/buildTheme/templates/space-theme.txt');
const themeTemplate = readFile(themeTemplatePath);

const themeIndexTemplatePath = path.join(getRootDir(), 'scripts/buildTheme/templates/space-theme-index.txt');
const themeIndexTemplate = readFile(themeIndexTemplatePath);

export const createThemeFiles = async (theme: string, utilities: string, destPath: string): Promise<void> => {
  mkdir(getAbsPath(destPath));
  const relativeCommonThemeDirPath = path.relative(getAbsPath(destPath), getAbsPath(COMMON_THEME.output));

  const utilitiesContent = utilityTemplate
    .replace(THEME_UTILITIES_TEMPLATE_NAME_MATCHER, utilities)
    .replace(COMMON_UTILITIES_PATH_TEMPLATE_NAME_MATCHER, `${relativeCommonThemeDirPath}/utilities`);
  writeFile(getAbsPath(`${destPath}/utilities.ts`), await prettify(utilitiesContent));

  const themeFileContent = themeTemplate
    .replace(THEME_TEMPLATE_NAME_MATCHER, theme)
    .replace(COMMON_THEME_PATH_TEMPLATE_NAME_MATCHER, `${relativeCommonThemeDirPath}/theme`);
  writeFile(getAbsPath(`${destPath}/theme.ts`), await prettify(themeFileContent));

  const indexFileContent = themeIndexTemplate;
  writeFile(getAbsPath(`${destPath}/index.ts`), await prettify(indexFileContent));

  runTSC(`${destPath}/utilities.ts`, `${destPath}/theme.ts`, `${destPath}/index.ts`);
};
