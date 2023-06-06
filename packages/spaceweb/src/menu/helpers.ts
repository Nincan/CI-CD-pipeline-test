import { Reducer, TraversalFunction } from './types';

const nextItem: TraversalFunction = (highlightedItem, parentContainer) => {
  if (highlightedItem) {
    return (highlightedItem?.nextElementSibling ?? highlightedItem) as HTMLElement | null;
  }
  return parentContainer.firstElementChild as HTMLElement | null;
};
const prevItem: TraversalFunction = highlightedItem =>
  (highlightedItem?.previousElementSibling ?? highlightedItem) as HTMLElement | null;

/**
 * Checks if given item can be highlighted
 */
export const canHighlightItem = (item?: HTMLElement | null): boolean => item?.getAttribute('aria-disabled') !== 'true';

/**
 * https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/MenuList/MenuList.js
 * Get index of next element which is not disabled
 */
const getNextItemIndexToHighlight = (
  highlightedItem: HTMLElement | null,
  parentContainer: HTMLElement,
  traversalFunction: TraversalFunction
): HTMLElement | null => {
  let previousItem = highlightedItem,
    nextHighlightableItem = traversalFunction(highlightedItem, parentContainer);
  while (previousItem !== nextHighlightableItem) {
    if (!canHighlightItem(nextHighlightableItem)) {
      previousItem = nextHighlightableItem;
      // Move to the next element.
      nextHighlightableItem = traversalFunction(previousItem, parentContainer);
    } else {
      return nextHighlightableItem;
    }
  }
  return highlightedItem;
};

export const getFirstHighlightableElement = (listItemsContainerRef: HTMLElement) => {
  let childItem: HTMLElement | null = (listItemsContainerRef.firstElementChild as HTMLElement) ?? null,
    firstHighlightableItem: HTMLElement | null = null,
    firstSelectedItem: HTMLElement | null = null;

  while (childItem) {
    if (!firstHighlightableItem && canHighlightItem(childItem as HTMLElement)) {
      firstHighlightableItem = childItem;
    }
    if (childItem.getAttribute('aria-selected') === 'true') {
      firstSelectedItem = childItem;
      break;
    }
    childItem = childItem?.nextElementSibling as HTMLElement | null;
  }
  return { firstHighlightableItem, firstSelectedItem };
};

const getNextHighlightedItem = (
  event: KeyboardEvent,
  highlightedItem: HTMLElement | null,
  parentContainer: HTMLElement
): HTMLElement | null => {
  switch (event.key) {
    case 'ArrowDown':
    case 'End':
      event.preventDefault(); // prevent body scroll
      return getNextItemIndexToHighlight(highlightedItem, parentContainer, nextItem);
    case 'ArrowUp':
    case 'Home':
      event.preventDefault();
      return getNextItemIndexToHighlight(highlightedItem, parentContainer, prevItem);
    case 'Enter': {

      // IME docs - If an Input Method Editor is processing key input and the event is keydown, return 229. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
      // related PR in baseweb - https://github.com/uber/baseweb/pull/2284
      if(event.keyCode === 229) {
        break;
      }
      /**
       * This event is being captured by document body,
       * we have to manually trigger click event on listItem as listItem is not focused and so onKeyDown event won't be captured by listItem
       */
      if (highlightedItem) highlightedItem.click();
      // prevents default enterKey event. Not required as highlightedItem.click is triggered
      event.preventDefault();
      break;
    }
    default:
  }
  return highlightedItem;
};

export const defaultReducer: Reducer = (type, state) => state;

export { getNextHighlightedItem };
