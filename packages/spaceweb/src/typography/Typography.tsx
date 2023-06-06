import { forwardRef } from 'react';

import { TypographyProps } from './types';
import { add$props } from '../helpers';
import { StyledTypography } from './styled-components';

const defaultVariantToHTMLTagMapping = {
  h1: 'div',
  h2: 'div',
  h3: 'div',
  h4: 'div',
  h5: 'div',
  h6: 'div',
  h7: 'div',
  bs1: 'p',
  bs2: 'p',
  bs3: 'p',
  bl1: 'p',
  bl2: 'p',
  bl3: 'p',
  'body-8': 'span',
  'body-10': 'span',
  'body-12': 'span',
  'body-13': 'span',
  'body-14': 'span',
  'body-16': 'span',
  'display-18': 'h6',
  'display-20': 'h5',
  'display-24': 'h4',
  'display-28': 'h3',
  'display-32': 'h2',
  'display-40': 'h1',
  'display-42': 'h1',
};

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ $as, variant = 'body-14', weight, ...restProps }, ref) => {
    const sharedProps = add$props({ variant, weight });

    return (
      <StyledTypography
        ref={ref}
        data-spaceweb={`typography-${variant}`}
        $as={$as || defaultVariantToHTMLTagMapping[variant]}
        {...restProps}
        {...sharedProps}
      />
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
