import _pick from 'lodash/pick';

import { useContextualFormProps } from '../form-control/context';
import useInputBasewebAdapter from '../input/basewebAdapters';

import { getIconWrapperStyles } from './styled-components';

import { add$props } from '../helpers';
import { mergeOverrides, Overrides } from '../overrides';

import { PaymentCardOverrides as BasePaymentCardOverrides } from 'baseui/payment-card';
import { SIZE } from 'baseui/input';
import { PaymentCardProps, StatefulPaymentCardProps } from './types';
import { getDefaultSize } from '../helpers/themeHelpers';
import { useStyle } from '../style/';

type AdapterProps = Omit<PaymentCardProps | StatefulPaymentCardProps, 'autoFocus'>;

type BaseWebCardSize = 'default' | 'mini' | 'compact';

const getBasewebPaymentCardSizeMap = _size => {
  switch (_size) {
    case 'lg':
      return SIZE.default;
    case 'md':
      return SIZE.default;
    case 'sm':
      return SIZE.compact;
    case 'xs':
      return SIZE.compact;
    case 'xxxs':
      return SIZE.mini;
    default:
      return SIZE.default;
  }
};
const usePaymentCardBasewebAdapter = (
  props: AdapterProps
): Omit<AdapterProps, 'size' | 'variant' | 'className' | 'overrides' | 'style' | 'intent'> & {
  overrides?: BasePaymentCardOverrides;
  size: BaseWebCardSize;
} => {
  const contextualProps = useContextualFormProps<AdapterProps>(props);
  const sharedProps = add$props(_pick(contextualProps, ['size', 'variant', 'intent']));
  const { theme } = useStyle();
  const _size = contextualProps.size ?? sharedProps.$size ?? getDefaultSize(theme);

  const basePaymentCardStyles: Overrides<Record<string, any>> = {
    Input: {
      style: { paddingLeft: '0px' },
    },
    IconWrapper: {
      style: getIconWrapperStyles,
      props: sharedProps,
    },
  };

  const adaptedProps = useInputBasewebAdapter({
    ...contextualProps,
    overrides: mergeOverrides<Record<string, any>>(basePaymentCardStyles, contextualProps.overrides),
  });

  return {
    ...adaptedProps,
    size: getBasewebPaymentCardSizeMap(_size),
  };
};

export default usePaymentCardBasewebAdapter;
