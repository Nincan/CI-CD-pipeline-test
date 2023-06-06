import { useState } from 'react';
import { FormControl } from 'spaceweb/form-control';
import { Select } from 'spaceweb/select';

export default () => {
  const [value, setValue] = useState([{ id: 'AliceBlue', color: '#F0F8FF' }]);
  return (
    <FormControl label="Select label" subText="Select Subtext" caption="Select caption">
      <Select
        value={value}
        onChange={({ value: selectValue }) => setValue(selectValue)}
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
      />
    </FormControl>
  );
};
