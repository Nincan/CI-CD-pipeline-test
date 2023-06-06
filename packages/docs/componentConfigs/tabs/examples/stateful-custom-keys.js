import { StatefulTabs, TabList, Tab, TabsPanel } from 'spaceweb/tabs';
import { Box } from 'spaceweb/box';

const handleChange = ({ activeTabId }) => alert(`Tab switched to: ${activeTabId}`);

const StatefulCustomTabs = () => (
  <StatefulTabs defaultActiveTabId="green" onChange={handleChange}>
    <Box className="flex">
      <TabList position="left" className="border-t border-r border-b border-l border-solid spr-border-02">
        <Tab tabId="green">Green</Tab>
        <Tab tabId="red">Red</Tab>
      </TabList>
      <Box className="border-1 border-solid spr-border-02 w-full">
        <TabsPanel tabId="green" className={['p-4', { color: 'green' }]}>
          Text in Green
        </TabsPanel>
        <TabsPanel tabId="red" className={['p-4', { color: 'red' }]}>
          Text in Red
        </TabsPanel>
      </Box>
    </Box>
  </StatefulTabs>
);

export default StatefulCustomTabs;
