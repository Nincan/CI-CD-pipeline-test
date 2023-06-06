import omit from 'lodash/omit';
import { PaymentCard } from 'spaceweb/payment-card';
import { ADJOINED, SIZE } from 'baseui/input';
import { PropTypes } from 'react-view';
import { YardConfig } from '../types';
import { inputProps } from '../input/config';

const PaymentCardConfig: YardConfig = {
  componentName: 'PaymentCard',
  imports: {
    'spaceweb/payment-card': { named: ['PaymentCard'] },
  },
  scope: {
    PaymentCard,
    SIZE,
    ADJOINED,
  },
  theme: [],
  props: {
    value: {
      ...inputProps.value,
      value: '',
    },
    ...omit(inputProps, ['type', 'startEnhancer', 'endEnhancer', 'value', 'placeholder']),
    placeholder: {
      ...inputProps.placeholder,
      value: 'Please enter your credit card number...',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Input', 'InputContainer', 'IconWrapper'],
        sharedProps: {
          $isFocused: {
            type: PropTypes.Boolean,
            description: 'True when the component is focused.',
          },
          $disabled: 'disabled',
          $error: 'error',
          $positive: 'positive',
          $adjoined: 'adjoined',
          $size: 'size',
          $required: 'required',
        },
      },
    },
  },
  // mapTokensToProps: {
  //   PaymentCard: paymentCardProps,
  // },
};

export default PaymentCardConfig;
