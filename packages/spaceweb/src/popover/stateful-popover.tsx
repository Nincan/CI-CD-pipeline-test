import { StatefulContainer } from 'baseui/popover';
import * as React from 'react';
import Popover from './popover';

import { StatefulPopoverProps } from './types';
import { ON_MOUSE_LEAVE_DELAY } from './constants';

function StatefulPopover(props: StatefulPopoverProps): React.ReactElement {
  const { children, overrides = {}, targetElement, viewportAsBoundary, ...restProps } = props;
  return (
    <StatefulContainer {...restProps}>
      {(popoverProps): React.ReactElement => (
        <Popover
          {...popoverProps}
          overrides={overrides}
          targetElement={targetElement}
          viewportAsBoundary={viewportAsBoundary}
        >
          {children}
        </Popover>
      )}
    </StatefulContainer>
  );
}

StatefulPopover.defaultProps = {
  accessibilityType: 'menu',
  ignoreBoundary: false,
  overrides: {},
  onMouseEnterDelay: 200,
  onMouseLeaveDelay: ON_MOUSE_LEAVE_DELAY,
  placement: 'auto',
  showArrow: false,
  triggerType: 'click',
  dismissOnClickOutside: true,
  dismissOnEsc: true,
  stateReducer: (_, nextState) => nextState,
} as Partial<StatefulPopoverProps>;

export default StatefulPopover;
