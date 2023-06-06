import TimePickerExample from 'componentConfigs/time-picker/examples/basic';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const TimePicker = () => (
  <ComponentWrapper>
    <ComponentName>Time Picker</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '280px' }}>
        <ExampleName>Basic Usage</ExampleName>
        <TimePickerExample />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default TimePicker;
