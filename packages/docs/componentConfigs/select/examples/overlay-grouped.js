import { useState } from 'react';
import { Select } from 'spaceweb/select';
import { Button } from 'spaceweb/button';

const options = {
  BLUEISH: [
    { id: 'AliceBlue', color: '#F0F8FF' },
    { id: 'Aqua', color: '#00FFFF' },
    { id: 'Aquamarine', color: '#7FFFD4' },
  ],
  WHITEISH: [
    { id: 'AntiqueWhite', color: '#FAEBD7' },
    { id: 'Azure', color: '#F0FFFF' },
    { id: 'Beige', color: '#F5F5DC' },
  ],
};

export default () => {
  const [value, setValue] = useState([]);
  return (
    <Select
      options={options}
      labelKey="id"
      valueKey="color"
      onChange={({ value: _value }) => setValue(_value)}
      value={value}
      type="overlay"
      maxDropdownHeight="none"
    >
      <Button variant="secondary">{value[0]?.id || 'Select Color'}</Button>
    </Select>
  );
};
