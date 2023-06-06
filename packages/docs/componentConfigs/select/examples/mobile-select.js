import { useState } from 'react';
import { Select } from 'spaceweb/select';
import { Button } from 'spaceweb/button';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';

const options = [
  { id: 'AliceBlue', color: '#F0F8FF' },
  { id: 'AntiqueWhite', color: '#FAEBD7' },
  { id: 'Aquamarine', color: '#7FFFD4' },
  { id: 'Azure', color: '#F0FFFF' },
  { id: 'Beige', color: '#F5F5DC' },
];

const MobileSelect = () => {
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
    >
      <Button endEnhancer={<ChevronDown size={10} />} variant="secondary">
        {value[0]?.id || 'Select Color'}
      </Button>
    </Select>
  );
};

export default MobileSelect;
