import * as React from 'react';
import MenuItem from '../../menu-item';
import { MenuItemProps } from '../../types';

type ItemVsProp = Record<number, MenuItemProps>;
export const getItems = (totalItems = 6, itemVsProp: ItemVsProp = {}) => {
  const items: React.ReactElement[] = [];
  for (let i = 0; i < totalItems; i += 1)
    items.push(
      <MenuItem key={i} {...itemVsProp[i]} data-testid="menu-item">
        {i}
      </MenuItem>
    );
  return items;
};
