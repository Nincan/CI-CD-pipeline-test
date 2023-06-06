import { useState } from 'react';
import { Select } from 'spaceweb/select';
import { Button } from 'spaceweb/button';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import { Stack } from 'spaceweb/stack';
import { chevronStyles } from 'spaceweb/helpers/commonStyles';

const options = [
  { id: 'AliceBlue', color: '#F0F8FF' },
  { id: 'AntiqueWhite', color: '#FAEBD7' },
  { id: 'Aquamarine', color: '#7FFFD4' },
  { id: 'Azure', color: '#F0FFFF' },
  { id: 'Beige', color: '#F5F5DC' },
];

const OverlaySelect = () => {
  const [value, setValue] = useState([]);
  const [multiSelectValue, setMultiSelectValue] = useState([]);
  return (
    <Stack direction="horizontal" gap={2} shrink>
      <Select
        options={options}
        labelKey="id"
        valueKey="color"
        placeholder="Choose a color"
        type="overlay"
        onChange={({ value: _value }) => setValue(_value)}
        value={value}
        autoFocus
        closeOnSelect
      >
        {({ isOpen }) => (
          <Button endEnhancer={<ChevronDown size={10} $isOpen={isOpen} style={chevronStyles} />} variant="secondary">
            {value[0]?.id || 'Select Color'}
          </Button>
        )}
      </Select>
      <Select
        options={options}
        labelKey="id"
        valueKey="color"
        placeholder="Choose a color"
        type="overlay"
        onChange={({ value: _value }) => setMultiSelectValue(_value)}
        value={multiSelectValue}
        autoFocus
        filterOutSelected={false}
        closeOnSelect={false}
        multi
        hideSelectAll
      >
        {({ isOpen }) => (
          <Button endEnhancer={<ChevronDown size={10} $isOpen={isOpen} style={chevronStyles} />} variant="secondary">
            Colors Selector
          </Button>
        )}
      </Select>
    </Stack>
  );
};

export default OverlaySelect;
