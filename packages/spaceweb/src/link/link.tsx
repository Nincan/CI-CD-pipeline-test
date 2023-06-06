import { forwardRef, PropsWithChildren } from 'react';
import { StyledLink, StyledButtonLink } from './styled-components';
import { useFocusVisible } from '../hooks/useFocusVisible';
import { LinkProps } from './types';

const Link = forwardRef<HTMLElement, PropsWithChildren<LinkProps>>((props, ref) => {
  const focusVisibleProps = useFocusVisible(props);
  const LinkComp = props.href ? StyledLink : StyledButtonLink;
  return <LinkComp data-spaceweb="link" data-testid="link" {...props} {...focusVisibleProps} ref={ref} />;
});
Link.displayName = 'Link';

export default Link;
