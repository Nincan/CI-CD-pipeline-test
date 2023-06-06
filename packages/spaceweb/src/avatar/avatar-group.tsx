/* eslint import/prefer-default-export: 0 */

import * as React from 'react';
import { useOverrides } from '../overrides/useOverrides';
import { mergeOverrides } from '../overrides/mergeOverrides';
import { Overrides } from '../overrides';
import { useStyle } from '../style';
import { Avatar } from './avatar';
import { StyledAvatarGroup } from './styled-component';
import { AvatarGroupProps, AvatarGroupSharedProps, AvatarProps, Spacing } from './types';

const spacingVsMargin: Record<Spacing, string> = {
  sm: '-12px',
  md: '-8px',
  none: '0',
  lg: '6px',
};

const AvatarGroup = React.forwardRef<HTMLElement, AvatarGroupProps>(
  ({ children, max = 5, size, shape, spacing = 'sm', overrides = {}, className }, ref) => {
    const utils = useStyle();
    const { theme } = utils;
    const [Root, rootProps] = useOverrides(overrides.Root, StyledAvatarGroup);
    const [ExtraAvatar, extraAvatarProps] = useOverrides(overrides.ExtraAvatar, Avatar);

    const sharedProps: AvatarGroupSharedProps = {
      $spacing: spacing,
      $size: size,
      $shape: shape,
      $max: max,
      $extraAvatar: false,
    };

    const validChildren = React.Children.toArray(children).filter(React.isValidElement);
    const extraAvatars = validChildren.length > max ? validChildren.length - max : 0;

    const childToRender = validChildren.slice(0, validChildren.length - extraAvatars);
    if (extraAvatars > 0) {
      const props = extraAvatarProps as AvatarProps;
      childToRender.push(
        <ExtraAvatar
          {...props}
          name={`+${extraAvatars}`}
          initials={`+${extraAvatars}`}
          color={theme.spr.ui05}
          overrides={mergeOverrides({ Initials: { style: { ...theme.typography.l2 } } }, props.overrides)}
        />
      );
    }

    return (
      <Root data-spaceweb="avatar-group" className={className} {...sharedProps} {...rootProps} ref={ref}>
        {childToRender.map((child: React.ReactElement<AvatarProps>, index) =>
          React.cloneElement(child, {
            key: String(index),
            size: child.props.size || size,
            shape: child.props.shape || shape,
            overrides: mergeOverrides(
              {
                Root: {
                  style: { marginLeft: index !== 0 ? spacingVsMargin[spacing] : 0 },
                },
              },
              (child.props.overrides || {}) as Overrides
            ),
          })
        )}
      </Root>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';

export { AvatarGroup };
