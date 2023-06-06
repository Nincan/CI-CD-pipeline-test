import styled from '../style/styled';
import { borderRadius as borderRadiusHelper } from '../helpers/longHandHelpers';

export const avatarSizeConfig = {
  sm: { size: '24px', rectangleBorderRadius: '6px', fontSize: '12px' },
  md: { size: '34px', rectangleBorderRadius: '8px', fontSize: '17px' },
  lg: { size: '40px', rectangleBorderRadius: '8px', fontSize: '20px' },
  xl: { size: '48px', rectangleBorderRadius: '8px', fontSize: '24px' },
  xxl: { size: '84px', rectangleBorderRadius: '12px', fontSize: '42px' },
  xxxl: { size: '96px', rectangleBorderRadius: '12px', fontSize: '48px' },
};

const getSizeConfig = size => avatarSizeConfig[size] ?? avatarSizeConfig.md;

const getFontSize = (size: number): string => `${size / 2}px`;

export const StyledAvatarGroup = styled('div', 'flex');

export const StyledRoot = styled(
  'div',
  'box-border inline-block',
  (_, { $shape, $color, $didImageFailToLoad, $avatarSize, $size }) => {
    const avatarSizeTheme = getSizeConfig($avatarSize);
    const borderRadius = $shape === 'circle' ? '50%' : avatarSizeTheme.rectangleBorderRadius;
    return {
      ...borderRadiusHelper(borderRadius),
      background: $didImageFailToLoad ? $color : undefined,
      height: $didImageFailToLoad ? $size : undefined,
      width: $didImageFailToLoad ? $size : undefined,
    };
  }
);

export const StyledInitials = styled(
  'div',
  'items-center justify-center h-full flex font-semibold spr-text-01',
  (_, { $avatarSize }) => {
    const fontSize = typeof $avatarSize === 'number' ? getFontSize($avatarSize) : getSizeConfig($avatarSize).fontSize;

    return {
      fontSize,
    };
  }
);

// borderRadius should be inherited
export const StyledAvatar = styled('img', 'box-border object-cover', (_, { $size, $imageLoaded }) => ({
  display: $imageLoaded ? 'block' : 'none',
  height: $size,
  width: $size,
  ...borderRadiusHelper('inherit'),
}));
