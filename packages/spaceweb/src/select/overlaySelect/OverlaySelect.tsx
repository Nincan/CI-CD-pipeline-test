import { useState } from 'react';
import _omit from 'lodash/omit';
import { useOverrides } from '../../overrides';
import { Popover } from '../../popover';
import BaseSelect from '../base-select';
import { StyledOverlayContentContainer } from '../styled-component';
import { OverlaySelectProps } from '../types';
import useOverlaySelectOverrides from './hooks/useOverlaySelectOverrides';
import useScrollCapture from '../../hooks/useScrollCapture';
import useCombinedRefs from '../../hooks/useCombinedRef';

// These props are handled by OverlaySelect itself and hence should not be passed to BaseSelect
const propsToOmit = [
  'children',
  'overrides',
  'closeOnSelect',
  'onChange',
  'startOpen',
  'searchable',
  'inputRef',
  'controlRef',
  'autoFocus',
  'placeholder',
  'isLoading',
  'onInputChange',
  'onOpen',
  'onClose',
  'filterOptions',
  'overlayWidth',
  'disabled',
  'captureScroll',
  'placement',
  'methodsRef',
  'ignoreBoundary',
  'scrollContainer',
];
const OverlaySelect = (props: OverlaySelectProps) => {
  const [OverlayContentContainer, overlayContentContainerProps] = useOverrides(
    props.overrides?.OverlayContentContainer,
    StyledOverlayContentContainer
  );

  const [scrollElement, setScrollElement] = useState<HTMLElement | null>(null);

  const [PopoverOverriden, popoverProps] = useOverrides(props.overrides?.Popover, Popover);
  const setScrollTarget = useScrollCapture({ enabled: props.captureScroll });
  const combinedRef = useCombinedRefs(
    setScrollElement as (el: HTMLElement) => void,
    setScrollTarget,
    overlayContentContainerProps?.ref as (el: HTMLElement) => void
  );

  const { popoverOpen, filterOptionsOverride, handleValuesChange, overrides, togglePopoverState, closePopover } =
    useOverlaySelectOverrides({ ...props, scrollElement });

  const baseSelectProps = _omit(props, propsToOmit);

  if (props.disabled) {
    if (typeof props.children === 'function') {
      return props.children({ isOpen: false });
    }
    return props.children;
  }

  return (
    <PopoverOverriden
      isOpen={popoverOpen}
      content={
        <OverlayContentContainer
          $closePopover={closePopover}
          $overlayWidth={props.overlayWidth}
          {...overlayContentContainerProps}
          ref={combinedRef}
        >
          <BaseSelect
            {...baseSelectProps}
            filterOptions={filterOptionsOverride}
            onChange={handleValuesChange}
            overrides={overrides}
            type="search"
          />
        </OverlayContentContainer>
      }
      onClick={togglePopoverState}
      onClickOutside={closePopover}
      onEsc={closePopover}
      placement={props.placement ?? 'bottom'}
      focusLock
      returnFocus
      overrides={{ Inner: { style: 'spr-ui-01' }, Arrow: { style: 'spr-ui-01' } }}
      mountNode={props.mountNode}
      ignoreBoundary={props.ignoreBoundary}
      {...popoverProps}
    >
      {props.children}
    </PopoverOverriden>
  );
};
export default OverlaySelect;
