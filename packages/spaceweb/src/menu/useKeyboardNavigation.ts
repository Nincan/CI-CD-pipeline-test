import { Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useLatest } from '../hooks/useLatest';
import { useDocument } from '../spacewebProvider/DocumentProvider';
import { getFirstHighlightableElement, getNextHighlightedItem } from './helpers';
import { useNestedMenuContext } from './nested-menu-context';
import { Reducer } from './types';

type Params = {
  /**
   * Navigation will be available for items of listContainer
   */
  listItemsContainerRef: HTMLElement | null;
  focusWhenNavigationEnabled?: boolean;
  disableNavigationOnMount?: boolean;
  disableAutoHighlight?: boolean;
  reducer: Reducer;
  selectOnTab?: boolean;
  children?: ReactNode;
};

type NavigationUtils = {
  highlightedItem: HTMLElement | null;
  setHighlightedItem: (item: HTMLElement | null, showFocusVisibleStyles?: boolean) => void;
  turnOnKeyboardNavigation: () => void;
  turnOffKeyboardNavigation: () => void;
  listItemFocusVisible: boolean;
  navigationEnabled: boolean;
  nestedMenuOpen: boolean;
  setNestedMenuOpen: (open: boolean) => void;
};

const useKeyboardNavigation = ({
  listItemsContainerRef,
  disableNavigationOnMount = false,
  focusWhenNavigationEnabled = true,
  disableAutoHighlight,
  reducer,
  selectOnTab,
  children,
}: Params): NavigationUtils => {
  const [highlightedItem, _setHighlightedItem] = useState<HTMLElement | null>(null);
  const [listItemFocusVisible, setListItemFocusVisible] = useState(false);
  const [navigationEnabled, setNavigationEnabled] = useState(!disableNavigationOnMount);
  const [nestedMenuOpen, setNestedMenuOpen] = useState(false);

  const highlightedItemRef = useLatest(highlightedItem);
  const reducerRef = useLatest(reducer);
  const ownerDocument = useDocument();

  const setHighlightedItem = (item: HTMLElement | null, showFocusVisibleStyles = false) => {
    _setHighlightedItem(item);
    setListItemFocusVisible(showFocusVisibleStyles);
  };

  // highlight first item in the list if prevHighlighted item is no longer in dom

  useLayoutEffect(() => {
    const isHighlightedItemInDom = ownerDocument?.body.contains(highlightedItem);
    if (disableAutoHighlight || isHighlightedItemInDom || !navigationEnabled || !listItemsContainerRef) {
      return;
    }
    const { firstHighlightableItem } = getFirstHighlightableElement(listItemsContainerRef);
    firstHighlightableItem && setHighlightedItem(firstHighlightableItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run this hook only when children changes
  }, [children]);

  useEffect(() => {
    // Scroll the selected item into view for the first time when menu opens up
    window.requestAnimationFrame(() => {
      highlightedItemRef.current?.scrollIntoView?.({ block: 'nearest' });
    });
  }, [highlightedItemRef]);

  const turnOnKeyboardNavigation = useCallback(() => {
    setNavigationEnabled(true);
    setNestedMenuOpen(false);
  }, [setNavigationEnabled, setNestedMenuOpen]);
  const turnOffKeyboardNavigation = useCallback(() => setNavigationEnabled(false), []);
  const { getMenuInfo, getParentMenuInfo, getChildMenuInfo } = useNestedMenuContext();

  // Highlight previously selected item or first highlightable item on mount
  useEffect(() => {
    if (disableAutoHighlight || !listItemsContainerRef) {
      return;
    }
    const { firstHighlightableItem, firstSelectedItem } = getFirstHighlightableElement(listItemsContainerRef);
    const { highlightedItem: itemToHighlight } = reducerRef.current('INITIALIZE_MENU', {
      highlightedItem: firstSelectedItem ?? firstHighlightableItem,
    });

    setHighlightedItem(itemToHighlight as HTMLElement | null);
  }, [listItemsContainerRef, disableAutoHighlight, reducerRef, disableNavigationOnMount]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const _highlightedItem = highlightedItemRef.current;
      if (!listItemsContainerRef) return;
      const nextItemToHighlight = getNextHighlightedItem(
        event,
        ownerDocument?.body.contains(_highlightedItem) ? _highlightedItem : null,
        listItemsContainerRef
      );

      const { turnOffKeyboardNavigation: turnOffCurrentMenuNavigation } = getMenuInfo?.(listItemsContainerRef) || {};

      if (event.key === 'ArrowLeft') {
        const { turnOnKeyboardNavigation: turnOnParentMenuNavigation } =
          getParentMenuInfo?.(listItemsContainerRef) || {};

        // stopping event as event propogates to parent nested menu and closes that too.
        if (turnOnParentMenuNavigation) {
          turnOffCurrentMenuNavigation?.();
          event.stopPropagation();
        }
        turnOnParentMenuNavigation?.();
      } else if (
        // Open child menu on ArrowRight and SpaceBar
        (event.key === 'ArrowRight' || event.key === ' ') &&
        _highlightedItem?.dataset.haschildmenu === 'true'
      ) {
        setNestedMenuOpen(true);
        turnOffCurrentMenuNavigation?.();

        // Stop scrolling the menu
        event.preventDefault();
      } else if (event.key === 'Tab' && selectOnTab) {
        _highlightedItem?.click();
        event.preventDefault();
      }
      setHighlightedItem(nextItemToHighlight, true);

      /**
       * When Menu mounts for the first time inside popover, it renders outside visible viewport until popover measures position of anchor/target element.
       * By calling `scrollIntoView` after keydown(instead useEffect), avoiding scrollIntoView call for the first render.
       */
      nextItemToHighlight?.scrollIntoView?.({ block: 'nearest' });
    },
    [getMenuInfo, getParentMenuInfo, highlightedItemRef, listItemsContainerRef, ownerDocument?.body, selectOnTab]
  );

  useEffect(() => {
    if (!navigationEnabled) {
      return undefined;
    }
    const listContainer = listItemsContainerRef;
    if (focusWhenNavigationEnabled && listContainer) {
      /**
       * When Menu is opened inside popover, prevent it from scrolling to top.
       */
      listContainer.focus({ preventScroll: true });
      listContainer.addEventListener('keydown', handleKeyDown);
      // automatically disable navigation if element is blurred
      listContainer.addEventListener('blur', turnOffKeyboardNavigation);
      return (): void => {
        listContainer.removeEventListener('keydown', handleKeyDown);
        listContainer.removeEventListener('blur', turnOffKeyboardNavigation);
      };
    }
    ownerDocument?.body.addEventListener('keydown', handleKeyDown);
    return (): void => {
      ownerDocument?.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    ownerDocument,
    focusWhenNavigationEnabled,
    handleKeyDown,
    listItemsContainerRef,
    navigationEnabled,
    turnOffKeyboardNavigation,
  ]);

  return {
    highlightedItem,
    setHighlightedItem,
    listItemFocusVisible,
    turnOffKeyboardNavigation,
    turnOnKeyboardNavigation,
    navigationEnabled,
    nestedMenuOpen,
    setNestedMenuOpen,
  };
};

export default useKeyboardNavigation;
