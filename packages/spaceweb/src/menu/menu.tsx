import { forwardRef, memo, useImperativeHandle, useMemo, useState } from 'react';

import { List } from '../list';
import { useOverrides } from '../overrides';
import useScrollCapture from '../hooks/useScrollCapture';
import useCombinedRefs from '../hooks/useCombinedRef';
import { defaultReducer } from './helpers';
import { MenuProvider } from './MenuContext';
import { MenuProps, MenuRef } from './types';
import useItemContainerEventHandlers from './useItemContainerEventHandlers';
import useStatefulMenu from './useStatefulMenu';
import { useNestedMenuContext } from './nested-menu-context';

const Menu = forwardRef<MenuRef, MenuProps>(
  (
    {
      disableNavigationOnMount = false,
      focusWhenNavigationEnabled = true,
      virtual = false,
      overscanCount,
      scrollElement = null,
      estimateItemSize,
      children,
      overrides,
      onHighlightedItemChange,
      disableAutoHighlight,
      resetMenuOnMouseLeave,
      resetMenuHighlightOnMouseLeave,
      reducer = defaultReducer,
      captureScroll,
      selectOnTab = false,
      ...restProps
    },
    ref
  ) => {
    const [listRef, setListRef] = useState<HTMLElement | null>(null);
    const [ListOverride, listProps] = useOverrides(overrides?.List, List);
    const [listItemsContainer, setListItemsContainer] = useState<HTMLElement | null>(null);
    const {
      turnOnKeyboardNavigation,
      turnOffKeyboardNavigation,
      highlightedItem,
      setHighlightedItem,
      nestedMenuOpen,
      listItemFocusVisible,
      setNestedMenuOpen,
    } = useStatefulMenu({
      disableNavigationOnMount,
      disableAutoHighlight,
      focusWhenNavigationEnabled,
      onHighlightedItemChange,
      listItemsContainerRef: listItemsContainer,
      reducer,
      selectOnTab,
      children,
    });

    const setScrollTarget = useScrollCapture({ enabled: captureScroll });

    const setListCombinedRef = useCombinedRefs(setListRef, setScrollTarget);

    const menuContextValue = useMemo(
      () => ({
        highlightedItem,
        setHighlightedItem,
        setMenuContainerRef: setListItemsContainer,
        nestedMenuOpen,
        listItemFocusVisible,
        setNestedMenuOpen,
      }),
      [highlightedItem, setHighlightedItem, nestedMenuOpen, listItemFocusVisible, setNestedMenuOpen]
    );

    useItemContainerEventHandlers({
      listItemsContainer,
      resetMenuHighlightOnMouseLeave: resetMenuHighlightOnMouseLeave || resetMenuOnMouseLeave,
      setHighlightedItem,
      turnOnKeyboardNavigation,
      focusWhenNavigationEnabled,
    });

    useImperativeHandle(
      ref,
      () => {
        const menuRef: MenuRef | null = listRef;
        if (menuRef) {
          menuRef.turnOnKeyboardNavigation = turnOnKeyboardNavigation;
          menuRef.turnOffKeyboardNavigation = turnOffKeyboardNavigation;
          menuRef.setHighlightedItem = setHighlightedItem;
        }
        return menuRef!;
      },
      [turnOnKeyboardNavigation, turnOffKeyboardNavigation, setHighlightedItem, listRef]
    );

    return (
      <MenuProvider value={menuContextValue}>
        <ListOverride
          ref={setListCombinedRef}
          role="menu"
          virtual={virtual}
          overscanCount={overscanCount}
          scrollElement={scrollElement}
          estimateItemSize={estimateItemSize}
          {...restProps}
          {...listProps}
        >
          {children}
        </ListOverride>
      </MenuProvider>
    );
  }
);
Menu.displayName = 'Menu';

export default memo(Menu);
