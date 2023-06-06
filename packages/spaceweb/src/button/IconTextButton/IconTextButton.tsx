import { forwardRef } from 'react';

import { mergeOverrides } from '../../overrides';
import Button from '../Button';
import { iconTextButtonStyle, startEnhancerStyle } from './styled-components';
import { IconTextButtonProps, SharedProps } from './types';

const IconTextButton = forwardRef<HTMLButtonElement, IconTextButtonProps>((props, ref) => {
  const { variant = 'default', bordered, icon: Icon, size = 'md', ...buttonProps } = props;
  const sharedProps = { $iconTextVariant: variant, $bordered: bordered };

  const overrides = mergeOverrides<SharedProps>(
    {
      BaseButton: {
        style: iconTextButtonStyle,
        props: sharedProps,
      },
      StartEnhancer: {
        style: startEnhancerStyle,
        props: sharedProps,
      },
    },
    props.overrides || {}
  );
  const StyledIcon = Icon ? <Icon size={12} /> : null;

  return (
    <Button
      {...buttonProps}
      size={size}
      ref={ref}
      variant="minimal"
      shape="default"
      startEnhancer={StyledIcon}
      overrides={overrides}
    />
  );
});

IconTextButton.displayName = 'IconTextButton';

export default IconTextButton;
