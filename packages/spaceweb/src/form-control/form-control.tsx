import { useMemo, forwardRef } from 'react';
import * as React from 'react';
import { useUID } from 'react-uid';

import { add$props } from '../helpers';
import { Stack, StackItem } from '../stack';
import InfoIcon from '../icon/components/info';
import ErrorIcon from '../icon/components/error-clr';
import { useOverrides } from '../overrides';
import { StatefulTooltip } from '../tooltip';
import { FormControlProvider } from './context';
import {
  StyledCaption,
  StyledControlContainer,
  StyledInfoIconContainer,
  StyledLabel,
  StyledLabelContainer,
  StyledRequiredDot,
  StyledRoot,
  StyledSubText,
} from './styled-component';
import { FormControlProps } from './types';

function chooseRenderedHint(caption, error, positive, sharedProps): string | null {
  if (error && typeof error !== 'boolean') {
    return typeof error === 'function' ? error(sharedProps) : error;
  }

  if (positive && typeof positive !== 'boolean') {
    return typeof positive === 'function' ? positive(sharedProps) : positive;
  }

  if (caption) {
    return typeof caption === 'function' ? caption(sharedProps) : caption;
  }

  return null;
}

const FormControl = forwardRef<HTMLElement, FormControlProps>(
  (
    {
      overrides,
      label,
      caption,
      disabled,
      error,
      positive,
      htmlFor,
      children,
      intent,
      required,
      layout,
      $as,
      className,
      subText,
      subTextAsIcon,
    },
    ref
  ): React.ReactElement => {
    const onlyChildProps = React.Children.only(children).props;
    const a11yCaptionId = useUID();
    const a11LabelId = useUID();
    const a11SubTextId = useUID();
    const fieldUniqueId = useUID();

    // First try to infer id from props or children. Create new id if needed.
    const a11yFieldId = htmlFor || onlyChildProps.id || fieldUniqueId;

    const sharedProps = {
      ...add$props({ required, layout, intent, disabled }),
      $error: !!error,
      $positive: !!positive,
      $hasSubText: !!subText,
      $subTextAsIcon: subTextAsIcon,
    };
    const hint = chooseRenderedHint(caption, error, positive, sharedProps);
    const hintEl =
      intent === 'error' && (caption || error) ? (
        <Stack direction="horizontal" gap={2} shrink>
          <ErrorIcon size={14} />
          <StackItem>{hint}</StackItem>
        </Stack>
      ) : (
        hint
      );

    const [LabelContainer, labelContainerProps] = useOverrides(overrides?.LabelContainer, StyledLabelContainer),
      [Label, labelProps] = useOverrides(overrides?.Label, StyledLabel),
      [RequiredDot, requiredDotProps] = useOverrides(overrides?.RequiredDot, StyledRequiredDot),
      [Root, rootProps] = useOverrides(overrides?.Root, StyledRoot),
      [SubText, subTextProps] = useOverrides(overrides?.SubText, StyledSubText),
      [InfoIconContainer, infoIconContainerProps] = useOverrides(overrides?.InfoIconContainer, StyledInfoIconContainer),
      [ControlContainer, controlContainerProps] = useOverrides(overrides?.ControlContainer, StyledControlContainer),
      [Caption, captionProps] = useOverrides(overrides?.Caption, StyledCaption),
      [SubTextTooltip, subTextTooltipProps] = useOverrides(overrides?.SubTextTooltip, StatefulTooltip);

    const formControlProviderValue = useMemo(() => ({ intent }), [intent]);
    const shouldRenderSubTextInTooltip = layout === 'horizontal' || subTextAsIcon;

    return (
      <FormControlProvider value={formControlProviderValue}>
        <Root
          ref={ref}
          data-testid="form-control"
          data-spaceweb="form-control"
          className={className}
          $as={$as}
          {...sharedProps}
          {...rootProps}
        >
          {label && (
            <LabelContainer data-testid="form-control-label-container" {...sharedProps} {...labelContainerProps}>
              <Label
                id={a11LabelId}
                data-spaceweb="form-control-label"
                htmlFor={a11yFieldId}
                {...sharedProps}
                {...labelProps}
              >
                {typeof label === 'function' ? label(sharedProps) : label}
              </Label>
              {required && <RequiredDot data-testid="form-required" {...requiredDotProps} />}
              {subText && shouldRenderSubTextInTooltip ? (
                <SubTextTooltip content={subText} size="md" {...subTextTooltipProps}>
                  <InfoIconContainer {...infoIconContainerProps}>
                    <InfoIcon className="h-2 w-2" />
                  </InfoIconContainer>
                </SubTextTooltip>
              ) : null}
            </LabelContainer>
          )}
          {subText && !shouldRenderSubTextInTooltip ? (
            <SubText id={a11SubTextId} {...subTextProps}>
              {typeof subText === 'function' ? subText(sharedProps) : subText}
            </SubText>
          ) : null}
          <ControlContainer data-spaceweb="form-control-container" {...sharedProps} {...controlContainerProps}>
            {React.Children.map(children, (child, index) => {
              if (!child) return null;

              const key = child.key || String(index);
              return React.cloneElement(child, {
                key,
                id: a11yFieldId,
                'aria-errormessage': error ? a11yCaptionId : null,
                'aria-describedby':
                  caption || positive || subText
                    ? `${subText ? a11SubTextId : ''} ${caption ? a11yCaptionId : ''} `
                    : null,
                'aria-required': required ? 'true' : 'false',
                disabled: onlyChildProps.disabled || disabled,
                error: typeof onlyChildProps.error !== 'undefined' ? onlyChildProps.error : error,
                positive: typeof onlyChildProps.positive !== 'undefined' ? onlyChildProps.positive : positive,
              });
            })}
            {(caption || error || positive) && (
              <Caption data-spaceweb="form-control-caption" id={a11yCaptionId} {...sharedProps} {...captionProps}>
                {hintEl}
              </Caption>
            )}
          </ControlContainer>
        </Root>
      </FormControlProvider>
    );
  }
);

export { FormControl };
