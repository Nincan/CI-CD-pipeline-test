import { useState, useCallback } from 'react';
import { Select } from 'spaceweb/select';

const DelimSeparated = () => {
  const [value, setValue] = useState([]);

  const createOption = useCallback(label => label.split(',').map(_label => ({ id: _label, label: _label })), []);

  return (
    <Select
      creatable
      multi
      closeOnSelect={false}
      filterOutSelected={false}
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
      createOption={createOption}
    />
  );
};

export default DelimSeparated;
