import { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import { useLatest } from '../hooks/useLatest';
import { defaultReducer } from './helpers';
import { useNestedMenuContext } from './nested-menu-context';
import { Reducer } from './types';
import useKeyboardNavigation from './useKeyboardNavigation';

type UseStatefulMenu = (params: {
  disableNavigationOnMount?: boolean;
  disableAutoHighlight?: boolean;
  focusWhenNavigationEnabled: boolean;
  listItemsContainerRef: HTMLElement | null;
  onHighlightedItemChange?: (item?: HTMLElement | null) => void;
  reducer?: Reducer;
  selectOnTab?: boolean;
  children?: ReactNode;
}) => {
  highlightedItem: HTMLElement | null;
  setHighlightedItem: (item: HTMLElement | null, showFocusVisibleStyles?: boolean) => void;
  turnOnKeyboardNavigation: () => void;
  turnOffKeyboardNavigation: () => void;
  listItemFocusVisible: boolean;
  navigationEnabled: boolean;
  nestedMenuOpen: boolean;
  setNestedMenuOpen: (open: boolean) => void;
};

const useStatefulMenu: UseStatefulMenu = ({
  disableNavigationOnMount = false,
  focusWhenNavigationEnabled,
  listItemsContainerRef,
  onHighlightedItemChange,
  disableAutoHighlight,
  reducer = defaultReducer,
  selectOnTab,
  children,
}) => {
  useEffect(() => {
    // focusWhenNavigationEnabled is true, then make listContainer focusable if required
    if (focusWhenNavigationEnabled && listItemsContainerRef && listItemsContainerRef.tabIndex < 0) {
      listItemsContainerRef.tabIndex = 0;
    }
  }, [focusWhenNavigationEnabled, listItemsContainerRef]);

  const {
    highlightedItem,
    setHighlightedItem,
    turnOnKeyboardNavigation,
    turnOffKeyboardNavigation,
    listItemFocusVisible,
    navigationEnabled,
    nestedMenuOpen,
    setNestedMenuOpen,
  } = useKeyboardNavigation({
    disableAutoHighlight,
    disableNavigationOnMount,
    focusWhenNavigationEnabled,
    listItemsContainerRef,
    reducer,
    selectOnTab,
    children,
  });

  const { unregisterMenu, registerMenu, getParentMenuInfo } = useNestedMenuContext();
  useEffect(() => {
    if (!listItemsContainerRef) return undefined;

    const menuRef = listItemsContainerRef;
    registerMenu?.({ menuRef, turnOffKeyboardNavigation, turnOnKeyboardNavigation });
    return (): void => {
      unregisterMenu?.(menuRef);
      // on unmount start parent menu's navigation
      const { turnOnKeyboardNavigation: turnOnParentMenuNavigation } = getParentMenuInfo?.(listItemsContainerRef) || {};
      turnOnParentMenuNavigation?.();
    };
  }, [
    listItemsContainerRef,
    registerMenu,
    turnOffKeyboardNavigation,
    turnOnKeyboardNavigation,
    unregisterMenu,
    getParentMenuInfo,
  ]);

  const onHighlightedItemChangeRef = useLatest(onHighlightedItemChange);

  useEffect(() => {
    onHighlightedItemChangeRef.current?.(highlightedItem);
  }, [highlightedItem, onHighlightedItemChangeRef]);

  useEffect(() => {
    let activeElement;
    // set aria-activedescendant to current focused element whenever highlighted item changes
    if (navigationEnabled && highlightedItem?.id && document.activeElement) {
      activeElement = document.activeElement;
      activeElement.setAttribute('aria-activedescendant', highlightedItem.id);
    }
    return (): void => {
      if (activeElement) {
        activeElement.removeAttribute('aria-activedescendant');
      }
    };
  }, [navigationEnabled, highlightedItem]);

  return {
    highlightedItem,
    setHighlightedItem,
    turnOffKeyboardNavigation,
    turnOnKeyboardNavigation,
    listItemFocusVisible,
    navigationEnabled,
    nestedMenuOpen,
    setNestedMenuOpen,
  };
};

export default useStatefulMenu;
