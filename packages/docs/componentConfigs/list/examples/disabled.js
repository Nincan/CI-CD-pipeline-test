import Search from 'spaceweb-icons/line/Search';
import Close from 'spaceweb-icons/line/Close';
import PlayCircleIcon from 'spaceweb-icons/solid/PlayCircle';
import { List, ListItem } from 'spaceweb/list';

export default () => (
  <List className="border border-solid spr-border-01">
    <ListItem button startEnhancer={() => <Close size={12} />}>
      Item 1
    </ListItem>
    <ListItem button startEnhancer={() => <Search size={12} />}>
      Item 2
    </ListItem>
    <ListItem button disabled startEnhancer={() => <PlayCircleIcon size={12} />}>
      Item 3
    </ListItem>
    <ListItem button startEnhancer={() => <Search size={12} />}>
      Item 4
    </ListItem>
  </List>
);
