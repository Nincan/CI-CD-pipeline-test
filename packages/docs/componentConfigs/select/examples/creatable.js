import { useState } from 'react';
import { Select } from 'spaceweb/select';

export default () => {
  const [value, setValue] = useState([]);
  return (
    <Select
      creatable
      options={[
        { id: 'Portland', label: 'Portland' },
        { id: 'NYC', label: 'New York City' },
        { id: 'LosAngeles', label: 'Los Angeles' },
        { id: 'Boston', label: 'Boston' },
        { id: 'Atlanta', label: 'Atlanta' },
        { id: 'SanFrancisco', label: 'San Francisco' },
      ]}
      labelKey="label"
      valueKey="id"
      onChange={({ value: _value }) => setValue(_value)}
      value={value}
    />
  );
};
