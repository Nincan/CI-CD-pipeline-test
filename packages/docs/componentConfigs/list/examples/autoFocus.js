import Search from 'spaceweb-icons/line/Search';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import Close from 'spaceweb-icons/line/Close';
import PlayCircleIcon from 'spaceweb-icons/solid/PlayCircle';
import { List, ListItem } from 'spaceweb/list';

const endEnhancer = () => <ChevronDown size={12} />;
export default () => (
  <List className="border border-solid spr-border-01">
    <ListItem button startEnhancer={() => <PlayCircleIcon size={12} />}>
      Play
    </ListItem>
    <ListItem button startEnhancer={() => <Search size={12} />} endEnhancer={endEnhancer} autoFocus>
      Search
    </ListItem>
    <ListItem button startEnhancer={() => <Close size={12} />}>
      Close
    </ListItem>
  </List>
);
