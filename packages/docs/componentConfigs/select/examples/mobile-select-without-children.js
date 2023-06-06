import { useState } from 'react';
import { Select } from 'spaceweb/select';

const options = [
  { id: 'AliceBlue', color: '#F0F8FF' },
  { id: 'AntiqueWhite', color: '#FAEBD7' },
  { id: 'Aquamarine', color: '#7FFFD4' },
  { id: 'Azure', color: '#F0FFFF' },
  { id: 'Beige', color: '#F5F5DC' },
];

const MobileSelectWithoutChildren = () => {
  const [value, setValue] = useState([]);
  return (
    <Select
      options={options}
      labelKey="id"
      valueKey="color"
      placeholder="Choose a color"
      type="mobile"
      onChange={({ value: _value }) => setValue(_value)}
      value={value}
      autoFocus
      closeOnSelect
      label="Back"
    />
  );
};

export default MobileSelectWithoutChildren;
