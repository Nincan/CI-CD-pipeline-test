import { useMemo, useState, useCallback, PropsWithChildren, ReactElement } from 'react';
import { StatefulTabsContext } from './contexts';
import { StatefulTabProps } from './types';

const StatefulTabs = ({
  defaultActiveTabId,
  children,
  onChange,
}: PropsWithChildren<StatefulTabProps>): ReactElement => {
  const [activeTabId, setActiveTabId] = useState(defaultActiveTabId || '0');
  const handleTabChange = useCallback(
    ({ activeTabId: updatedActiveTabId }) => {
      setActiveTabId(updatedActiveTabId);
      onChange?.({ activeTabId: updatedActiveTabId });
    },
    [setActiveTabId, onChange]
  );

  const memoizedValue = useMemo(() => ({ activeTabId, onChange: handleTabChange }), [activeTabId, handleTabChange]);

  return <StatefulTabsContext.Provider value={memoizedValue}>{children}</StatefulTabsContext.Provider>;
};
StatefulTabs.displayName = 'StatefulTabs';

StatefulTabs.defaultProps = {
  defaultActiveTabId: '0',
} as Partial<StatefulTabProps>;

export default StatefulTabs;
