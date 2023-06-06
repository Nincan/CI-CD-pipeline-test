import { useRef, useState } from 'react';
import { Stack } from 'spaceweb/stack';
import { Button } from 'spaceweb/button';
import { Select } from 'spaceweb/select';

const options = [
  { id: 'AliceBlue', color: '#F0F8FF' },
  { id: 'AntiqueWhite', color: '#FAEBD7' },
  { id: 'Aquamarine', color: '#7FFFD4' },
  { id: 'Azure', color: '#F0FFFF' },
  { id: 'Beige', color: '#F5F5DC' },
];

const ControlRef = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const controlRef = useRef();
  return (
    <Stack direction="vertical" gap={5}>
      <Stack direction="horizontal" gap={2}>
        <Button size="sm" onClick={() => controlRef.current?.setDropdownOpen(true)}>
          Open Dropdown
        </Button>
        <Button size="sm" onClick={() => controlRef.current?.setDropdownOpen(false)}>
          Close Dropdown
        </Button>
        <Button size="sm" onClick={() => controlRef.current?.focus()}>
          Focus
        </Button>
        <Button size="sm" onClick={() => controlRef.current?.blur()}>
          Blur
        </Button>
        <Button size="sm" onClick={() => controlRef.current?.setInputValue('orange')}>
          Set value to `orange`
        </Button>
      </Stack>
      <Select
        options={options}
        labelKey="id"
        valueKey="color"
        placeholder="Choose a color"
        onChange={({ value: _value }) => {
          setSelectedValues(_value);
        }}
        multi
        closeOnSelect={false}
        value={selectedValues}
        hideSelectAll
        controlRef={controlRef}
      />
    </Stack>
  );
};

export default ControlRef;
