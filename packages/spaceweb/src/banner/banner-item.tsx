import { forwardRef, memo } from 'react';
import { BannerItemProps } from './types';
import { useOverrides } from '../overrides';
import { StyledBannerItem } from './styled-component';

const BannerItem = forwardRef<HTMLElement, BannerItemProps>(({ overrides = {}, children, ...restProps }, ref) => {
  const [Root, rootProps] = useOverrides(overrides.Root, StyledBannerItem);
  return (
    <Root data-spaceweb="banner-item" role="listitem" {...rootProps} {...restProps} ref={ref}>
      {children}
    </Root>
  );
});

BannerItem.displayName = 'BannerItem';

export default memo(BannerItem);
