import { IconButton } from 'spaceweb/button';
import { StatefulButtonGroup } from 'spaceweb/button-group';
import Search from 'spaceweb-icons/line/Search';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import Close from 'spaceweb-icons/line/Close';
import Edit from 'spaceweb-icons/line/Edit';

export default () => (
  <StatefulButtonGroup initialState={[0]} shape="square" variant="secondary" size="sm">
    <IconButton>
      <Search />
    </IconButton>
    <IconButton>
      <Close />
    </IconButton>
    <IconButton disabled>
      <Edit />
    </IconButton>
    <IconButton>
      <ChevronDown />
    </IconButton>
  </StatefulButtonGroup>
);
