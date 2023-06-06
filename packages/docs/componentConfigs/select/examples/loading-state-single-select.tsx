import { useState, ReactNode } from 'react';
import { Select, LOADING_KEY } from 'spaceweb/select';

export default (): ReactNode => {
  const [value, setValue] = useState([{ id: 'AliceBlue', color: '#F0F8FF', [LOADING_KEY]: true }]);
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
      onChange={({ value: _value }) => setValue(_value)}
      value={value}
    />
  );
};
