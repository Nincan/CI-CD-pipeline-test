import { ReactElement, useState } from 'react';

import { Select, Value } from 'spaceweb/select';
import { Box } from 'spaceweb/box';

const Delimiter = (): ReactElement => {
  const [value, setValue] = useState<Value>([]);

  return (
    <Box className="flex items-center">
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
        delimiter=","
      />
    </Box>
  );
};

export default Delimiter;
