import * as React from 'react';
import Search from 'spaceweb-icons/line/Search';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import Close from 'spaceweb-icons/line/Close';
import PlayCircleIcon from 'spaceweb-icons/solid/PlayCircle';
import { List, ListItem } from 'spaceweb/list';

const endEnhancer = (): React.ReactElement => <ChevronDown size={12} />;
export default (): React.ReactElement => (
  <List className="border border-solid spr-border-01">
    <ListItem button startEnhancer={(): React.ReactElement => <PlayCircleIcon size={12} />}>
      Play
    </ListItem>
    <ListItem button startEnhancer={(): React.ReactElement => <Search size={12} />} endEnhancer={endEnhancer} autoFocus>
      Search
    </ListItem>
    <ListItem button startEnhancer={(): React.ReactElement => <Close size={12} />}>
      Close
    </ListItem>
  </List>
);
