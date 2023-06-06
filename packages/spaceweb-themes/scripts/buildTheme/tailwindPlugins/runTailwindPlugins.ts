/**
 * @author Ivan Torres
 */

/* eslint no-void: 0 */

import postcss, { LazyResult } from 'postcss';

import substituteTailwindAtRules from 'tailwindcss/lib/lib/substituteTailwindAtRules';
import evaluateTailwindFunctions from 'tailwindcss/lib/lib/evaluateTailwindFunctions';
import substituteVariantsAtRules from 'tailwindcss/lib/lib/substituteVariantsAtRules';
import substituteResponsiveAtRules from 'tailwindcss/lib/lib/substituteResponsiveAtRules';
import substituteScreenAtRules from 'tailwindcss/lib/lib/substituteScreenAtRules';
import substituteClassApplyAtRules from 'tailwindcss/lib/lib/substituteClassApplyAtRules';
import convertLayerAtRulesToControlComments from 'tailwindcss/lib/lib/convertLayerAtRulesToControlComments';
import purgeUnusedStyles from 'tailwindcss/lib/lib/purgeUnusedStyles';
import processPlugins from 'tailwindcss/lib/util/processPlugins';

import { TailwindPlugin, ThemeConfig } from '../types';

export default (config: ThemeConfig, plugins: TailwindPlugin[] = []) => (css: string): LazyResult => {
  const getProcessedPlugins = () => processPlugins(plugins, config);

  return postcss([
    substituteTailwindAtRules(config, getProcessedPlugins()),
    evaluateTailwindFunctions(config),
    substituteVariantsAtRules(config, getProcessedPlugins()),
    substituteResponsiveAtRules(config),
    convertLayerAtRulesToControlComments(config),
    substituteScreenAtRules(config),
    substituteClassApplyAtRules(config, getProcessedPlugins),
    purgeUnusedStyles(config),
  ]).process(css, { from: undefined });
};
