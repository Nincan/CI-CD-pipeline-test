// @flow
import * as React from 'react';
import {Radio, RadioGroup} from 'spaceweb/radio';

export default () => {
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup
      intent="error"
      name="radio group"
      onChange={e => setValue(e.target.value)}
      value={value}
    >
      <Radio value="1">First</Radio>
      <Radio value="2">Second</Radio>
      <Radio value="3">Third</Radio>
    </RadioGroup>
  );
};
