import { useState } from 'react';
import { Select } from 'spaceweb/select';

const OPTIONS = [
  { id: 'AliceBlue', color: '#F0F8FF' },
  { id: 'AntiqueWhite', color: '#FAEBD7' },
  { id: 'Aqua', color: '#00FFFF' },
  { id: 'Aquamarine', color: '#7FFFD4' },
  { id: 'Azure', color: '#F0FFFF' },
  { id: 'Beige', color: '#F5F5DC' },
];

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <Select
      options={OPTIONS}
      labelKey="id"
      valueKey="color"
      searchable={false}
      clearable={false}
      onChange={({ value: _value }) => setValue(_value)}
      value={value}
    />
  );
};

export default App;
