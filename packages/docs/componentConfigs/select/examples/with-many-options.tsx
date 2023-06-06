import { useState } from 'react';
import { Select, Value } from 'spaceweb/select';

type Option = { id: number; label: number };

const options: Option[] = [];

for (let i = 0; i < 1000; i += 1) {
  options.push({
    id: i,
    label: i,
  });
}

export default () => {
  const [value, setValue] = useState<Value>([]);
  return (
    <Select
      options={options}
      labelKey="id"
      valueKey="label"
      onChange={({ value: _value }) => setValue(_value)}
      value={value}
      virtual
    />
  );
};
