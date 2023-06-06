import TimeZonePickerExample from 'componentConfigs/time-zone-picker/examples/basic.js';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const TimeZonePicker = () => (
  <ComponentWrapper>
    <ComponentName>Time Zone Picker</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '200px' }}>
        <ExampleName>Basic Usage</ExampleName>
        <TimeZonePickerExample />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default TimeZonePicker;
