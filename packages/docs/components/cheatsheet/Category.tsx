import { memo } from 'react';
import _startCase from 'lodash/startCase';
import _lowerCase from 'lodash/lowerCase';

import { Box } from 'spaceweb/box';
import { List } from 'spaceweb/list';
import { Typography } from 'spaceweb/typography';

import CategoryModule from './CategoryModule';

const Category = ({ categoryKey, categoryModules }) => (
  <Box className="w-full">
    <Typography variant="h2" className="mt-4 mb-2 spr-text-01">
      {_startCase(_lowerCase(categoryKey))}
    </Typography>
    {categoryModules.length ? (
      <Box className="w-full rounded spr-shadow-02">
        <List className="py-0">
          {categoryModules.map((module, index) => (
            <CategoryModule key={module.type} index={index} module={module} />
          ))}
        </List>
      </Box>
    ) : null}
  </Box>
);

export default memo(Category);
