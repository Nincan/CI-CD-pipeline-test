import { List, ListItem } from 'spaceweb/list';

export default () => (
  <List className="border border-solid spr-border-01">
    <ListItem button>Item 1</ListItem>
    <ListItem button>Item 2</ListItem>
    <ListItem button selected>
      Item 3
    </ListItem>
    <ListItem button={false}>Item 4</ListItem>
  </List>
);
