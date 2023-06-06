import { MenuItem, Menu } from 'spaceweb/menu';

const ITEMS = [
  { label: 'Item One' },
  { label: 'Item Two' },
  { label: 'Item Three', disabled: true },
  { label: 'Item Four', disabled: true },
  { label: 'Item Five' },
  { label: 'Item Six' },
  { label: 'Item Seven', selected: true },
  { label: 'Item Eight' },
  { label: 'Item Nine' },
  { label: 'Item Ten' },
  { label: 'Item Eleven' },
  { label: 'Item Twelve' },
];

export default () => (
  <Menu>
    {ITEMS.map(({ label, disabled, selected }) => (
      <MenuItem key={label} disabled={disabled} selected={selected}>
        {label}
      </MenuItem>
    ))}
  </Menu>
);
