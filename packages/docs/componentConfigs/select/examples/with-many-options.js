/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { Select } from 'spaceweb/select';

const options = [];

for (let i = 0; i < 1000; i += 1) {
  options.push({
    id: i,
    label: i,
  });
}

export default () => {
  const [value, setValue] = useState([]);
  return (
    <Select
      options={options}
      labelKey="id"
      valueKey="label"
      onChange={({value:_value }) => setValue(_value)}
      value={value}
      virtual
    />
  );
};
