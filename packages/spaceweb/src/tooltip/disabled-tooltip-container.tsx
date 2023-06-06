import * as React from 'react';
import Tooltip from './tooltip';
import baseDefaultProps from 'baseui/tooltip/default-props';
import { mergeOverrides } from '../overrides';
import { TooltipProps } from './types';

// temporary fix for https://prod-gitlab.sprinklr.com/sprinklr/frontend/spaceweb/-/issues/260
// to be removed once https://github.com/uber/baseweb/issues/4692 is fixed
export type DisabledTooltipContainerProps = Partial<Omit<TooltipProps, 'children'>> & Pick<TooltipProps, 'children'>;

const DisabledTooltipContainer = ({
  content,
  children,
  onMouseEnterDelay,
  onMouseLeaveDelay,
  overrides,
  ...props
}: DisabledTooltipContainerProps): React.ReactElement | null => {
  const [isOpen, setIsOpen] = React.useState(false);
  const timerRef = React.useRef<{ mouseEnterTimer: number | null; mouseLeaveTimer: number | null }>({
    mouseEnterTimer: null,
    mouseLeaveTimer: null,
  });

  const childEl = React.isValidElement(children)
    ? React.cloneElement(children, {
        ...children.props,
        onPointerEnter: (event: React.PointerEvent<HTMLElement>): void => {
          // clear leave timer
          if (timerRef.current.mouseLeaveTimer) {
            clearTimeout(timerRef.current.mouseLeaveTimer);
            timerRef.current.mouseLeaveTimer = null;
          }
          // set enter timer
          timerRef.current.mouseEnterTimer = window.setTimeout(() => {
            setIsOpen(true);
            children.props?.onPointerEnter?.(event);
          }, onMouseEnterDelay);
        },
        onPointerLeave: (event: React.PointerEvent<HTMLElement>): void => {
          // clear enter timer
          if (timerRef.current.mouseEnterTimer) {
            clearTimeout(timerRef.current.mouseEnterTimer);
            timerRef.current.mouseEnterTimer = null;
          }
          // set leave timer
          timerRef.current.mouseLeaveTimer = window.setTimeout(() => {
            setIsOpen(false);
            children.props?.onPointerLeave?.(event);
          }, onMouseLeaveDelay);
        },
      })
    : null;

  const mergedOverrides = mergeOverrides(
    {
      Inner: {
        props: {
          onMouseEnter: (): void => {
            // clear leave timer
            if (timerRef.current.mouseLeaveTimer) {
              clearTimeout(timerRef.current.mouseLeaveTimer);
              timerRef.current.mouseLeaveTimer = null;
            }
          },
          onMouseLeave: (): void => {
            // set leave timer
            timerRef.current.mouseLeaveTimer = window.setTimeout(() => {
              setIsOpen(false);
            }, onMouseLeaveDelay);
          },
        },
      },
    },
    overrides
  );

  return content ? (
    <Tooltip
      isOpen={isOpen}
      content={content}
      onMouseEnterDelay={onMouseEnterDelay}
      onMouseLeaveDelay={onMouseLeaveDelay}
      overrides={mergedOverrides}
      {...props}
    >
      {childEl}
    </Tooltip>
  ) : (
    childEl
  );
};
DisabledTooltipContainer.defaultProps = {
  ...baseDefaultProps,
  showArrow: true,
};

export default DisabledTooltipContainer;
