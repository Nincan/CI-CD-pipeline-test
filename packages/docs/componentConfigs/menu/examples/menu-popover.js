import { useState } from 'react';
import { Menu, MenuItem } from 'spaceweb/menu';
import { StatefulPopover } from 'spaceweb/popover';
import { IconButton } from 'spaceweb/button';
import Search from 'spaceweb-icons/line/Search';

const ITEMS = [
  { label: 'Item One' },
  { label: 'Item Two' },
  { label: 'Item Three', disabled: true },
  { label: 'Item Four', disabled: true },
  { label: 'Item Five' },
  { label: 'Item Six' },
  { label: 'Item Seven' },
  { label: 'Item Eight' },
  { label: 'Item Nine' },
  { label: 'Item Ten' },
  { label: 'Item Eleven' },
  { label: 'Item Twelve' },
];

export default () => {
  const [selectedIndex, setSelectedIndex] = useState(6);
  return (
    <StatefulPopover
      content={({ close }) => (
        <Menu onKeyDown={e => e.key === 'Tab' && close()}>
          {ITEMS.map(({ label, disabled }, index) => (
            <MenuItem
              disabled={disabled}
              selected={selectedIndex === index}
              onClick={() => {
                setSelectedIndex(index);
                close();
              }}
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      )}
    >
      {({ isOpen }) => (
        <IconButton bordered shape="square" size="sm" isSelected={isOpen}>
          <Search />
        </IconButton>
      )}
    </StatefulPopover>
  );
};
