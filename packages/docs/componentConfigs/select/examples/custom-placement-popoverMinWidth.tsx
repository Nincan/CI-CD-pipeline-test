import * as React from 'react';
import { Select, Value } from 'spaceweb/select';

export default (): React.ReactElement => {
  const [value, setValue] = React.useState<Value>([]);
  return (
    <Select
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
      onChange={({ value: _value }): void => setValue(_value)}
      value={value}
      overrides={{
        Root: {
          style: {
            width: '200px',
          },
        },
      }}
      popoverMinWidth="400px"
      placement="bottomLeft"
    />
  );
};
