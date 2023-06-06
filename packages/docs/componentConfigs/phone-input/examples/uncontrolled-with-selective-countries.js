import { StatefulPhoneInput, COUNTRIES } from 'spaceweb/phone-input';

const UncontrolledWithSelectiveCountries = () => <StatefulPhoneInput countries={[COUNTRIES.AM, COUNTRIES.IN]} />;

export default UncontrolledWithSelectiveCountries;
