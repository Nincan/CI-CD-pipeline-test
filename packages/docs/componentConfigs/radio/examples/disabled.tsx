import { Radio, RadioGroup } from 'spaceweb/radio';

export default () => (
  <RadioGroup disabled name="radio group" value="1">
    <Radio value="1">Checked</Radio>
    <Radio value="2">Unchecked</Radio>
  </RadioGroup>
);
