import { List, ListItem, ListItemText } from 'spaceweb/list';
import Search from 'spaceweb-icons/line/Search';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import PlayCircleIcon from 'spaceweb-icons/solid/PlayCircle';

const endEnhancer = () => <ChevronDown size={12} />;
export default () => (
  <List className="border border-solid spr-border-01">
    <ListItem button startEnhancer={() => <PlayCircleIcon size={12} />} endEnhancer={endEnhancer} alignItems="start">
      <ListItemText>
        When there is multiline text, what should be the position of start enhancer. <i>alignItems:start</i> makes sure
        that start enhancer are stuck to the of the item.
      </ListItemText>
    </ListItem>
    <ListItem button startEnhancer={() => <Search size={12} />} endEnhancer={endEnhancer} alignItems="center">
      <ListItemText>
        When there is multiline text, what should be the position of start enhancer. <i>alignItems:center</i> makes sure
        that start enhancer is on the center of item.
      </ListItemText>
    </ListItem>
  </List>
);
