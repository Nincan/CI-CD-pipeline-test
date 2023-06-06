import * as React from 'react';
import Search from 'spaceweb-icons/line/Search';
import Close from 'spaceweb-icons/line/Close';
import PlayCircleIcon from 'spaceweb-icons/solid/PlayCircle';
import { List, ListItem } from 'spaceweb/list';

export default (): React.ReactElement => (
  <List className="border border-solid spr-border-01">
    <ListItem button startEnhancer={(): React.ReactElement => <Close size={12} />}>
      Item 1
    </ListItem>
    <ListItem button startEnhancer={(): React.ReactElement => <Search size={12} />}>
      Item 2
    </ListItem>
    <ListItem button disabled startEnhancer={(): React.ReactElement => <PlayCircleIcon size={12} />}>
      Item 3
    </ListItem>
    <ListItem button startEnhancer={(): React.ReactElement => <Search size={12} />}>
      Item 4
    </ListItem>
  </List>
);
