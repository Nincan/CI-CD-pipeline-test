import Search from 'spaceweb-icons/line/Search';
import Close from 'spaceweb-icons/line/Close';
import PlayCircleIcon from 'spaceweb-icons/solid/PlayCircle';
import { Divider, List, ListItem } from 'spaceweb/list';
import { Typography } from 'spaceweb/typography';

export default () => (
  <List className="border border-solid spr-border-01">
    <Divider first>
      <Typography variant="h7" weight="semibold">
        Sub Header 1
      </Typography>
    </Divider>
    <ListItem startEnhancer={() => <PlayCircleIcon size={12} />}>Play</ListItem>
    <Divider>
      <Typography variant="h7" weight="semibold">
        Sub Header 2
      </Typography>
    </Divider>
    <ListItem startEnhancer={() => <Search size={12} />}>Search</ListItem>
    <ListItem startEnhancer={() => <Close size={12} />}>Close</ListItem>
  </List>
);
