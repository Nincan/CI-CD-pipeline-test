import defaultProps from 'baseui/tooltip/default-props';
import * as React from 'react';
import { ReactElement } from 'react';
import { useConvertOverrides } from '../helpers/baseui/useConvertOverrides';

import StatefulContainer from './stateful-tooltip-container';
import Tooltip from './tooltip';
import { StatefulTooltipProps } from './types';

const StatefulTooltip = (props: StatefulTooltipProps): ReactElement => {
  const { children, size, label, overrides = {}, viewportAsBoundary, ...restProps } = props;
  const _overrides = useConvertOverrides(overrides, undefined, [overrides]);
  return (
    <StatefulContainer dismissOnClickOutside dismissOnEsc triggerType="hover" {...restProps} overrides={_overrides}>
      {(tooltipProps): React.ReactElement => (
        <Tooltip {...tooltipProps} size={size} label={label} viewportAsBoundary={viewportAsBoundary}>
          {children}
        </Tooltip>
      )}
    </StatefulContainer>
  );
};
StatefulTooltip.displayName = 'StatefulTooltip';

StatefulTooltip.defaultProps = {
  ...defaultProps,
  showArrow: true,
  focusLock: false,
  returnFocus: false,
};

export default StatefulTooltip;
