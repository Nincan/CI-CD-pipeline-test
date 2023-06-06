import { forwardRef, memo, ReactElement, useState } from 'react';
import { BannerProps } from './types';
import { useOverrides } from '../overrides';
import {
  StyledBanner,
  StyledBannerItemContainer,
  StyledHeaderContainer,
  StyledTitle,
  StyledTitleContainer,
} from './styled-component';
import ErrorIcon from '../icon/components/error-clr';
import AlertIcon from '../icon/components/alert-solid';
import TickCircleIcon from '../icon/components/tickCircle-solid';
import { useStyle } from '../style';
import { Styles, ClassName } from '../types';
import { StyledButtonLink } from '../link/styled-components';
import { useLocale } from '../locale';
import useStickyElement from '../hooks/useStickyElement';
import * as React from 'react';

function Icon({ className, intent = 'error', ...restProps }: { className?: ClassName; intent?: string }): ReactElement {
  const { theme } = useStyle();

  const intentToIconMap = {
    error: {
      BaseIcon: ErrorIcon,
      prop: [{ fill: theme.spr.supportError }],
    },
    warning: {
      BaseIcon: AlertIcon,
      prop: [{ fill: theme.spr.supportWarning }],
    },
    success: {
      BaseIcon: TickCircleIcon,
      prop: [{ fill: theme.spr.supportSuccess }],
    },
  };

  const { BaseIcon, prop } = intentToIconMap[intent];
  return <BaseIcon className={['mr-1.5 flex-shrink-0', prop, className]} {...restProps} size={14} />;
}

function BaseToggleButton({
  show,
  className,
  onToggle,
  ...props
}: {
  className?: ClassName;
  show: boolean;
  onToggle: (show: boolean) => void;
}): ReactElement {
  const locale = useLocale();

  const label = show ? locale.banner.toggleButtonHideLabel : locale.banner.toggleButtonShowLabel;
  const ariaLabel = show ? locale.banner.toggleButtonHideAriaLabel : locale.banner.toggleButtonShowAriaLabel;

  return (
    <StyledButtonLink
      data-testid="banner-toggle-button"
      aria-label={ariaLabel}
      className={['typography-l2 pl-2', className]}
      onClick={() => onToggle(!show)}
      $show={show}
      {...props}
    >
      {label}
    </StyledButtonLink>
  );
}

const Banner = forwardRef<HTMLElement, BannerProps>(
  (
    { intent = 'error', collapsible, title, children, overrides = {}, $as, role, maxItemContainerHeight, ...restProps },
    ref
  ) => {
    const [Root, rootProps] = useOverrides(overrides.Root, StyledBanner);
    const [BannerItemContainer, bannerItemContainerProps] = useOverrides(
      overrides.BannerItemContainer,
      StyledBannerItemContainer
    );

    const [HeaderContainer, headerContainerProps] = useOverrides(overrides.HeaderContainer, StyledHeaderContainer);
    const [TitleContainer, titleContainerProps] = useOverrides(overrides.TitleContainer, StyledTitleContainer);
    const [HeaderTitle, headerTitleProps] = useOverrides(overrides.HeaderTitle, StyledTitle);
    const [HeaderIcon, headerIconProps] = useOverrides(overrides.HeaderIcon, Icon);
    const [ToggleButton, toggleButtonProps] = useOverrides(overrides.ToggleButton, BaseToggleButton);

    const [show, setShow] = useState(true);

    const { isSticky, setStickySentinelRef } = useStickyElement();

    return (
      <Root
        data-spaceweb="banner"
        data-testid="banner"
        intent={intent}
        collapsible={collapsible}
        {...restProps}
        {...rootProps}
        ref={ref}
      >
        <div ref={setStickySentinelRef} />
        <HeaderContainer {...headerContainerProps} $sticky={isSticky}>
          <TitleContainer {...titleContainerProps}>
            <HeaderIcon intent={intent} {...headerIconProps} />
            <HeaderTitle {...headerTitleProps}>{title}</HeaderTitle>
          </TitleContainer>
          {collapsible && <ToggleButton show={show} onToggle={setShow} {...toggleButtonProps} />}
        </HeaderContainer>
        {show && children && (
          <BannerItemContainer
            $as={$as}
            role={$as === 'ol' || $as === 'ul' ? 'list' : role}
            $maxHeight={maxItemContainerHeight}
            {...bannerItemContainerProps}
          >
            {children}
          </BannerItemContainer>
        )}
      </Root>
    );
  }
);

Banner.displayName = 'Banner';

export default memo(Banner);
