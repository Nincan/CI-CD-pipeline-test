import _ from 'lodash';
import prettier from 'prettier';
import path from 'path';
import bytes from 'bytes';

import configs from './cheatSheetConfig';
import fileUtils from '../../../../utils/fileUtils';
import emoji from '../../../../utils/emoji';
import colors from '../../../../utils/colors';

import spaceDarkThemeRules from '../../dist/space/dark/utilities';
import spaceLightThemeRules from '../../dist/space/light/utilities';
import hyperspaceDarkThemeRules from '../../dist/hyperspace/dark/utilities';
import hyperspaceLightThemeRules from '../../dist/hyperspace/light/utilities';

const CHEATSHEETCONFIG_FILE_DIR = path.resolve(__dirname, '../../data');
const SPACEWEB_THEMES_DIR = path.resolve(__dirname, '../../../');

const buildCheatSheetConfig = allRules =>
  _.map(configs, config => {
    const matchedRules = allRules.filter(config.matchRules);
    return {
      ...config,
      rules: matchedRules.map(rule => ({
        selector: `.${rule.selector}`,
        values: rule.nodes.map(node => `${node.prop}: ${node.value}`),
      })),
    };
  });

const generateCheatSheetConfigFile = async (themeName, allRules, buildPath) => {
  try {
    fileUtils.log(emoji.hourglass, `Generating ${themeName} config file...`);
    const structuredRules = _.map(allRules, (rule, selector) => ({
      selector,
      nodes: _.map(rule, (cssPropValue, cssPropName) => ({
        prop: cssPropName,
        value: cssPropValue,
      })),
    }));
    const cheatSheetConfig = buildCheatSheetConfig(structuredRules);

    fileUtils.makeDir(CHEATSHEETCONFIG_FILE_DIR, { recursive: true });

    const prettierOptions = (await prettier.resolveConfig(CHEATSHEETCONFIG_FILE_DIR)) || {};
    const cheatSheetConfigContent = prettier.format(`export default ${JSON.stringify(cheatSheetConfig, null, 2)} \n`, {
      parser: 'babel',
      ...prettierOptions,
    });
    const CHEATSHEETCONFIG_FILE_PATH = path.resolve(CHEATSHEETCONFIG_FILE_DIR, buildPath);

    fileUtils.writeFile(CHEATSHEETCONFIG_FILE_PATH, cheatSheetConfigContent);
    fileUtils.log(
      emoji.disk,
      `Saved ${themeName} config file to`,
      colors.file(path.relative(SPACEWEB_THEMES_DIR, CHEATSHEETCONFIG_FILE_PATH)),
      'Size:',
      colors.info(bytes(cheatSheetConfigContent.length))
    );
    fileUtils.log(emoji.yes, 'Done!');
    fileUtils.log();
  } catch (error) {
    fileUtils.error(error, error?.stack);
  }
};

(async () => {
  fileUtils.log(emoji.go, 'Generating all cheatsheet config files...');
  fileUtils.log();

  await generateCheatSheetConfigFile('space-dark', spaceDarkThemeRules, './space/dark/_cheatSheetConfig.js');
  await generateCheatSheetConfigFile('space-light', spaceLightThemeRules, './space/light/_cheatSheetConfig.js');
  await generateCheatSheetConfigFile(
    'hyperspace-dark',
    hyperspaceDarkThemeRules,
    './hyperspace/dark/_cheatSheetConfig.js'
  );
  await generateCheatSheetConfigFile(
    'hyperspace-light',
    hyperspaceLightThemeRules,
    './hyperspace/light/_cheatSheetConfig.js'
  );

  fileUtils.log(emoji.sparkles, 'Finished!');
})();
