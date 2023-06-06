import { Dispatch, SetStateAction } from 'react';
import * as React from 'react';
import { ListItemProps, ListProps } from '../list';
import { Override } from '../overrides';
import { PopoverProps } from '../popover';

export type MenuItemProps = Omit<ListItemProps, 'overrides' | 'onMouseEnter' | 'onMouseLeave'> & {
  getChildMenu?: () => null | React.ReactElement;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  // For SEO reasons
  renderAll?: boolean;
  overrides?: {
    ListItem?: Override<ListItemProps & Record<string, any>>;
    Popover?: Override<PopoverProps & Record<string, any>>;
  };
};
type State = { highlightedItem: HTMLElement | null };
export type ActionType = 'INITIALIZE_MENU';
export type Reducer = (type: ActionType, nextState: State) => State;
export type MenuProps = Omit<ListProps, 'overrides'> & {
  /**
   * Navigation starts as soon as Menu mounts. Flag this prop true to disable this behaviour.
   * e.g. In nested menu we don't want navigationOnMount behavior
   */
  disableNavigationOnMount?: boolean;
  /**
   * Should Menu be focused when keyboard navigation is on.
   * true (default) - Menu will be focused as soon as you hover mouse on Menu. keyboard navigation will be disabled only when MenuList is blurred.
   * false (useful with select) - Menu will not focus. Once navigation is enabled, you cannot stop it(because onBlur will not be called in any case) till the Menu is unmounted.
   */
  focusWhenNavigationEnabled?: boolean;
  overrides?: {
    List?: Override<ListProps & Record<string, any>>;
  };
  onHighlightedItemChange?: (item?: HTMLElement | null) => void;
  /**
   * By default 1st item or selected item will be highlighted on mount. If true, no item will be highlighted on mount.
   */
  disableAutoHighlight?: boolean;
  /**
   * If true, none of the MenuItem will be highlighted when mouse leaves the Menu.
   */
  resetMenuHighlightOnMouseLeave?: boolean;
  /**
   * @deprecated This prop will be removed. use resetMenuHighlightOnMouseLeave
   */
  resetMenuOnMouseLeave?: boolean;
  // Reducer is yet to be supported fully by Menu component, this may change in future.
  reducer?: Reducer;
  captureScroll?: boolean;
  selectOnTab?: boolean;
};
type MenuActions = {
  turnOnKeyboardNavigation?: () => void;
  turnOffKeyboardNavigation?: () => void;
  setHighlightedItem?: Dispatch<SetStateAction<HTMLElement | null>>;
};
export type MenuRef = HTMLElement & MenuActions;

export type TraversalFunction = (
  highlightedItemIndex: HTMLElement | null,
  parentContainer: HTMLElement
) => HTMLElement | null;

export type ContextMenuInfo = {
  menuRef: HTMLElement;
  turnOnKeyboardNavigation: () => void;
  turnOffKeyboardNavigation: () => void;
};

export type ContextValue = Partial<{
  registerMenu: (menuInfo: ContextMenuInfo) => void;
  unregisterMenu: (menuRef?: HTMLElement) => void;
  getMenuInfo: (menuRef: HTMLElement) => ContextMenuInfo;
  getChildMenuInfo: (menuRef: HTMLElement) => ContextMenuInfo;
  getParentMenuInfo: (menuRef: HTMLElement) => ContextMenuInfo;
  getRootMenuInfo: () => ContextMenuInfo;
}>;
