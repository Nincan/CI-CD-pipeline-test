import { useState } from 'react';
import { Menu, MenuItem } from 'spaceweb/menu';
import { Search } from 'spaceweb/search';
import { Box } from 'spaceweb/box';

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

const RefNavigation = () => {
  const [menuRef, setMenuRef] = useState(null);
  return (
    <Box>
      <Search
        onFocus={menuRef?.turnOnKeyboardNavigation}
        onBlur={() => {
          menuRef?.turnOffKeyboardNavigation();
          menuRef?.setHighlightedItem(null);
        }}
      />
      <Menu focusWhenNavigationEnabled={false} disableNavigationOnMount ref={setMenuRef}>
        {ITEMS.map(({ label, disabled }) => (
          <MenuItem disabled={disabled}>{label}</MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default RefNavigation;
