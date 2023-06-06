import { Divider, List, ListItem } from 'spaceweb/list';

export default () => (
  <List className="border border-solid spr-border-01">
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <Divider />
    <ListItem>Item 3</ListItem>
    <ListItem>Item 4</ListItem>
  </List>
);
