import { ReactElement } from 'react';
import StatefulPhoneInputContainer from './stateful-phone-input-container';
import PhoneInput from './phone-input';
import { PhoneInputProps, StatefulPhoneInputProps } from './types';
import defaultProps from './default-props';

const StatefulPhoneInput = (props: StatefulPhoneInputProps): ReactElement => {
  const { overrides, ...rest } = props;
  return (
    <StatefulPhoneInputContainer {...rest}>
      {(phoneInputProps: PhoneInputProps) => <PhoneInput {...phoneInputProps} overrides={overrides} />}
    </StatefulPhoneInputContainer>
  );
};
StatefulPhoneInput.defaultProps = defaultProps;

export default StatefulPhoneInput;
