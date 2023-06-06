import * as React from 'react';
import { Radio, RadioGroup } from 'spaceweb/radio';
import { Stack } from 'spaceweb/stack';

export default () => {
  const [valueS, setValueS] = React.useState('1');
  const [valueM, setValueM] = React.useState('1');
  const [valueL, setValueL] = React.useState('1');
  return (
    <Stack direction="vertical" gap={3}>
      <div>Small</div>
      <RadioGroup size="sm" name="radio group" onChange={e => setValueS(e.target.value)} value={valueS}>
        <Radio value="1">Small 1</Radio>
        <Radio value="2">Small 2</Radio>
      </RadioGroup>
      <div>Medium</div>
      <RadioGroup size="md" name="radio group" onChange={e => setValueM(e.target.value)} value={valueM}>
        <Radio value="1">Medium 1</Radio>
        <Radio value="2">Medium 2</Radio>
      </RadioGroup>
      <div>Large</div>
      <RadioGroup size="lg" name="radio group" onChange={e => setValueL(e.target.value)} value={valueL}>
        <Radio value="1">Large 1</Radio>
        <Radio value="2">Large 2</Radio>
      </RadioGroup>
    </Stack>
  );
};
