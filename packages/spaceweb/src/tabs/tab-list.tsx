import { isValidElement, cloneElement, Children, useMemo, ReactElement, useCallback } from 'react';

import { useOverrides } from '../overrides';
import { useTabsKeyboardNavigation } from '../hooks/useTabsKeyboardNavigation';
import { tabsStyles } from './styled-components';
import { TabListProps, TabProps } from './types';
import { add$props } from '../helpers';
import { Box } from '../box';
import { TabListContext, useStatefulTabsContext } from './contexts';

export const TabList = (props: TabListProps): ReactElement => {
  const { variant, position, activeTabId, overrides, onChange, className, activateOnFocus, ...restProps } = props;
  const [TabListComp, tabListProps] = useOverrides(props.overrides?.TabList, Box);
  const sharedProps = add$props({ variant, position });

  const contextValue = useMemo(
    () => ({ variant, position, activeTabId, overrides, onChange }),
    [variant, position, activeTabId, overrides, onChange]
  );
  const statefulTabsContext = useStatefulTabsContext();

  const { parentElementRef, onKeyDown: handleKeyDown } = useTabsKeyboardNavigation({
    activateOnFocus,
    layout: position === 'left' || position === 'right' ? 'vertical' : 'horizontal',
  });

  const renderTabChild = useCallback(
    (child: { props: TabProps }, index) => {
      // TODO: remove index as tabId fallback and make tabId mandatory in next release
      const tabId = child.props.tabId || String(index);
      const onKeyDown = event => {
        handleKeyDown(event);
        child.props.onKeyDown?.(event);
      };

      return isValidElement(child)
        ? cloneElement(child, {
            tabId,
            onKeyDown,
            tabIndex: tabId === (activeTabId ?? statefulTabsContext.activeTabId) ? 0 : -1,
          })
        : null;
    },
    [handleKeyDown, activeTabId, statefulTabsContext]
  );

  return (
    <TabListContext.Provider value={contextValue}>
      <TabListComp
        data-spaceweb="tablist"
        role="tablist"
        ref={parentElementRef}
        {...restProps}
        {...sharedProps}
        {...tabListProps}
        className={[tabsStyles, className]}
      >
        {Children.map(props.children, renderTabChild)}
      </TabListComp>
    </TabListContext.Provider>
  );
};
TabList.displayName = 'TabList';

TabList.defaultProps = {
  position: 'top',
  variant: 'default',
} as Partial<TabListProps>;
