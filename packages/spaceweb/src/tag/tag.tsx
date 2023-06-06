import { forwardRef, useCallback } from 'react';
import _omit from 'lodash/omit';
import { IconButton } from '../button';

import { useFocusVisible } from '../hooks/useFocusVisible';
import CloseIcon from '../icon/components/close';
import { useOverrides } from '../overrides';
import { useStyle } from '../style';
import { StyledAction, StyledRoot, StyledStartEnhancer, StyledText } from './styled-components';
import { SharedProps, TagProps } from './types';
import { getDefaultTagSize, getTagSizeTheme, getTextFromChildren } from './utils';
import { useLocale } from '../locale';
import { borderRadius } from '../helpers/longHandHelpers';

const Tag = forwardRef<HTMLElement, TagProps>((props, ref) => {
  const {
    children,
    closeable = true,
    size: _size,
    isFocused = false,
    isHovered = false,
    onActionClick,
    onActionKeyDown,
    onClick = null,
    onKeyDown = null,
    overrides,
    title,
    variant = 'light',
    intent = 'default',
    className,
    startEnhancer,
    ...restProps
  } = props;
  const { $isFocusVisible, onBlur, onFocus } = useFocusVisible();
  const { theme } = useStyle();

  const size = _size ?? getDefaultTagSize(theme);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.currentTarget !== event.target) {
        return;
      }
      const key = event.key;
      if (onClick && key === 'Enter') {
        onClick(event);
      }
      if (closeable && (key === 'Backspace' || key === 'Delete')) {
        onActionClick?.(event);
        onActionKeyDown?.(event);
      }
      if (onKeyDown) {
        onKeyDown(event);
      }
    },
    [closeable, onActionClick, onActionKeyDown, onClick, onKeyDown]
  );

  const [Root, rootProps] = useOverrides(overrides?.Root, StyledRoot);
  const [Action, actionProps] = useOverrides(overrides?.Action, StyledAction);
  const [ActionIcon, actionIconProps] = useOverrides(overrides?.ActionIcon, CloseIcon);
  const [Text, textProps] = useOverrides(overrides?.Text, StyledText);
  const [StartEnhancer, startEnhancerProps] = useOverrides(overrides?.StartEnhancer, StyledStartEnhancer);
  const clickable = typeof onClick === 'function';

  const sharedProps: SharedProps = {
    $clickable: clickable,
    $closeable: closeable,
    $isFocused: isFocused,
    $isHovered: isHovered,
    $variant: variant,
    $isFocusVisible,
    $size: size,
    $withStartEnhancer: !!startEnhancer,
    $intent: intent,
  };
  const titleText = title || getTextFromChildren(children);

  const { clearableIconSize, clearableIconButtonSize, clearableIconButtonBorderRadius } = getTagSizeTheme(theme, size);

  const actionIconButtonOverrides = {
    BaseButton: {
      style: {
        height: clearableIconButtonSize,
        width: clearableIconButtonSize,
        ...borderRadius(clearableIconButtonBorderRadius),
      },
    },
  };

  const locale = useLocale();
  return (
    <Root
      ref={ref}
      data-spaceweb="tag"
      role={clickable ? 'button' : null}
      tabIndex={clickable ? 0 : null}
      onFocus={onFocus}
      onBlur={onBlur}
      className={className}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...sharedProps}
      {...restProps}
      {...rootProps}
    >
      {startEnhancer && (
        <StartEnhancer {...sharedProps} {...startEnhancerProps}>
          {/*@ts-ignore*/}
          {typeof startEnhancer === 'function' ? startEnhancer(sharedProps) : startEnhancer}
        </StartEnhancer>
      )}
      <Text title={titleText} {...sharedProps} {...textProps}>
        {children}
      </Text>
      {closeable ? (
        <Action
          aria-hidden
          role="presentation"
          onClick={onActionClick}
          {...sharedProps}
          {..._omit(actionProps, 'tabIndex')}
        >
          <IconButton
            shape="square"
            type="button"
            className="hover:spr-clr-grey"
            aria-label={locale.tag.closeAriaLabel}
            overrides={actionIconButtonOverrides}
            tabIndex={actionProps?.tabIndex as number}
          >
            <ActionIcon size={clearableIconSize} {...actionIconProps} />
          </IconButton>
        </Action>
      ) : null}
    </Root>
  );
});
Tag.displayName = 'Tag';

export default Tag;
