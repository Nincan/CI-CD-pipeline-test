import { KIND } from 'baseui/button';
import _omit from 'lodash/omit';

import { ButtonProps, VariantAdapterProps } from './types';

const variantMap: VariantAdapterProps = {
  primary: KIND.primary,
  secondary: KIND.secondary,
  tertiary: KIND.tertiary,
  minimal: KIND.tertiary,
};

export default (props: Omit<ButtonProps, 'size'>) => ({
  ..._omit(props, 'variant'),
  kind: props.variant ? variantMap[props.variant] : KIND.primary,
});
