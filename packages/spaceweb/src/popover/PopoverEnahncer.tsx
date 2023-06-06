import { useEffect } from 'react';
import * as React from 'react';
import useCombinedRefs from '../hooks/useCombinedRef';

const __DEV__ = process.env.NODE_ENV !== 'production';

function getFirstElement(children: React.ReactNode): React.ReactElement {
  const childArray = React.Children.toArray(children);
  if (childArray.length !== 1) {
    console.error(`[spaceweb] Exactly 1 child must be passed to Popover/Tooltip, found ${childArray.length} children`);
  }
  const [child] = childArray;
  return React.isValidElement(child) && typeof child === 'object' ? child : <span>{child}</span>;
}

type ElementWithRef = React.ReactElement & { ref?: React.Ref<any> };
/**
 * Baseui overrides anchor element's ref. This component clones and stores anchor/child element's ref.
 * TODO: should be removed once https://github.com/uber/baseweb/issues/4032 is addressed
 */
export const PopoverRefHandler = React.forwardRef<HTMLElement | null | undefined, any>(
  ({ children, ...anchorProps }, ref) => {
    const childElement = getFirstElement(children);
    const childRef = (childElement as ElementWithRef).ref || null;
    const combinedRef = useCombinedRefs(ref, childRef);
    const childProps = { ...anchorProps, ref: combinedRef };

    return React.cloneElement(childElement, childProps);
  }
);
PopoverRefHandler.displayName = 'PopoverRefHandler';

export const TargetElementProxy = React.forwardRef<
  HTMLElement | null | undefined,
  { targetElement?: HTMLElement | null }
>(({ targetElement, ...anchorProps }, ref) => {
  useEffect(() => {
    if (!ref) return;
    if (typeof ref === 'object') {
      ref.current = targetElement;
    } else {
      ref(targetElement);
    }
    targetElement;
  }, [targetElement]);

  return null;
});

TargetElementProxy.displayName = 'PopoverTargetElementProxy';

type PopoverChildEnhancerProps = { children?: React.ReactNode; targetElement?: HTMLElement | null | undefined };
export const PopoverChildEnhancer = React.forwardRef<HTMLElement | null | undefined, PopoverChildEnhancerProps>(
  ({ children, targetElement, ...anchorProps }, ref) => {
    if (__DEV__) {
      // When targetElement is null (before ref to the element is set), it throws an unnecessary error, hence checking only for undefined
      if (typeof targetElement === 'undefined' && !children) {
        console.warn('[spaceweb] One of the children or targetElement should be provided to Popover');
      }
    }
    if (typeof targetElement !== 'undefined') {
      return <TargetElementProxy ref={ref} targetElement={targetElement} {...anchorProps} />;
    }
    return (
      <PopoverRefHandler ref={ref} {...anchorProps}>
        {children}
      </PopoverRefHandler>
    );
  }
);

PopoverChildEnhancer.displayName = 'PopoverChildEnhancer';
