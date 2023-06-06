import * as React from 'react';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import Close from 'spaceweb-icons/line/Close';
import Search from 'spaceweb-icons/line/Search';
import PlayCircleIcon from 'spaceweb-icons/solid/PlayCircle';
import { IconButton } from 'spaceweb/button';
import { Divider } from 'spaceweb/list';
import { Menu, MenuItem, NestedMenuProvider } from 'spaceweb/menu';
import { StatefulPopover } from 'spaceweb/popover';
import { Typography } from 'spaceweb/typography';

type Item = {
  label: string;
  icon?: React.ComponentType;
  disabled?: boolean;
};
type GroupedItem = {
  title?: string;
  items: Item[];
};

const ITEMS: GroupedItem[] = [
  {
    title: 'Close and Search',
    items: [
      { label: 'Search', icon: Search },
      { label: 'Close', icon: Close, disabled: true },
    ],
  },
  {
    title: 'Play and Download',
    items: [
      { label: 'Play video', icon: PlayCircleIcon },
      { label: 'Download', icon: ChevronDown },
    ],
  },
];

const ActionMenu = ({
  groupedItems,
  onItemSelect,
}: {
  groupedItems: GroupedItem[];
  onItemSelect: (item: Item) => void;
}) => (
  <Menu>
    {groupedItems.flatMap((groupedItem, index) => {
      const items = groupedItem.items.map(item => {
        const { label, disabled, icon } = item;
        return (
          <MenuItem
            key={label}
            disabled={disabled}
            startEnhancer={icon}
            onClick={() => {
              onItemSelect(item);
            }}
          >
            {label}
          </MenuItem>
        );
      });
      return [
        <Divider first={index === 0}>
          <Typography variant="h7" weight="semibold">
            {groupedItem.title}
          </Typography>
        </Divider>,
        ...items,
      ];
    })}
  </Menu>
);

export default () => (
  <NestedMenuProvider>
    <StatefulPopover
      placement="bottom"
      content={({ close }) => <ActionMenu groupedItems={ITEMS} onItemSelect={close} />}
    >
      {({ isOpen }) => (
        <IconButton aria-label="Search Icon Button" bordered shape="square" size="sm" isSelected={isOpen}>
          <Search />
        </IconButton>
      )}
    </StatefulPopover>
  </NestedMenuProvider>
);
