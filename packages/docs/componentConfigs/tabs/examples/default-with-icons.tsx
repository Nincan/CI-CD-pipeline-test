import * as React from 'react';
import { TabList, Tab, TabsPanel } from 'spaceweb/tabs';
import SettingIcon from 'spaceweb-icons/solid/Setting';
import SecurityIcon from 'spaceweb-icons/solid/Security';
import ProfileIcon from 'spaceweb-icons/solid/Profile';
import MarketPlaceIcon from 'spaceweb-icons/product/MarketPlace';

const content = ['Market Place', 'Profile Page', 'Security Page', 'Settings Page'];

const DefaultTabsWithIcons = (): React.ReactElement => {
  const [activeTabId, setActiveTabId] = React.useState('1');
  const onChange = React.useCallback(
    ({ activeTabId: updatedActiveTabId }) => {
      setActiveTabId(updatedActiveTabId);
    },
    [setActiveTabId]
  );

  return (
    <>
      <TabList activeTabId={activeTabId} onChange={onChange}>
        <Tab>
          <MarketPlaceIcon size={18} className="mr-2" />
          Market
        </Tab>
        <Tab>
          <ProfileIcon size={18} className="mr-2" />
          Profile
        </Tab>
        <Tab>
          <SecurityIcon size={18} className="mr-2" />
          Security
        </Tab>
        <Tab>
          <SettingIcon size={18} className="mr-2" />
          Settings
        </Tab>
      </TabList>
      <TabsPanel className="p-2 mt-2 mb-2 spr-ui-03">{content[activeTabId]}</TabsPanel>
    </>
  );
};

export default DefaultTabsWithIcons;
