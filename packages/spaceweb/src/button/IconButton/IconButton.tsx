import { forwardRef, Children } from 'react';
import _omit from 'lodash/omit';

import { mergeOverrides } from '../../overrides';
import { useStyle } from '../../style';
import Button from '../Button';
import { iconButtonStyles, renderIconButtonChild } from './styled-components';
import { IconButtonProps, SharedProps } from './types';
import { getDefaultSize } from '../../helpers/themeHelpers';

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { theme } = useStyle();
  const { bordered, size: _size, className, style, variant = 'minimal', shape = 'round', ...buttonProps } = props;

  const size = _size ?? getDefaultSize(theme);
  const overrides = mergeOverrides<SharedProps>(
    {
      BaseButton: {
        style: [iconButtonStyles, className, style],
        props: { $bordered: bordered, $size: size, $isIconButton: true },
      },
    },
    buttonProps.overrides
  );

  const ariaLabel =
    typeof buttonProps.tooltipContent === 'string' && !buttonProps.isLoading ? buttonProps.tooltipContent : undefined;
  return (
    <Button
      variant={variant}
      shape={shape}
      // baseui adds aria-label loading when isLoading is true
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      {...buttonProps}
      overrides={overrides}
      ref={ref}
    >
      {Children.map(props.children, renderIconButtonChild.bind(null, theme, size))}
    </Button>
  );
});
IconButton.displayName = 'IconButton';

export default IconButton;
