import * as React from 'react';
import { List, ListItem } from 'spaceweb/list';

const ITEMS = [...new Array(1500)].map((_, index) => <ListItem>item number: {index + 1}</ListItem>);

export default (): React.ReactElement => (
  <List virtual style={{ maxHeight: '500px' }} className="border border-solid spr-border-01 overflow-auto">
    {ITEMS}
  </List>
);
