import { useState, ReactElement } from 'react';

import { Box } from '../box';
import DefaultUserIcon from '../icon/components/user';

import { AvatarProps } from './types';
import { StyledAvatar, StyledRoot, StyledInitials, avatarSizeConfig } from './styled-component';
import { useAvatarColor } from './useAvatarColor';
import { useStyle } from '../style';
import { add$props } from '../helpers';
import { cleanupDisplayName } from './utils/cleanupDisplayName';
import { Override, useOverrides } from '../overrides';
import { ClassName } from '../types';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';

/**
 * Regular expression matching phone numbers. Applied after chars matching UNWANTED_CHARS_REGEX have been removed
 * and number has been trimmed for whitespaces
 */
const PHONENUMBER_REGEX = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i;

type UserIconProps = {
  overrides?: {
    UserIcon?: Override<Record<string, any>>;
  };
  className?: ClassName;
};

function getInitials(name) {
  const words = name.split(' ');
  const initials = words.map(word => word[0]);
  return initials.slice(0, 2).join('').toUpperCase();
}

//If Image is already available in disk cache, then we should directly set isImageLoaded state to true, to avoid flicker between initials and avatar.
const getIsImageLoaded = (src: string | undefined): boolean => {
  const isServer = typeof window === 'undefined';

  if (!src || isServer) {
    return false;
  }

  const imageEl = new Image();
  imageEl.src = src;

  return imageEl.complete;
};

const Icon = ({ overrides, className, ...props }: UserIconProps): JSX.Element => {
  const [UserIcon, iconProps] = useOverrides(overrides?.UserIcon, DefaultUserIcon);
  return (
    <Box className={['h-full w-full flex items-center justify-center', className]} {...props}>
      <UserIcon data-testid="user-icon" className="w-1/2 h-1/2" {...iconProps} />
    </Box>
  );
};

const Avatar = (props: AvatarProps): ReactElement => {
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  const { shape = 'circle', size = 'md', className, color, allowPhoneInitials, name, overrides, initials, src } = props;

  const [imageLoaded, setImageLoaded] = useState<boolean>(() => getIsImageLoaded(src));

  const displayName = cleanupDisplayName(name);
  const randomBgColor = useAvatarColor(displayName);
  const isPhoneNumber = PHONENUMBER_REGEX.test(displayName);
  const { px2rem } = useStyle();

  const avatarSize = typeof size === 'string' ? avatarSizeConfig[size].size : px2rem(size);
  const sharedProps = {
    $avatarSize: size,
    $color: color || randomBgColor,
    $didImageFailToLoad: !imageLoaded,
    ...add$props({ shape, imageLoaded }),
  };

  useIsomorphicLayoutEffect(() => {
    if (!imageRef || !src) {
      setImageLoaded(false);
      return undefined;
    }
    if (imageRef) {
      imageRef.onload = () => setImageLoaded(true);
      imageRef.onerror = () => setImageLoaded(false);
      /**
       * Important to set src once onload listener is attached.
       * In some cases, image loads before these listeners are attached.
       */
      imageRef.src = src;
    }
    return () => {
      if (imageRef) {
        imageRef.onload = null;
        imageRef.onerror = null;
      }
    };
  }, [src, imageRef]);

  const [Root, rootProps] = useOverrides(overrides?.Root, StyledRoot);
  const [AvatarImage, avatarImageProps] = useOverrides(overrides?.Avatar, StyledAvatar);
  const [Initials, initialsProps] = useOverrides(overrides?.Initials, StyledInitials);

  return (
    <Root
      aria-label={imageLoaded ? null : name}
      className={className}
      data-spaceweb="avatar"
      $size={avatarSize}
      {...sharedProps}
      {...rootProps}
    >
      {!imageLoaded &&
        (isPhoneNumber && !allowPhoneInitials ? (
          <Icon overrides={overrides} {...sharedProps} {...initialsProps} />
        ) : (
          <Initials {...sharedProps} {...initialsProps}>
            {initials || getInitials(displayName)}
          </Initials>
        ))}
      <AvatarImage
        ref={setImageRef as (el: HTMLImageElement) => void}
        src={src}
        alt={name}
        $size={avatarSize}
        {...sharedProps}
        {...avatarImageProps}
      />
    </Root>
  );
};

export { Avatar };
