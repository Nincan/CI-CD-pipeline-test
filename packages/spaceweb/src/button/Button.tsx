import * as React from 'react';
import { ComponentType } from 'react';
import _pick from 'lodash/pick';
import _omit from 'lodash/omit';
import { Button as BaseUIButton } from 'baseui/button';
import { useConvertOverrides } from '../helpers/baseui/useConvertOverrides';
import { mergeOverrides, useOverrides } from '../overrides';
import { ButtonSharedProps, ButtonProps } from './types';
import { getButtonStyles, StyledLoadingSpinnerContainer } from './styled-components';
import adaptBaseButtonProps from './basewebAdapter';
import { add$props } from '../helpers';
import { StyledBaseButton as BaseButton } from '../base-button';
import { StatefulTooltip as DefaultStatefulTooltip, DisabledTooltipContainer } from '../tooltip';
import { useContextualFormProps } from '../form-control/context';
import useStyle from '../style/useStyle';
import { getDefaultSize } from '../helpers/themeHelpers';

BaseUIButton.displayName = 'BaseUIButton';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const buttonRef = ref as React.Ref<HTMLElement>;
  const {
    variant = 'primary',
    intent = 'default',
    size: _size,
    fullWidth,
    className,
    style,
    overrides,
    tooltipContent,
    ...restProps
  } = useContextualFormProps<ButtonProps>(props);

  const { getStyle, isRTL, theme } = useStyle();
  const size = _size ?? getDefaultSize(theme);
  const buttonOverrides = React.useMemo(() => _omit(overrides, 'StatefulTooltip'), [overrides]);

  const adaptedProps = adaptBaseButtonProps({ ...restProps, variant, overrides: buttonOverrides });
  const convertedOverrides = useConvertOverrides<ButtonSharedProps>(adaptedProps.overrides || {});
  const mergedOverrides = mergeOverrides<ButtonSharedProps>(
    {
      BaseButton: {
        props: {
          className: [getButtonStyles, className, style],
          ...add$props({ variant, intent, size, fullWidth }),
        },
        component: BaseButton as ComponentType<ButtonSharedProps>, //using StyledBaseButton instead of BaseButton as all the handling is done by baseui's Button.
      },
      LoadingSpinnerContainer: {
        component: StyledLoadingSpinnerContainer as ComponentType,
        props: {
          $size: size,
        },
      },
      LoadingSpinner: {
        style: {
          height: '100%',
          width: '100%',
        },
      },
      StartEnhancer: {
        // This check should not be required. Overrides should first be merged and then converted for baseui.
        // In Button we are converting overrides(that's when rtlCssJs gets applied) and then merging, which is wrong.
        style: getStyle(isRTL ? 'ml-1' : 'mr-1'),
      },
      EndEnhancer: {
        style: getStyle(isRTL ? 'mr-1' : 'ml-1'),
      },
    },
    _pick(adaptedProps.overrides, 'BaseButton')
  );

  const [StatefulTooltip, statefulTooltipProps] = useOverrides(overrides?.StatefulTooltip, DefaultStatefulTooltip);

  const buttonEl = (
    <BaseUIButton
      data-spaceweb="button"
      data-testid="button"
      {...adaptedProps}
      onClick={adaptedProps.onClick as unknown as (a: React.SyntheticEvent<HTMLButtonElement>) => unknown}
      overrides={{ ...convertedOverrides, ...mergedOverrides }}
      ref={buttonRef}
    />
  );

  if (adaptedProps.disabled && tooltipContent) {
    return (
      <DisabledTooltipContainer placement="bottom" content={tooltipContent} {...statefulTooltipProps}>
        {buttonEl}
      </DisabledTooltipContainer>
    );
  }

  return tooltipContent ? (
    <StatefulTooltip placement="bottom" content={tooltipContent} {...statefulTooltipProps}>
      {buttonEl}
    </StatefulTooltip>
  ) : (
    buttonEl
  );
});

Button.displayName = 'Button';

export default Button;
