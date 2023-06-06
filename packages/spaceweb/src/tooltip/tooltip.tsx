// TODO: baseui/tooltip is using Popover internally which we cannot override
import { Tooltip as BaseTooltip } from 'baseui/tooltip';
import * as React from 'react';
import { ReactElement, useMemo } from 'react';
import { PopoverChildEnhancer } from '../popover/PopoverEnahncer';
import { useConvertOverrides } from '../helpers/baseui/useConvertOverrides';
import { LayersManager, Z_INDEX } from '../layer';
import { useOverrides } from '../overrides';
import { useFocusLock, useContent } from '../popover/hooks';
import useUniqueId from '../hooks/useUniqueId';
import { getArrowStyle, getBodyStyle, innerStyles } from './overrides';
import { StyledLabel } from './styled-component';
import { TooltipProps } from './types';
import { getPopperOptions } from '../popover/utils';

const DISABLED_FOCUS_PROPS = {
  autoFocus: false,
  focusLock: false,
  returnFocus: false,
};

// @ts-ignore
BaseTooltip.displayName = 'BaseUITooltip';
const Tooltip = ({
  size = 'sm',
  label,
  content,
  overrides = {},
  children,
  targetElement,
  isOpen,
  triggerType = 'hover',
  returnFocus = triggerType === 'click',
  focusLock = false,
  placement = 'auto',
  popperOptions,
  ignoreBoundary,
  viewportAsBoundary,
  ...restProps
}: TooltipProps): ReactElement => {
  const focusLockProps = useFocusLock({ returnFocus, focusLock });
  const sharedProps = { $size: size, $label: !!label };

  const [Label, labelProps] = useOverrides(overrides.Label, StyledLabel);

  // add label on top of content
  const contentToDisplay: React.ReactNode[] = [];
  if (label) {
    contentToDisplay.push(
      <Label key="label" {...labelProps} {...sharedProps}>
        {label}
      </Label>
    );
  }
  contentToDisplay.push(
    <React.Fragment key="content">{typeof content === 'function' ? content() : content}</React.Fragment>
  );
  let childNode: React.ReactNode = children;
  if (typeof children === 'function') {
    childNode = children({ isOpen });
  }
  const { setContentHost, wrappedContent } = useContent({ content: contentToDisplay });

  const _overrides = useConvertOverrides<typeof sharedProps>(
    {
      Body: { style: getBodyStyle, props: sharedProps },
      Arrow: { style: getArrowStyle, props: sharedProps },
      Inner: { style: innerStyles, props: { ...sharedProps, ref: setContentHost } },
    },
    overrides,
    [overrides, size, label, setContentHost]
  );
  const id = useUniqueId();

  const mergedPopperOptions = useMemo(
    () => ({
      ...getPopperOptions({ ignoreBoundary, viewportAsBoundary }),
      ...popperOptions,
    }),
    [popperOptions, ignoreBoundary, viewportAsBoundary]
  );

  return (
    <LayersManager zIndex={Z_INDEX.POPOVER}>
      <BaseTooltip
        id={id}
        {...restProps}
        triggerType={triggerType}
        isOpen={isOpen}
        overrides={_overrides}
        content={wrappedContent}
        placement={placement}
        {...focusLockProps}
        // for hover triggerType focus props should be disabled, as we don't want focus to move inside tooltips.
        {...(triggerType === 'hover' ? DISABLED_FOCUS_PROPS : {})}
        popperOptions={mergedPopperOptions}
      >
        <PopoverChildEnhancer targetElement={targetElement}>{childNode}</PopoverChildEnhancer>
      </BaseTooltip>
    </LayersManager>
  );
};
Tooltip.displayName = 'Tooltip';

export default Tooltip;
