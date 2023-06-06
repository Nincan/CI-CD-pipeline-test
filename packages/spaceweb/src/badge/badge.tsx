import { PropsWithChildren, ReactElement } from 'react';
import { useOverrides } from '../overrides/useOverrides';
import { StyledAnchor, StyledRoot } from './styled-component';

import { BadgeProps, SharedProps } from './types';

const Badge = ({
  children,
  overrides = {},
  content,
  size = 'lg',
  intent = 'error',
  horizontalPosition = 'right',
  verticalPosition = 'bottom',
  overlap = 'rectangle',
}: PropsWithChildren<BadgeProps>): ReactElement => {
  const [Root, rootProps] = useOverrides(overrides.Root, StyledRoot);
  const [Anchor, anchorProps] = useOverrides(overrides.Anchor, StyledAnchor);

  const sharedProps: SharedProps = {
    $size: size,
    $intent: intent,
    $content: content,
    $horizontalPosition: horizontalPosition,
    $verticalPosition: verticalPosition,
    $overlap: overlap,
  };

  return (
    <Root data-spaceweb="badge" {...rootProps} {...sharedProps}>
      {children}
      <Anchor {...anchorProps} {...sharedProps}>
        {typeof content === 'function' ? content(sharedProps) : content}
      </Anchor>
    </Root>
  );
};

export default Badge;
