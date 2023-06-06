import _noop from 'lodash/noop';
import { createContext, Key, useContext } from 'react';
import { ChangEventHandler, TabListProps } from './types';

export const StatefulTabsContext = createContext<{ activeTabId: Key; onChange: ChangEventHandler }>({
  activeTabId: '0',
  onChange: _noop,
});
StatefulTabsContext.displayName = 'StatefulTabsContext';

export const useStatefulTabsContext = () => useContext(StatefulTabsContext);

export const TabListContext = createContext<
  Pick<TabListProps, 'variant' | 'position' | 'activeTabId' | 'overrides' | 'onChange'>
>({});
TabListContext.displayName = 'TabListContext';

export const useTabListContext = () => useContext(TabListContext);
