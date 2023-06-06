import { ReactElement, useState } from 'react';
import { PhoneInput, Value } from 'spaceweb/phone-input';

const Basic = (): ReactElement => {
  const [value, setValue] = useState<Value>(undefined);

  return <PhoneInput value={value} onChange={setValue} />;
};

export default Basic;
