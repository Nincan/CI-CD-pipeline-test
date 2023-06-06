import { Popover as BasePopover } from 'baseui/popover';
import * as React from 'react';
import { useMemo } from 'react';
import { useOverrides } from '../overrides';
import { useContent, useFocusLock } from './hooks';
import useUniqueId from '../hooks/useUniqueId';

import { PopoverChildEnhancer } from './PopoverEnahncer';
import { useConvertOverrides } from '../helpers/baseui/useConvertOverrides';
import { LayersManager, Z_INDEX } from '../layer';
import { accessibilityMap, placementMap, rtlPlacementMap, triggerTypeMap } from './adapter';
import { arrowStyles, getBodyStyles, getInnerStyles } from './overrides';
import { StyledArrowTriangle } from './styled-components';

import { PopoverProps, SharedProps } from './types';
import useCombinedRefs from '../hooks/useCombinedRef';
import { useStyle } from '../style';
import { getPopperOptions } from './utils';

// @ts-ignore
BasePopover.displayName = 'BaseUIPopover';

const Popover = React.forwardRef<HTMLElement, PopoverProps>(
  (
    {
      overrides,
      children,
      placement = 'auto',
      accessibilityType,
      triggerType = 'click',
      showArrow = false,
      targetElement,
      isOpen,
      focusLock = false,
      returnFocus = triggerType === 'click',
      content,
      popperOptions,
      ignoreBoundary,
      viewportAsBoundary,
      ...restProps
    }: PopoverProps,
    ref
  ): React.ReactElement => {
    const { setContentHost, wrappedContent } = useContent({ content });
    const { isRTL } = useStyle();
    const focusLockProps = useFocusLock({ returnFocus, focusLock });
    const [ArrowTriangle, arrowTriangleProps] = useOverrides(overrides?.ArrowTriangle, StyledArrowTriangle);
    const _overrides = useConvertOverrides<SharedProps>(
      {
        Body: { style: getBodyStyles },
        Arrow: { style: arrowStyles, props: { children: <ArrowTriangle {...arrowTriangleProps} /> } },
        Inner: { style: getInnerStyles, props: { ref: setContentHost } },
      },
      overrides,
      [overrides, setContentHost]
    );
    const mappedProps = {
      placement: placement && isRTL ? rtlPlacementMap[placement] : placementMap[placement],
      accessibilityType: accessibilityType && accessibilityMap[accessibilityType],
      triggerType: triggerType && triggerTypeMap[triggerType],
    };
    const combinedRef = useCombinedRefs(ref, restProps.innerRef);
    let childNode: React.ReactNode = children;
    if (typeof children === 'function') {
      childNode = children({ isOpen });
    }
    const id = useUniqueId();
    const mergedPopperOptions = useMemo(
      () => ({
        ...getPopperOptions({ ignoreBoundary, viewportAsBoundary }),
        ...popperOptions,
      }),
      [popperOptions, ignoreBoundary, viewportAsBoundary]
    );

    return (
      <LayersManager zIndex={Z_INDEX.POPOVER}>
        <BasePopover
          id={id}
          {...restProps}
          {...mappedProps}
          showArrow={showArrow}
          isOpen={isOpen}
          overrides={_overrides}
          innerRef={combinedRef}
          content={wrappedContent}
          {...focusLockProps}
          popperOptions={mergedPopperOptions}
        >
          <PopoverChildEnhancer targetElement={targetElement}>{childNode}</PopoverChildEnhancer>
        </BasePopover>
      </LayersManager>
    );
  }
);

Popover.displayName = 'Popover';

export default Popover;
