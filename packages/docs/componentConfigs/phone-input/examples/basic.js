import { useState } from 'react';
import { PhoneInput } from 'spaceweb/phone-input';

const Basic = () => {
  const [value, setValue] = useState(undefined);
  return <PhoneInput value={value} onChange={setValue} />;
};
export default Basic;
