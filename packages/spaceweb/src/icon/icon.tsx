import { forwardRef } from 'react';
import { IconProps } from './types';
import { StyledSvg } from './styled-components';

const Icon = forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { children, title, size, ...restProps } = props;
  const sharedProps = {
    $size: size,
  };

  return (
    <StyledSvg data-spaceweb="icon" ref={ref} {...sharedProps} {...restProps}>
      {title ? <title>{title}</title> : null}
      {children}
    </StyledSvg>
  );
});

Icon.defaultProps = {
  size: 12,
};

Icon.displayName = 'Icon';
export default Icon;
