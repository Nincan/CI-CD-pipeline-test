import { Radio as BaseRadio, RadioGroup as BaseRadioGroup } from 'baseui/radio';
import { useMemo, ReactElement } from 'react';

import { useRadioGroupAdapter, useRadioAdapter, SpaceRadioContext } from './basewebAdapters';
import { RadioGroupProps, RadioProps } from './types';
import { useContextualFormProps } from '../form-control/context';

// @ts-ignore
BaseRadio.displayName = 'BaseUIRadio';
// @ts-ignore
BaseRadioGroup.displayName = 'BaseUIRadioGroup';

export const Radio = (props: RadioProps): ReactElement => {
  const adaptedProps = useRadioAdapter(props);
  return <BaseRadio {...adaptedProps} />;
};
Radio.displayName = 'Radio';

export const RadioGroup = (props: RadioGroupProps): ReactElement => {
  const adaptedProps = useRadioGroupAdapter(props);
  const { intent: formIntent, size: formSize = 'md' } = useContextualFormProps<RadioGroupProps>(props, {
    intent: 'default',
  });
  const memoizedProviderValue = useMemo(() => ({ size: formSize, intent: formIntent }), [formSize, formIntent]);
  return (
    <SpaceRadioContext.Provider value={memoizedProviderValue}>
      <BaseRadioGroup {...adaptedProps} />
    </SpaceRadioContext.Provider>
  );
};
RadioGroup.displayName = 'RadioGroup';
