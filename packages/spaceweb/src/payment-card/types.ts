import { Ref } from 'react';
import {
  PaymentCardProps as BasePaymentCardProps,
  StatefulPaymentCardProps as BaseStatefulPaymentCardProps,
  PaymentCardOverrides as BasePaymentCardOverrides,
} from 'baseui/payment-card';
import { Override } from '../overrides';

import { SpacewebComponentProps, Intent } from '../types';
import { InputSize, InputVariant, SharedProps, FocusPosition } from '../input';

export type PaymentCardOverrides = {
  [key in keyof BasePaymentCardOverrides]?: Override<SharedProps & Record<string, any>>;
};

type CommonInputProps = {
  variant?: InputVariant;
  size?: InputSize;
  overrides?: PaymentCardOverrides;
  intent?: Intent;
  autoFocus?: FocusPosition;
  inputRef?: Ref<HTMLInputElement>;
};

export type PaymentCardProps = Omit<
  SpacewebComponentProps<BasePaymentCardProps>,
  'size' | 'overrides' | 'positive' | 'error' | 'autoFocus' | 'inputRef'
> &
  CommonInputProps;

export type StatefulPaymentCardProps = Omit<
  SpacewebComponentProps<BaseStatefulPaymentCardProps>,
  'size' | 'overrides' | 'positive' | 'error' | 'autoFocus' | 'inputRef'
> &
  CommonInputProps;
