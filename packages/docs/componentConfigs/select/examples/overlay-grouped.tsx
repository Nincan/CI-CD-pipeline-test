import * as React from 'react';
import { Select, Value } from 'spaceweb/select';

const options = {
  __ungrouped: [{ id: 'Black', color: '#000000' }],
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

export default (): React.ReactElement => {
  const [value, setValue] = React.useState<Value>([]);
  return (
    <Select
      options={options}
      labelKey="id"
      valueKey="color"
      onChange={({ value: _value }): void => setValue(_value)}
      value={value}
    />
  );
};
