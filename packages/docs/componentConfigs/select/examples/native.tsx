import { useState } from 'react';
import * as React from 'react';
import { Select, Value } from 'spaceweb/select';

const OPTIONS = [
  { id: 'AliceBlue', color: '#F0F8FF' },
  { id: 'AntiqueWhite', color: '#FAEBD7' },
  { id: 'Aqua', color: '#00FFFF' },
  { id: 'Aquamarine', color: '#7FFFD4' },
  { id: 'Azure', color: '#F0FFFF' },
  { id: 'Beige', color: '#F5F5DC' },
];

const App = (): React.ReactElement => {
  const [value, setValue] = useState<Value>([]);
  return (
    <Select
      options={OPTIONS}
      labelKey="id"
      valueKey="color"
      searchable={false}
      clearable={false}
      onChange={({ value: _value }): void => setValue(_value)}
      value={value}
    />
  );
};

export default App;
