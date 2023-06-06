import { ReactElement } from 'react';
import { PaymentCard as BasePaymentCard, StatefulPaymentCard as BaseStatefulPaymentCard } from 'baseui/payment-card';

import usePaymentCardBasewebAdpater from './basewebAdapters';
import useAutoFocus from '../hooks/useAutoFocus';
import { PaymentCardProps, StatefulPaymentCardProps } from './types';

// @ts-ignore
BasePaymentCard.displayName = 'BasePaymentCard';

export const PaymentCard = (props: PaymentCardProps): ReactElement => {
  const { autoFocus, ...restProps } = props;
  const adaptedProps = usePaymentCardBasewebAdpater(restProps);
  const inputRef = useAutoFocus({ autoFocus, inputRef: adaptedProps.inputRef });

  return <BasePaymentCard {...adaptedProps} inputRef={inputRef} />;
};
PaymentCard.displayName = 'PaymentCard';

export const StatefulPaymentCard = (props: StatefulPaymentCardProps): ReactElement => {
  const { autoFocus, ...restProps } = props;
  const adaptedProps = usePaymentCardBasewebAdpater(restProps);
  const inputRef = useAutoFocus({ autoFocus, inputRef: adaptedProps.inputRef });

  return <BaseStatefulPaymentCard {...adaptedProps} inputRef={inputRef} />;
};
StatefulPaymentCard.displayName = 'StatefulPaymentCard';
