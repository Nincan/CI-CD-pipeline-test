import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as React from 'react';
import { getComponentTheme } from '../helpers/themeHelpers';
import useCombinedHandler from '../hooks/useCombinedHandler';
import useCombinedRefs from '../hooks/useCombinedRef';
import { useLatest } from '../hooks/useLatest';
import useUniqueId from '../hooks/useUniqueId';
import ChevronDown from '../icon/components/chevron-down';
import ListItem from '../list/list-item';
import { mergeOverrides, Overrides, useOverrides } from '../overrides';
import { Popover } from '../popover';
import { useLocale } from '../locale';
import { canHighlightItem } from './helpers';
import { useMenuContext } from './MenuContext';
import { MenuItemProps } from './types';
import cx from '../classNames';

const listItemOverrides = {
  ListItem: {
    props: {
      overrides: {
        Root: {
          style: ({ getStyle, theme }, { $disabled, $highlighted, $selected, $outlined }) => {
            const { hoverBackgroundColor } = getComponentTheme(theme, 'list');
            return getStyle(cx({ 'outline-01 outline-offset-0': $outlined }), {
              backgroundColor: $highlighted || $selected ? hoverBackgroundColor : 'none',
              cursor: $disabled ? 'not-allowed' : 'pointer',
            });
          },
        },
      },
    },
  },
};

const MenuItem = React.forwardRef<HTMLElement, MenuItemProps>(
  (
    {
      selected,
      highlighted,
      overrides,
      getChildMenu,
      onMouseEnter,
      onMouseLeave,
      onMouseOver,
      renderAll,
      ...restProps
    },
    ref
  ) => {
    const [hovered, setHovered] = useState(false);
    const ChildMenu = getChildMenu?.();
    const ownRef = useRef<HTMLElement | null>(null);
    const itemRef = useCombinedRefs(ref, ownRef);
    const {
      highlightedItem,
      setHighlightedItem,
      setMenuContainerRef,
      listItemFocusVisible,
      nestedMenuOpen,
      setNestedMenuOpen,
    } = useMenuContext();
    const locale = useLocale();

    useEffect(() => {
      setMenuContainerRef(ownRef.current?.parentElement ?? null);
    }, [setMenuContainerRef]);
    const isItemHighlighted = highlighted || (highlightedItem !== null && highlightedItem === ownRef.current);

    const mergedOverrides = useMemo(() => mergeOverrides(listItemOverrides, overrides as Overrides), [overrides]);
    const [ListItemOverride, listItemProps] = useOverrides(mergedOverrides?.ListItem, ListItem);
    const [PopoverOverride, popoverProps] = useOverrides(mergedOverrides?.Popover, Popover);

    const onMouseOverRef = useLatest(onMouseOver);
    const handleMouseOver: React.MouseEventHandler<HTMLElement> = useCallback(
      e => {
        onMouseOverRef.current?.(e);
        if (canHighlightItem(ownRef.current)) {
          setHighlightedItem(ownRef.current);
        }
      },
      [onMouseOverRef, setHighlightedItem]
    );

    const resetMenu = useCallback(() => setHighlightedItem(null), [setHighlightedItem]);
    const closeNestedMenu = useCallback(() => setNestedMenuOpen(false), [setNestedMenuOpen]);
    const id = useUniqueId();

    const listItem = (
      <ListItemOverride
        id={id.toString()}
        ref={itemRef}
        role="menuitem"
        aria-label={ChildMenu ? locale.menu.nestedMenuItemAriaLabel : undefined}
        selected={selected}
        aria-selected={selected}
        data-haschildmenu={Boolean(ChildMenu)}
        highlighted={isItemHighlighted}
        $outlined={isItemHighlighted && listItemFocusVisible}
        endEnhancer={ChildMenu && <ChevronDown size={10} className="transform -rotate-90" />}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...restProps}
        onMouseOver={handleMouseOver}
        {...listItemProps}
      />
    );

    const handleMouseEnter = useCombinedHandler(() => setHovered(true), onMouseEnter);
    const handleMouseLeave = useCombinedHandler(() => setHovered(false), onMouseLeave);

    // when we have opened child menu using hover, then after switching to keyboard hovered state remains true
    // and opens child menu without pressing left arrow key
    useEffect(() => {
      if (!isItemHighlighted) {
        setHovered(false);
      }
    }, [setHovered, isItemHighlighted]);

    if (!ChildMenu) {
      return listItem;
    }

    return (
      <PopoverOverride
        content={ChildMenu}
        isOpen={isItemHighlighted && (hovered || nestedMenuOpen)}
        placement="rightTop"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseLeaveDelay={30}
        triggerType="hover"
        renderAll={renderAll}
        onClickOutside={resetMenu}
        onEsc={closeNestedMenu}
        {...popoverProps}
      >
        {listItem}
      </PopoverOverride>
    );
  }
);
MenuItem.displayName = 'MenuItem';

export default React.memo(MenuItem);
