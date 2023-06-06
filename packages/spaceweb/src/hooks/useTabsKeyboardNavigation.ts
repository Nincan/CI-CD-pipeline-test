import { useCallback, useRef, KeyboardEvent, RefObject } from 'react';
import { Direction } from '@sprinklr/spaceweb-themes/types';
import { useTheme } from '../theme';

export enum KEYBOARD_ACTION {
  next = 'next',
  previous = 'previous',
}

type Layout = 'horizontal' | 'vertical';

function parseKeyDown(event: KeyboardEvent, direction?: Direction, layout?: Layout): KEYBOARD_ACTION | null {
  if (layout === 'vertical') {
    switch (event.key) {
      case 'ArrowDown':
        return KEYBOARD_ACTION.next;
      case 'ArrowUp':
        return KEYBOARD_ACTION.previous;
      default:
        return null;
    }
  } else if (direction === 'rtl') {
    switch (event.key) {
      case 'ArrowLeft':
        return KEYBOARD_ACTION.next;
      case 'ArrowRight':
        return KEYBOARD_ACTION.previous;
      default:
        return null;
    }
  } else {
    switch (event.key) {
      case 'ArrowLeft':
        return KEYBOARD_ACTION.previous;
      case 'ArrowRight':
        return KEYBOARD_ACTION.next;
      default:
        return null;
    }
  }
}

export const useTabsKeyboardNavigation = ({
  layout,
  activateOnFocus,
}: {
  layout?: Layout;
  activateOnFocus?: boolean;
}): { parentElementRef: RefObject<HTMLElement>; onKeyDown: (event: KeyboardEvent<HTMLElement>) => void } => {
  const parentElementRef = useRef<HTMLElement>(null);
  const { direction } = useTheme();

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      const keyAction = parseKeyDown(event, direction, layout);
      const childNodeArray = parentElementRef.current?.childNodes
        ? Array.from(parentElementRef.current?.childNodes)
        : [];
      const children = childNodeArray.filter(
        child => child.nodeType === Node.ELEMENT_NODE && !(child as Element).hasAttribute('disabled')
      );
      const activeChildIndex = children.findIndex(child => child === event.target);

      let nextChild;
      if (keyAction === KEYBOARD_ACTION.next) {
        if (activeChildIndex === children.length - 1) {
          nextChild = children[0];
        } else {
          nextChild = children[activeChildIndex + 1];
        }

        //stop scrolling when tabs are vertically aligned
        if (layout === 'vertical') {
          event.preventDefault();
        }
      } else if (keyAction === KEYBOARD_ACTION.previous) {
        if (activeChildIndex === 0) {
          nextChild = children[children.length - 1];
        } else {
          nextChild = children[activeChildIndex - 1];
        }

        //stop scrolling when tabs are vertically aligned
        if (layout === 'vertical') {
          event.preventDefault();
        }
      } else {
        switch (event.key) {
          case 'Home': {
            nextChild = children[0];
            break;
          }
          case 'End': {
            nextChild = children[children.length - 1];
            break;
          }
          default:
            break;
        }
      }

      if (nextChild) {
        nextChild.focus();
        if (activateOnFocus) {
          nextChild.click();
        }
      }
    },
    [direction, layout, activateOnFocus]
  );

  return { parentElementRef, onKeyDown };
};
