import { Menu, MenuItem } from 'spaceweb/menu';
import * as React from 'react';

const ITEMS = [...new Array(1500)].map((_, index) => <MenuItem>item number: {index + 1}</MenuItem>)


export default () => (
  <Menu disableNavigationOnMount virtual={true} style={{ maxHeight: '500px', overflow: 'auto' }}>
      {ITEMS}
  </Menu>
);
