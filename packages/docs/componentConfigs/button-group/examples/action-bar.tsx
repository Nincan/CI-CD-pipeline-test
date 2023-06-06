import { IconTextButton } from 'spaceweb/button';
import SolidChevronDown from 'spaceweb-icons/solid/ChevronDown';
import LineChevronDown from 'spaceweb-icons/line/ChevronDown';
import Search from 'spaceweb-icons/line/Search';
import { Stack } from 'spaceweb/stack';

const ActionBar = () => (
  <Stack direction="horizontal" gap={2} shrink>
    <IconTextButton icon={Search}>Macro</IconTextButton>
    <IconTextButton icon={LineChevronDown}>Assign</IconTextButton>
    <IconTextButton icon={Search}>Reply</IconTextButton>
    <IconTextButton icon={SolidChevronDown}>Archive</IconTextButton>
  </Stack>
);

export default ActionBar;
