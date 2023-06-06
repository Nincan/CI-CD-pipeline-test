import * as React from 'react';
import { useVirtualizer, VirtualItem } from '@tanstack/react-virtual';

import { useOverrides } from '../overrides';
import useCombinedRef, { combineRefs } from '../hooks/useCombinedRef';
import { StyledList } from './styled-component';
import { Box } from '../box';

import { measureElement } from './utils';
import { ListProps } from './types';

const DEFAULT_LIST_ITEM_HEIGHT = 38;
const DEFAULT_OVER_SCAN_COUNT = 10;

const getCloneElement = (
  item: React.ReactElement,
  virtualRow: VirtualItem<React.ReactElement>,
  totalCount: number
): React.ReactElement =>
  React.cloneElement(item, {
    className: [
      'w-full absolute top-0 left-0 box-border',
      { transform: `translateY(${virtualRow.start}px)` },
      item.props.className,
    ],
    // @ts-ignore -- item.ref is not present in react types
    ref: combineRefs(virtualRow.measureElement, item.ref),
    'aria-posinset': item.props['aria-posinset'] ?? virtualRow.index + 1,
    'aria-setsize': item.props['aria-setsize'] ?? totalCount,
  });

const List = React.forwardRef<HTMLElement, ListProps>(
  (
    {
      overrides = {},
      children,
      virtual,
      scrollElement,
      overscanCount = DEFAULT_OVER_SCAN_COUNT,
      estimateItemSize = DEFAULT_LIST_ITEM_HEIGHT,
      role = 'list',
      ...restProps
    },
    forwardedRef
  ) => {
    const [Root, rootProps] = useOverrides(overrides.Root, StyledList);
    const parentRef = React.useRef(null);
    const combinedRef = useCombinedRef(parentRef, forwardedRef);
    const childrenArr = React.Children.toArray(children) as React.ReactElement[];

    const rowVirtualizer = useVirtualizer({
      count: childrenArr.length,
      getScrollElement: () => scrollElement || parentRef.current,
      estimateSize: () => estimateItemSize,
      overscan: overscanCount,
      measureElement,
    });
    if (virtual) {
      return (
        <Root data-spaceweb="list" $as="div" role={role} {...restProps} {...rootProps} ref={combinedRef}>
          <Box
            // NOTE: resetting margin and padding here. should be removed when normalize css merges
            className="w-full relative p-0 m-0"
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
            }}
            $as="ul"
          >
            {rowVirtualizer
              .getVirtualItems()
              .map(virtualRow => getCloneElement(childrenArr[virtualRow.index], virtualRow, childrenArr.length))}
          </Box>
        </Root>
      );
    }
    return (
      <Root data-spaceweb="list" role={role} {...restProps} {...rootProps} ref={combinedRef}>
        {children}
      </Root>
    );
  }
);

List.displayName = 'List';

export default React.memo(List);
