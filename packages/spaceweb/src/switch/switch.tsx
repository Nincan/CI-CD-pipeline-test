import { Checkbox, StatefulCheckbox } from '../checkbox';
import { ReactElement } from 'react';

import { SwitchProps, StatefulSwitchProps } from './types';
import { STYLE_TYPE } from 'baseui/checkbox';
import { useSwitchAdapter } from './basewebAdapter';
import { useCombineRefObjects } from '../hooks/useCombinedRef';

export const Switch = (props: SwitchProps): ReactElement => {
  const { overrides, ...restProps } = useSwitchAdapter(props);
  const inputRefObj = useCombineRefObjects(props.inputRef);

  return (
    <Checkbox
      overrides={overrides}
      data-spaceweb="Switch"
      checkmarkType={STYLE_TYPE.toggle_round}
      labelPlacement="right"
      {...restProps}
      inputRef={inputRefObj}
    />
  );
};
Switch.displayName = 'Switch';

export const StatefulSwitch = (props: StatefulSwitchProps): ReactElement => {
  const { overrides, ...restProps } = useSwitchAdapter(props);
  const inputRefObj = useCombineRefObjects(props.inputRef);

  return (
    <StatefulCheckbox
      overrides={overrides}
      data-spaceweb="StatefulSwitch"
      checkmarkType={STYLE_TYPE.toggle_round}
      labelPlacement="right"
      {...restProps}
      inputRef={inputRefObj}
    />
  );
};
StatefulSwitch.displayName = 'StatefulSwitch';
