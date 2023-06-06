import { prettify, getAbsPath, mkdir, readFile, writeFile } from './files';
import { runTSC } from './runTSC';

const UTILITIES_TEMPLATE_NAME_MATCHER = new RegExp('%%UTILITIES%%', 'g');
const commonUtilityTemplatePath = getAbsPath('scripts/buildTheme/templates/common-utilities.txt');
const commonUtilityTemplate = readFile(commonUtilityTemplatePath);

const THEME_TEMPLATE_NAME_MATCHER = new RegExp('%%THEME%%', 'g');
const commonThemeTemplatePath = getAbsPath('scripts/buildTheme/templates/common-theme.txt');
const commonThemeTemplate = readFile(commonThemeTemplatePath);

export const createCommonThemeFiles = async (theme: string, utilities: string, destPath: string): Promise<void> => {
  mkdir(getAbsPath(destPath));

  const utilitiesContent = commonUtilityTemplate.replace(UTILITIES_TEMPLATE_NAME_MATCHER, utilities);
  writeFile(getAbsPath(`${destPath}/utilities.ts`), await prettify(utilitiesContent));

  const themeFileContent = commonThemeTemplate.replace(THEME_TEMPLATE_NAME_MATCHER, theme);
  writeFile(getAbsPath(`${destPath}/theme.ts`), await prettify(themeFileContent));

  runTSC(`${destPath}/utilities.ts`, `${destPath}/theme.ts`);
};
