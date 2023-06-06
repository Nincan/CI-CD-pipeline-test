import * as React from 'react';
import { useState, useMemo, ReactElement } from 'react';
import _map from 'lodash/map';
import _compact from 'lodash/compact';
import _groupBy from 'lodash/groupBy';
import _debounce from 'lodash/debounce';
import matchSorter from 'match-sorter';

import { Box } from 'spaceweb/box';
import { Typography } from 'spaceweb/typography';
import { Search } from 'spaceweb/search';

import CheatsheetContext from '../../components/cheatsheet/Context';
import Category from '../../components/cheatsheet/Category';
import Layout from '../../components/layout';
import { useThemeContext } from '../../components/themeProperties';

import cheatSheetConfigSpaceDark from 'spaceweb-themes/data/space/dark/_cheatSheetConfig';
import cheatSheetConfigSpaceLight from 'spaceweb-themes/data/space/light/_cheatSheetConfig';
import cheatSheetConfigHyperspaceDark from 'spaceweb-themes/data/hyperspace/dark/_cheatSheetConfig';
import cheatSheetConfigHyperspaceLight from 'spaceweb-themes/data/hyperspace/light/_cheatSheetConfig';

const CHEATSHEETCONFIG_MAP = {
  'space-dark': cheatSheetConfigSpaceDark,
  'space-light': cheatSheetConfigSpaceLight,
  'hyperspace-dark': cheatSheetConfigHyperspaceDark,
  'hyperspace-light': cheatSheetConfigHyperspaceLight,
};

const CategorySection = React.memo(
  ({ categories }: { categories: object }): ReactElement => (
    <Box className="flex flex-col w-full">
      {_map(categories, (categoryModules, categoryKey) => (
        <Category key={categoryKey} categoryKey={categoryKey} categoryModules={categoryModules} />
      ))}
    </Box>
  )
);

const getFilteredRulesForCategory = (rules, keyword) =>
  matchSorter(rules, keyword, {
    keys: [
      { key: 'selector', threshold: matchSorter.rankings.CONTAINS },
      { key: 'values', threshold: matchSorter.rankings.CONTAINS },
    ],
  });
const filterCategories = (keyword, cheatSheetConfig) => {
  if (!keyword) return cheatSheetConfig;

  return _compact(
    _map(cheatSheetConfig, category => {
      const filteredCategoryRules = getFilteredRulesForCategory(category.rules, keyword);
      const doesTheTypeMatch = category.type.indexOf(keyword) > -1;
      if (doesTheTypeMatch || (filteredCategoryRules && filteredCategoryRules.length)) {
        return { ...category, ...{ rules: filteredCategoryRules } };
      }
      return undefined;
    })
  );
};

function App(props) {
  const { themeName, isDarkMode } = useThemeContext();
  const [keywordQuery, setKeywordQuery] = useState('');

  const allCategories = useMemo(() => {
    const theme = `${themeName}${isDarkMode ? '-dark' : '-light'}`;
    const cheatSheetConfig = CHEATSHEETCONFIG_MAP[theme];
    const filteredCheatSheetConfig = filterCategories(keywordQuery, cheatSheetConfig) || [];
    return {
      SPACING: [],
      SIZING: [],
      LAYOUT: [],
      BORDER: [],
      FLEXBOX: [],
      TYPOGRAPHY: [],
      BACKGROUND: [],
      INTERACTIVITY: [],
      MISC: [],
      GLOBALS: [],
      GRID: [],
      TRANSFORM: [],
      TRANSITIONS: [],
      ..._groupBy(filteredCheatSheetConfig, config => config.category),
    };
  }, [keywordQuery, themeName, isDarkMode]);

  const debounceHandler = useMemo(() => _debounce(setKeywordQuery, 500), []);

  const providerValue = useMemo(() => ({ keywordQuery }), [keywordQuery]);

  return (
    <Layout
      toggleDirection={props.toggleDirection}
      toggleTheme={props.toggleTheme}
      path={props.path}
      toggleThemeMode={props.toggleThemeMode}
    >
      <Typography variant="h2" className="spr-text-01 mb-4">
        Cheatsheet
      </Typography>
      <CheatsheetContext.Provider value={providerValue}>
        <Box className="flex-col p-4 border-solid border-2 spr-border-03 spr-ui-01" style={{ minWidth: '560px' }}>
          <Box
            className={[
              'flex flex-auto sticky',
              {
                top: '70px',
                zIndex: 1,
              },
            ]}
          >
            <Search
              autoFocus
              className="spr-shadow-02 spr-ui-01 rounded-tl-4 rounded-tr-4 rounded-bl-4 rounded-br-4 h-12"
              placeholder="Search the docs"
              debouncedOnChange={(e: React.ChangeEvent<HTMLInputElement>): void => setKeywordQuery(e.target.value)}
              debounceInterval={500}
            />
          </Box>
          <Box className="flex w-screen flex-row">
            <CategorySection categories={allCategories} />
          </Box>
        </Box>
      </CheatsheetContext.Provider>
    </Layout>
  );
}

export default React.memo(App);
