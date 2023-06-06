import { useState } from 'react';
import styled from 'spaceweb/style/styled';
import { Select, Value } from 'spaceweb/select';

const ColorSwatch = styled('div', 'mr-2 align-baseline inline-block');

const getLabel = ({ option }) => (
  <>
    <ColorSwatch>{option.color}</ColorSwatch>
    {option.id}
  </>
);

function CustomLabel() {
  const [value, setValue] = useState([]);
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
      onChange={options => setValue(options.value)}
      value={value}
      getOptionLabel={getLabel}
      getValueLabel={getLabel}
    />
  );
}

export default CustomLabel;
