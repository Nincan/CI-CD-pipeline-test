import { useState, useCallback } from 'react';
import { TabList, Tab, TabsPanel } from 'spaceweb/tabs';
import { Box } from 'spaceweb/box';

const content = {
  success: <Box className="spr-support-success-text">Success</Box>,
  error: <Box className="spr-support-error-text">Error</Box>,
  warning: <Box className="spr-support-warning-text">Warning</Box>,
};

const CustomKeyTabs = () => {
  const [activeTabId, setActiveTabId] = useState('success');
  const onChange = useCallback(
    ({ activeTabId: updatedActiveTabId }) => {
      setActiveTabId(updatedActiveTabId);
    },
    [setActiveTabId]
  );

  return (
    <>
      <TabList className="border-b spr-border-02 border-solid" activeTabId={activeTabId} onChange={onChange}>
        <Tab tabId="success">Success</Tab>
        <Tab tabId="error">Error</Tab>
        <Tab tabId="warning">Warning</Tab>
      </TabList>
      <TabsPanel className="p-4">{content[activeTabId]}</TabsPanel>
    </>
  );
};

export default CustomKeyTabs;
