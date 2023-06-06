import { ReactElement } from 'react';
import { StatefulContainer as BaseStatefulContainer, SliderOverrides } from 'baseui/slider';
import { StatefulContainerProps } from './types';

//@ts-ignore
BaseStatefulContainer.displayName = 'BaseStatefulContainer';

const StatefulContainer = ({ overrides, ...props }: StatefulContainerProps): ReactElement => (
  <BaseStatefulContainer {...props} overrides={overrides as SliderOverrides} />
);

StatefulContainer.displayName = 'StatefulContainer';

export default StatefulContainer;
