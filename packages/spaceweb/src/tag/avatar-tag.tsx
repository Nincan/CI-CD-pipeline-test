import { useCallback, useMemo, ReactElement } from 'react';
import { Avatar } from '../avatar';
import Tag from './tag';
import { AvatarTagProps } from './types';
import { useStyle } from '../style';
import { getDefaultTagSize, getTagSizeTheme } from './utils';

const AvatarTag = (props: AvatarTagProps): ReactElement => {
  const { avatarProps, startEnhancer, className, size: _size, ...tagProps } = props;
  const { theme } = useStyle();

  const size = _size ?? getDefaultTagSize(theme);
  const { avatarIconSize } = getTagSizeTheme(theme, size);

  let customTagOverrides = {
    StartEnhancer: {
      style: ({}, { $size }) => ($size === 'lg' ? { marginLeft: '8px' } : {}),
    },
    Action: {
      style: ({}, { $size }) => ($size === 'lg' ? { marginRight: '4px' } : {}),
    },
  };

  const startEnhancerOverride = useCallback(
    sharedProps => (
      <>
        {typeof startEnhancer === 'function' ? startEnhancer(sharedProps) : startEnhancer}
        <Avatar size={avatarIconSize} {...avatarProps} className={[avatarProps?.className]} />
      </>
    ),
    [avatarProps, startEnhancer, avatarIconSize]
  );

  const mergedClassName = useMemo(() => [className], [className]);

  return (
    <Tag
      overrides={customTagOverrides}
      size={size}
      startEnhancer={startEnhancerOverride}
      className={mergedClassName}
      {...tagProps}
    />
  );
};

export default AvatarTag;
