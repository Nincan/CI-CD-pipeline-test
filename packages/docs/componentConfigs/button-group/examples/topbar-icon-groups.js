import { ButtonGroup } from 'spaceweb/button-group';
import { IconTextButton, IconButton } from 'spaceweb/button';
import Search from 'spaceweb-icons/line/Search';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import Close from 'spaceweb-icons/line/Close';
import { Stack } from 'spaceweb/stack';

const TopBarIconGroups = () => (
  <Stack direction="horizontal" gap={2} shrink>
    <IconTextButton size="md" endEnhancer={<ChevronDown size={12} />}>
      Lifetime
    </IconTextButton>
    <ButtonGroup shape="default" size="sm">
      <IconButton bordered>
        <ChevronDown className="transform -rotate-90" />
      </IconButton>
      <IconButton bordered>
        <Search />
      </IconButton>
      <IconButton bordered>
        <Close />
      </IconButton>
    </ButtonGroup>
    <IconButton size="sm">
      <ChevronDown className="transform -rotate-90" />
    </IconButton>
    <IconButton size="sm">
      <Search />
    </IconButton>
    <IconButton size="sm">
      <Close />
    </IconButton>
    <IconButton size="sm">
      <ChevronDown />
    </IconButton>
  </Stack>
);

export default TopBarIconGroups;
