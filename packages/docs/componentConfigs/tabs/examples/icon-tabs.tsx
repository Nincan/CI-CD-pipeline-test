import { useState } from 'react';
import * as React from 'react';
import { TabList, Tab, TabsPanel } from 'spaceweb/tabs';
import { IconButton } from 'spaceweb/button';
import Search from 'spaceweb-icons/line/Search';
import PlayCircleIcon from 'spaceweb-icons/solid/PlayCircle';
import Close from 'spaceweb-icons/line/Close';
import { Box } from 'spaceweb/box';

const content = ['Search', 'Play Video', 'Close'];

const IconTabs = (): React.ReactElement => {
  const [activeTabId, setActiveTabId] = useState('0');
  const onChange = ({ activeTabId: updatedActiveTabId }) => setActiveTabId(updatedActiveTabId);
  return (
    <Box className="flex flex-row-reverse">
      <TabList
        activeTabId={activeTabId}
        onChange={onChange}
        position="right"
        className="w-12 border-t border-r border-b border-l border-solid spr-border-02 rounded-tr-1"
      >
        <Tab className="px-0 py-0">
          <IconButton aria-label="Search Icon Button">
            <Search />
          </IconButton>
        </Tab>
        <Tab className="px-0 py-0">
          <IconButton aria-label="Play Icon Button">
            <PlayCircleIcon />
          </IconButton>
        </Tab>
        <Tab className="px-0 py-0">
          <IconButton aria-label="Close Icon Button">
            <Close />
          </IconButton>
        </Tab>
      </TabList>
      <TabsPanel className="p-2">{content[+activeTabId]}</TabsPanel>
    </Box>
  );
};

export default IconTabs;
