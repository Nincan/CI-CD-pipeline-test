import * as React from 'react';
import _pick from 'lodash/pick';
import CountrySelect from './country-select';
import DialCode from './dial-code';
import { StyledCountrySelectContainer } from './styled-components';
import { useOverrides } from '../overrides';
import { CountrySelectContainerProps } from './types';

const CountrySelectContainer = (
  props: CountrySelectContainerProps & { inputRef: React.MutableRefObject<HTMLInputElement> }
): React.ReactElement => {
  const { overrides } = props;

  const [CountrySelectComponent, countrySelectContainerProps] = useOverrides(
    overrides?.CountrySelectContainer,
    StyledCountrySelectContainer
  );
  const countrySelectProps = {
    ...props,
    overrides: _pick(overrides, ['CountrySelect', 'FlagContainer']),
  };
  const dialCodeProps = {
    ..._pick(props, ['size', 'value']),
    overrides: _pick(overrides, ['DialCode']),
  };
  return (
    <CountrySelectComponent dir="ltr" {...countrySelectContainerProps}>
      <CountrySelect {...countrySelectProps} />
      <DialCode {...dialCodeProps} />
    </CountrySelectComponent>
  );
};

export default CountrySelectContainer;
