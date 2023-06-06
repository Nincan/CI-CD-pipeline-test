import { memo, MouseEventHandler, useCallback, useMemo, ReactElement } from 'react';

import { BaseButton } from '../base-button';
import { add$props } from '../helpers';
import { mergeOverrides, useOverrides } from '../overrides';
import { tabStyle } from './styled-components';
import { TabProps, SharedPropsTab } from './types';
import { resetStyles } from './helpers';
import { useTabListContext, useStatefulTabsContext } from './contexts';

const Tab = (props: TabProps): ReactElement => {
  const { variant, position, selected, overrides, className = '', tabId, onClick, ...restProps } = props;

  const tabListContext = useTabListContext();
  const statefulTabsContext = useStatefulTabsContext();

  const activeTabId = tabListContext.activeTabId ?? statefulTabsContext.activeTabId,
    _selected = selected ?? activeTabId === tabId,
    onChange = tabListContext.onChange ?? statefulTabsContext.onChange;

  const sharedProps = add$props({
    variant: variant ?? tabListContext.variant,
    position: position ?? tabListContext.position,
    selected: _selected,
  });

  const mergedOverrides = useMemo(() => mergeOverrides(tabListContext.overrides || {}, overrides), [
    tabListContext.overrides,
    overrides,
  ]);
  const [TabComp, tabProps] = useOverrides<SharedPropsTab, TabProps>(mergedOverrides?.Tab, BaseButton);

  const handleClick: MouseEventHandler = useCallback(
    e => {
      onChange?.({ activeTabId: tabId });
      onClick?.(e);
    },
    [onChange, onClick, tabId]
  );

  const _className = useMemo(() => [resetStyles, tabStyle, className], [resetStyles, tabStyle, className]);

  return (
    <TabComp
      data-spaceweb="tab"
      role="tab"
      aria-selected={_selected}
      // id should not be passed to DOM.
      id={String(tabId)}
      {...restProps}
      {...tabProps}
      {...sharedProps}
      className={_className}
      onClick={handleClick}
    />
  );
};
Tab.displayName = 'Tab';

export default memo(Tab);
