import { IconButton } from 'spaceweb/button';
import { StatefulButtonGroup } from 'spaceweb/button-group';
import Search from 'spaceweb-icons/line/Search';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import Close from 'spaceweb-icons/line/Close';
import Edit from 'spaceweb-icons/line/Edit';

export default () => (
  <StatefulButtonGroup initialState={[0]} shape="square" variant="secondary" size="xs">
    <IconButton aria-label="Search Icon Button">
      <Search />
    </IconButton>
    <IconButton aria-label="Close Icon Button">
      <Close />
    </IconButton>
    <IconButton disabled aria-label="Edit Icon Button">
      <Edit />
    </IconButton>
    <IconButton aria-label="Down Chevron Icon Button">
      <ChevronDown />
    </IconButton>
  </StatefulButtonGroup>
);
