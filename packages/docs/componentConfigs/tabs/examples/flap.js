import { useState, useCallback } from 'react';
import { TabList, Tab, TabsPanel } from 'spaceweb/tabs';

const content = ['Please write a new message', 'Profile is not available', 'Please refer to our docs'];

const FlapTab = () => {
  const [activeTabId, setActiveTabId] = useState('0');
  const onChange = useCallback(
    ({ activeTabId: updatedActiveTabId }) => {
      setActiveTabId(updatedActiveTabId);
    },
    [setActiveTabId]
  );
  return (
    <>
      <TabList activeTabId={activeTabId} onChange={onChange} variant="flap">
        <Tab>Message</Tab>
        <Tab>Profile</Tab>
        <Tab>Knowledge Base</Tab>
      </TabList>
      <TabsPanel className="p-4">{content[activeTabId]}</TabsPanel>
    </>
  );
};

export default FlapTab;
