import { ReactElement } from 'react';
import { StatefulPhoneInput, COUNTRIES } from 'spaceweb/phone-input';

const UncontrolledWithSelectiveCountries = (): ReactElement => (
  <StatefulPhoneInput countries={[COUNTRIES.AM, COUNTRIES.IN]} />
);

export default UncontrolledWithSelectiveCountries;
