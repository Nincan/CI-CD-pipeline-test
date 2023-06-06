import { useState } from 'react';
import { List, ListItem } from 'spaceweb/list';
import Search from 'spaceweb-icons/line/Search';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import Close from 'spaceweb-icons/line/Close';
import PlayCircleIcon from 'spaceweb-icons/solid/PlayCircle';

const endEnhancer = () => <ChevronDown size={12} />;
export default () => {
  const [selected, setSelected] = useState(-1);
  const getProps = index => ({
    onClick: () => setSelected(index),
    selected: selected === index,
    button: true,
  });
  return (
    <List className="border border-solid spr-border-01">
      <ListItem {...getProps(0)} startEnhancer={() => <PlayCircleIcon size={12} />}>
        Play
      </ListItem>
      <ListItem {...getProps(1)} startEnhancer={() => <Search size={12} />} endEnhancer={endEnhancer}>
        Search
      </ListItem>
      <ListItem {...getProps(2)} startEnhancer={() => <Close size={12} />}>
        Close
      </ListItem>
    </List>
  );
};
