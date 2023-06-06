import { useState } from 'react';
import { Select } from 'spaceweb/select';

export default () => {
  const [value, setValue] = useState([]);
  return (
    <Select
      options={[
        { id: 'AliceBlue', color: '#F0F8FF' },
        { id: 'AntiqueWhite', color: '#FAEBD7' },
        { id: 'Aqua', color: '#00FFFF' },
        { id: 'Aquamarine', color: '#7FFFD4' },
        { id: 'Azure', color: '#F0FFFF' },
        { id: 'Beige', color: '#F5F5DC' },
      ]}
      labelKey="id"
      valueKey="color"
      placeholder="Choose a color"
      maxDropdownHeight="300px"
      type="search"
      multi
      closeOnSelect={false}
      filterOutSelected={false}
      onChange={({ value: _value }) => setValue(_value)}
      value={value}
    />
  );
};
