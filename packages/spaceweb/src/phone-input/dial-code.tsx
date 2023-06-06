import * as React from 'react';
import { StyledDialCode } from './styled-components';
import { useOverrides } from '../overrides';
import { add$props } from '../helpers';
import { DialCodeProps } from './types';

const DialCode = (props: DialCodeProps): React.ReactElement => {
  const {
    size,
    overrides,
    value: { country },
  } = props;
  const sharedProps = add$props({ size });
  const [DialCodeBox, dialCodeBoxProps] = useOverrides(overrides?.DialCode, StyledDialCode);
  return (
    <DialCodeBox {...sharedProps} {...dialCodeBoxProps}>
      {country.dialCode}
    </DialCodeBox>
  );
};

export default DialCode;
