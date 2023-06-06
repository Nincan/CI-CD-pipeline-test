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
      <RadioGroup
        size="sm"
        align="horizontal"
        name="radio group"
        onChange={e => setValueS(e.target.value)}
        value={valueS}
      >
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </RadioGroup>
      <div>Medium</div>
      <RadioGroup
        size="md"
        align="horizontal"
        name="radio group"
        onChange={e => setValueM(e.target.value)}
        value={valueM}
      >
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </RadioGroup>
      <div>Large</div>
      <RadioGroup
        size="lg"
        align="horizontal"
        name="radio group"
        onChange={e => setValueL(e.target.value)}
        value={valueL}
      >
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </RadioGroup>
    </Stack>
  );
};
