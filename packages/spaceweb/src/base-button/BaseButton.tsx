import { forwardRef, useCallback } from 'react';
import { BaseButtonProps } from './types';
import { useFocusVisible } from '../hooks/useFocusVisible';
import { StyledBaseButton } from './styled-components';

const isNotAllyElement = (props): boolean => props.$as && !(props.$as === 'button' || props.$as === 'a');

export const BaseButton = forwardRef<HTMLElement, BaseButtonProps>((props, ref) => {
  const baseButtonProps: BaseButtonProps = {};
  const focusProps = useFocusVisible(props);

  const handleKeyPress = useCallback(
    event => {
      event.preventDefault();
      if (event.key === 'Enter' || event.key === ' ') {
        props.onClick?.(event);
      }
      props.onKeyPress?.(event);
    },
    [props.onClick, props.onKeyPress]
  );

  if (isNotAllyElement(props)) {
    baseButtonProps.onKeyPress = handleKeyPress;
    baseButtonProps.role = 'button';
    baseButtonProps.tabIndex = props.disabled ? -1 : props.tabIndex || 0;
    baseButtonProps['aria-disabled'] = Boolean(props.disabled);
  }
  return <StyledBaseButton {...props} {...baseButtonProps} {...focusProps} ref={ref} />;
});

BaseButton.displayName = 'BaseButton';
