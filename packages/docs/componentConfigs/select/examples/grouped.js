import { useState } from 'react';
import { Select } from 'spaceweb/select';

const options = {
  __ungrouped: [{ id: 'Black', color: '#000000' }],
  Blueish: [
    { id: 'AliceBlue', color: '#F0F8FF' },
    { id: 'Aqua', color: '#00FFFF' },
    { id: 'Aqua1', color: '#00FFFF1' },
    { id: 'Aqua2', color: '#00FFFF2' },
    { id: 'Aqu3a', color: '#00FFFF3' },
    { id: 'Aq4ua', color: '#00FFFF4' },
    { id: 'Aq5ua', color: '#00FFFF5' },
    { id: '6Aqua', color: '#00FFFF6' },
    { id: 'Aqua7', color: '#00FFFF7' },
    { id: 'Aqu8a', color: '#00FFFF8' },
    { id: 'Aq9ua', color: '#00FFFF9' },
    { id: 'A10qua', color: '#00FFFF10' },
    { id: 'Aquamarine11', color: '#7FFFD411' },
  ],
  Whiteish: [
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
    />
  );
};
