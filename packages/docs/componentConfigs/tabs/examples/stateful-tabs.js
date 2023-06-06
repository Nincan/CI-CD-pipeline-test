import { StatefulTabs, TabList, Tab, TabsPanel } from 'spaceweb/tabs';

const ExampleTabs = () => (
  <StatefulTabs>
    <TabList className="border-t border-r border-b border-l spr-border-02 border-solid">
      <Tab>Approvals</Tab>
      <Tab>Tasks</Tab>
    </TabList>
    <TabsPanel className="p-4" tabId="0">
      List of items to be approved
    </TabsPanel>
    <TabsPanel className="p-4" tabId="1">
      List of Tasks to be completed
    </TabsPanel>
  </StatefulTabs>
);

export default ExampleTabs;
