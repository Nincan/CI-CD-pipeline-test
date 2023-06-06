import TimeRangePickerBasic from 'componentConfigs/time-range-picker/examples/basic';
import TimeRangePickerStates from 'componentConfigs/time-range-picker/examples/states';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const TimeRangePicker = () => (
  <ComponentWrapper>
    <ComponentName>Time Range Picker</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '80px' }}>
        <ExampleName>Basic Usage</ExampleName>
        <TimeRangePickerBasic />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '170px' }}>
        <ExampleName>States</ExampleName>
        <TimeRangePickerStates />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default TimeRangePicker;
