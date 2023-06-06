import * as React from 'react';
import { Option, Select, Value } from 'spaceweb/select';
import styled from 'spaceweb/style/styled';

const ColorSwatch = styled('div', 'mr-2 align-baseline inline-block');

const getLabel = ({ option = {} }: { option?: Option }): React.ReactElement => (
  <>
    <ColorSwatch>{option.color}</ColorSwatch>
    {option.id}
  </>
);

function CustomLabel(): React.ReactElement {
  const [value, setValue] = React.useState<Value>([]);
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
      onChange={(options): void => setValue(options.value)}
      value={value}
      getOptionLabel={getLabel}
      getValueLabel={getLabel}
    />
  );
}

export default CustomLabel;
