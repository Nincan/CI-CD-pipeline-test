import baseDefaultProps from 'baseui/tooltip/default-props';
import * as React from 'react';
import { StatefulContainer as StatefulPopoverContainer } from '../popover';
import { StatefulTooltipContainerProps } from './types';

const StatefulContainer = (props: StatefulTooltipContainerProps): React.ReactElement => (
  <StatefulPopoverContainer {...props} />
);

StatefulContainer.displayName = 'StatefulContainer';

StatefulContainer.defaultProps = {
  ...baseDefaultProps,
  showArrow: true,
};

export default StatefulContainer;
