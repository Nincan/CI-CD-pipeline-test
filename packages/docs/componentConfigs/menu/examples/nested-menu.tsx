import Search from 'spaceweb-icons/line/Search';
import { IconButton } from 'spaceweb/button';
import { Menu, MenuItem, NestedMenuProvider } from 'spaceweb/menu';
import { StatefulPopover } from 'spaceweb/popover';

const ITEMS = [
  { label: 'Item One' },
  { label: 'Item Two', disabled: true },
  { label: 'Item Three' },
  {
    label: 'Item Four',
    items: [
      { label: 'Item 4.1' },
      { label: 'Item 4.2' },
      { label: 'Item 4.3', disabled: true },
      { label: 'Item 4.4' },
      {
        label: 'Item 4.5',
        items: [
          { label: 'Item 4.5.1' },
          { label: 'Item 4.5.2' },
          { label: 'Item 4.5.3', disabled: true },
          { label: 'Item 4.5.4' },
          { label: 'Item 4.5.5' },
        ],
      },
      { label: 'Item 4.6' },
      { label: 'Item 4.7' },
      { label: 'Item 4.8' },
    ],
  },
  { label: 'Item Five' },
  { label: 'Item Six' },
];

const renderMenu = items => (
  <Menu disableAutoHighlight>
    {items.map(({ label, disabled, items: _items }) => (
      <MenuItem
        key={label}
        disabled={disabled}
        getChildMenu={() => (_items ? renderMenu(_items) : null)}
        onClick={() => console.log(label)}
      >
        {label}
      </MenuItem>
    ))}
  </Menu>
);

export default () => (
  <NestedMenuProvider>
    <StatefulPopover content={() => renderMenu(ITEMS)}>
      {({ isOpen }) => (
        <IconButton aria-label="Search Icon Button" bordered shape="square" size="sm" isSelected={isOpen}>
          <Search />
        </IconButton>
      )}
    </StatefulPopover>
  </NestedMenuProvider>
);
