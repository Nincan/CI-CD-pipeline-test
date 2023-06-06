import { ReactElement, useState } from 'react';
import { PhoneInput, Value } from 'spaceweb/phone-input';

const NestedInputOverrides = (): ReactElement => {
  const [value, setValue] = useState<Value>(undefined);

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
