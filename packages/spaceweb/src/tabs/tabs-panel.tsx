import { ReactElement } from 'react';
import { StyledTabsPanel } from './styled-components';
import { TabsPanelProps } from './types';
import { useOverrides } from '../overrides';
import { add$props } from '../helpers';
import { useStatefulTabsContext } from './contexts';

const TabsPanel = (props: TabsPanelProps): ReactElement | null => {
  const { overrides, selected, tabId, ...restProps } = props;
  const sharedProps = add$props({ selected });
  const tabsContext = useStatefulTabsContext();

  const [TabsPanelComp, tabsPanelProps] = useOverrides(overrides?.TabsPanel, StyledTabsPanel);
  if (!tabId || tabId === tabsContext.activeTabId) {
    return (
      <TabsPanelComp
        aria-labelledby={tabsContext.activeTabId}
        data-spaceweb="tabpanel"
        role="tabpanel"
        {...restProps}
        {...tabsPanelProps}
        {...sharedProps}
      />
    );
  }
  return null;
};
TabsPanel.displayName = 'TabsPanel';

export default TabsPanel;
