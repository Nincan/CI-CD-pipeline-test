import { useState } from 'react';
import { PhoneInput } from 'spaceweb/phone-input';

const NestedInputOverrides = () => {
  const [value, setValue] = useState(undefined);
  return (
    <PhoneInput
      value={value}
      onChange={setValue}
      overrides={{
        Input: {
          props: {
            overrides: {
              Root: {
                style: {
                  width: '300px',
                },
              },
            },
          },
        },
      }}
    />
  );
};
export default NestedInputOverrides;
