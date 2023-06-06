import * as React from 'react';
import { Divider, List, ListItem, ListItemText } from 'spaceweb/list';

export default (): React.ReactElement => (
  <List className="border border-solid spr-border-01">
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <Divider />
    <ListItem>Item 3</ListItem>
    <ListItem>Item 4</ListItem>
  </List>
);
