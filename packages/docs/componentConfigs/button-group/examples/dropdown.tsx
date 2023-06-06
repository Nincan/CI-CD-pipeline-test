import * as React from 'react';
import { Button } from 'spaceweb/button';
import { StatefulButtonGroup } from 'spaceweb/button-group';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import { Popover } from 'spaceweb/popover';
import { Menu, MenuItem } from 'spaceweb/menu';

const items = [
  { label: 'deploy' },
  { label: 'restart' },
  { label: 'scale' },
  { label: 'rollback' },
  { label: 'abort' },
];

// This component is required because of the way that button-group works.
// The button group parent will decorate its children with additional props.
// In Dropdown, we ensure that those props get shuttled to the Button component
// rather than the wrapping StatefulPopover
const Dropdown = (props: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Popover
      isOpen={isOpen}
      onClick={() => setIsOpen(s => !s)}
      content={
        <Menu>
          {items.map(({ label }) => (
            <MenuItem onClick={() => setIsOpen(false)}>{label}</MenuItem>
          ))}
        </Menu>
      }
    >
      <Button {...props} endEnhancer={<ChevronDown size={14} />} />
    </Popover>
  );
};

const DropdownGroup = () => (
  <StatefulButtonGroup>
    <Button>First</Button>
    <Button>Second</Button>
    <Dropdown>Third</Dropdown>
  </StatefulButtonGroup>
);

export default DropdownGroup;
