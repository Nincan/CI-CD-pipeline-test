import { useState } from 'react';
import * as React from 'react';
import Search from 'spaceweb-icons/line/Search';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import Close from 'spaceweb-icons/line/Close';
import PlayCircleIcon from 'spaceweb-icons/solid/PlayCircle';
import { List, ListItem } from 'spaceweb/list';

const endEnhancer = (): React.ReactElement => <ChevronDown size={12} />;
export default (): React.ReactElement => {
  const [selected, setSelected] = useState(-1);
  const getProps = (
    index: number
  ): { onClick: React.MouseEventHandler<HTMLLIElement>; selected: boolean; button: boolean } => ({
    onClick: (): void => setSelected(index),
    selected: selected === index,
    button: true,
  });
  return (
    <List className="border border-solid spr-border-01">
      <ListItem {...getProps(0)} startEnhancer={(): React.ReactElement => <PlayCircleIcon size={12} />}>
        Play
      </ListItem>
      <ListItem
        {...getProps(1)}
        startEnhancer={(): React.ReactElement => <Search size={12} />}
        endEnhancer={endEnhancer}
      >
        Search
      </ListItem>
      <ListItem {...getProps(2)} startEnhancer={(): React.ReactElement => <Close size={12} />}>
        Close
      </ListItem>
    </List>
  );
};
