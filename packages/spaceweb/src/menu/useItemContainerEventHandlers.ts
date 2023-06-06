import _noop from 'lodash/noop';
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';

type Params = {
  turnOnKeyboardNavigation?: () => void;
  resetMenuHighlightOnMouseLeave?: boolean;
  focusWhenNavigationEnabled?: boolean;
  setHighlightedItem: Dispatch<SetStateAction<HTMLElement | null>>;
  listItemsContainer: HTMLElement | null;
};

/**
 * Attaches/removes event handlers to listItemContainer
 */
const useItemContainerEventHandlers = ({
  turnOnKeyboardNavigation = _noop,
  resetMenuHighlightOnMouseLeave,
  setHighlightedItem,
  listItemsContainer,
  focusWhenNavigationEnabled,
}: Params): void => {
  const resetMenuHighlight = useCallback(() => {
    if (resetMenuHighlightOnMouseLeave) {
      setHighlightedItem(null);
    }
  }, [resetMenuHighlightOnMouseLeave, setHighlightedItem]);

  useEffect(() => {
    if (!focusWhenNavigationEnabled) return undefined;

    listItemsContainer?.addEventListener('focus', turnOnKeyboardNavigation);
    listItemsContainer?.addEventListener('mouseenter', turnOnKeyboardNavigation);
    return (): void => {
      listItemsContainer?.removeEventListener('focus', turnOnKeyboardNavigation);
      listItemsContainer?.removeEventListener('mouseenter', turnOnKeyboardNavigation);
    };
  }, [focusWhenNavigationEnabled, listItemsContainer, turnOnKeyboardNavigation]);

  useEffect(() => {
    listItemsContainer?.addEventListener('blur', resetMenuHighlight);
    listItemsContainer?.addEventListener('mouseleave', resetMenuHighlight);
    return (): void => {
      listItemsContainer?.removeEventListener('blur', resetMenuHighlight);
      listItemsContainer?.removeEventListener('mouseleave', resetMenuHighlight);
    };
  }, [resetMenuHighlight, listItemsContainer]);
};

export default useItemContainerEventHandlers;
