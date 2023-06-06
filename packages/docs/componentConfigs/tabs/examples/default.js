import { useState, useCallback } from 'react';
import { TabList, Tab, TabsPanel } from 'spaceweb/tabs';

const content = [
  'Fabulous Homepage',
  'Currently No tasks assigned to Me',
  'Please complete referral process',
  'No messages sent today',
];

const DefaultTab = () => {
  const [activeTabId, setActiveTabId] = useState('1');
  const onChange = useCallback(
    ({ activeTabId: updatedActiveTabId }) => {
      setActiveTabId(updatedActiveTabId);
    },
    [setActiveTabId]
  );
  return (
    <>
      <TabList activeTabId={activeTabId} onChange={onChange}>
        <Tab>My Homepage</Tab>
        <Tab>Tasks Assigned to Me</Tab>
        <Tab>Tasks Assigned by Me</Tab>
        <Tab>Sent</Tab>
      </TabList>
      <TabsPanel className="p-2 mt-2 mb-2 border-t border-r border-b border-l spr-border-01 border-solid">
        {content[activeTabId]}
      </TabsPanel>
    </>
  );
};

export default DefaultTab;
