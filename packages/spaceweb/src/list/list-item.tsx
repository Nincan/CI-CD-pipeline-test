import { useCallback, useRef } from 'react';
import * as React from 'react';
import _noop from 'lodash/noop';

import useCombinedRefs from '../hooks/useCombinedRef';
import { useOverrides } from '../overrides';
import { StyledChildContainer, StyledEndEnhancer, StyledListItem, StyledStartEnhancer } from './styled-component';
import { Enhancer, ListItemProps, ListItemSharedProps } from './types';
import { useFocusVisible } from '../hooks/useFocusVisible';
import { StatefulTooltip as DefaultStatefulTooltip } from '../tooltip';

const ListItem = React.forwardRef<HTMLElement, ListItemProps>(
  (
    {
      startEnhancer,
      children,
      alignItems = 'center',
      disabled = false,
      endEnhancer,
      selected = false,
      highlighted = false,
      autoFocus = false,
      button = false,
      overrides = {},
      tabIndex = button ? 0 : undefined,
      $as = 'li',
      onClick,
      onKeyDown,
      onFocus,
      onBlur,
      tooltipContent = '',
      ...restProps
    },
    ref
  ) => {
    const ownRef = useRef<HTMLElement | null>(null);
    const combinedRef = useCombinedRefs(ref, ownRef);

    React.useEffect(() => {
      if (autoFocus && ownRef.current) {
        // When rendered in popover, browser scrolls to the top w/o preventScroll
        ownRef.current.focus({ preventScroll: true });
      }
    }, [autoFocus]);

    const useFocusVisibleProps = useFocusVisible({ onFocus, onBlur });

    const handleKeyDown: React.KeyboardEventHandler<HTMLElement> = useCallback(
      event => {
        // Keyboard accessibility for non interactive elements
        if (button && event.target === event.currentTarget && event.key === 'Enter' && !disabled) {
          if (onClick) {
            onClick(event);
          }
        }
        if (onKeyDown) {
          onKeyDown(event);
        }
      },
      [button, disabled, onClick, onKeyDown]
    );

    const [Root, rootProps] = useOverrides(overrides.Root, StyledListItem);
    const [ChildContainer, childContainerProps] = useOverrides(overrides.ChildContainer, StyledChildContainer);
    const [StartEnhancer, startEnhancerProps] = useOverrides(overrides.StartEnhancer, StyledStartEnhancer);
    const [EndEnhancer, endEnhancerProps] = useOverrides(overrides.EndEnhancer, StyledEndEnhancer);

    const sharedProps: ListItemSharedProps = {
      $withStartEnhancer: !!startEnhancer,
      $withEndEnhancer: !!endEnhancer,
      $alignItems: alignItems,
      $disabled: disabled,
      $selected: selected,
      $highlighted: highlighted,
      $button: button,
    };

    const renderEnhancer = (enhancer: Enhancer<ListItemSharedProps>): React.ReactNode =>
      typeof enhancer === 'function' ? enhancer(sharedProps) : enhancer;

    const [StatefulTooltip, statefulTooltipProps] = useOverrides(overrides?.StatefulTooltip, DefaultStatefulTooltip);

    const listEl = (
      <Root
        data-spaceweb="list-item"
        role="listitem"
        ref={combinedRef}
        tabIndex={tabIndex}
        aria-disabled={disabled}
        $as={$as}
        onClick={disabled ? _noop : onClick}
        onKeyDown={handleKeyDown}
        data-highlighted={highlighted}
        {...sharedProps}
        {...restProps}
        {...rootProps}
        {...useFocusVisibleProps}
      >
        {startEnhancer && (
          <StartEnhancer {...sharedProps} {...startEnhancerProps}>
            {renderEnhancer(startEnhancer)}
          </StartEnhancer>
        )}
        <ChildContainer {...sharedProps} {...childContainerProps}>
          {children}
        </ChildContainer>
        {endEnhancer && (
          <EndEnhancer {...sharedProps} {...endEnhancerProps}>
            {renderEnhancer(endEnhancer)}
          </EndEnhancer>
        )}
      </Root>
    );

    return tooltipContent ? (
      <StatefulTooltip placement="bottom" content={tooltipContent} {...statefulTooltipProps}>
        {listEl}
      </StatefulTooltip>
    ) : (
      listEl
    );
  }
);

ListItem.displayName = 'ListItem';

export default React.memo(ListItem);
