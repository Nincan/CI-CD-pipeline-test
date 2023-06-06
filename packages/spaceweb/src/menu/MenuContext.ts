import { createContext, useContext } from 'react';

type MenuContextValue = {
  highlightedItem: HTMLElement | null;
  setHighlightedItem: (item: HTMLElement | null, showFocusVisibleStyles?: boolean) => void;
  setMenuContainerRef: (ref: HTMLElement | null) => void;
  nestedMenuOpen: boolean;
  listItemFocusVisible: boolean;
  setNestedMenuOpen: (open: boolean) => void;
};
const MenuContext = createContext<MenuContextValue>({
  highlightedItem: null,
  setHighlightedItem: () => null,
  setMenuContainerRef: () => null,
  nestedMenuOpen: false,
  listItemFocusVisible: false,
  setNestedMenuOpen: () => null,
});

export const MenuProvider = MenuContext.Provider;
export const useMenuContext = () => useContext(MenuContext);
