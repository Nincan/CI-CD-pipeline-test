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
      <IconButton aria-label="Chevron Down Icon Button" bordered>
        <ChevronDown className="transform -rotate-90" />
      </IconButton>
      <IconButton aria-label="Search Icon Button" bordered>
        <Search />
      </IconButton>
      <IconButton aria-label="Close Icon Button" bordered>
        <Close />
      </IconButton>
    </ButtonGroup>
    <IconButton aria-label="Chevron Down Icon Button" size="xs">
      <ChevronDown className="transform -rotate-90" />
    </IconButton>
    <IconButton aria-label="Search Icon Button" size="xs">
      <Search />
    </IconButton>
    <IconButton aria-label="Close Icon Button" size="xs">
      <Close />
    </IconButton>
    <IconButton aria-label="Chevron Icon Button" size="xs">
      <ChevronDown />
    </IconButton>
  </Stack>
);

export default TopBarIconGroups;
