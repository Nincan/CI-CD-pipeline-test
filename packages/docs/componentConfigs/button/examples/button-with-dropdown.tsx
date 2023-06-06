import * as React from 'react';
import { Button } from 'spaceweb/button';
import { StatefulPopover } from 'spaceweb/popover';
import { Menu, MenuItem } from 'spaceweb/menu';
import ChevronDownIcon from 'spaceweb-icons/solid/ChevronDown';
import { Box } from 'spaceweb/box';

const ITEMS = [{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }];

const DropdownButton = (): React.ReactElement => (
  <StatefulPopover
    showArrow={false}
    content={({ close }) => (
      <Menu>
        {ITEMS.map(({ label }) => (
          <MenuItem
            key={label}
            onClick={() => {
              close();
              alert(`${label} is selected`);
            }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    )}
  >
    <Button className="min-w-0 px-0 ml-px rounded-r-md rounded-l-0 w-9" aria-label="dropdown button">
      <ChevronDownIcon size={14} />
    </Button>
  </StatefulPopover>
);

const ButtonWithDropdown = (): React.ReactElement => (
  <Box className="inline-flex h-8" aria-label="split button">
    <Button className="min-w-0 rounded-l-md rounded-r-0" onClick={() => alert('Button Clicked')}>
      Send
    </Button>
    <DropdownButton />
  </Box>
);

export default ButtonWithDropdown;
