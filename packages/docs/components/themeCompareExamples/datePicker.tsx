import DatePickerBasic from 'componentConfigs/date-picker/examples/basic';
import DatePickerStates from 'componentConfigs/date-picker/examples/states';
import MultipleMonthsDatePicker from 'componentConfigs/date-picker/examples/multiple-months';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const DatePicker = () => (
  <ComponentWrapper>
    <ComponentName>Date Picker</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '80px' }}>
        <ExampleName>Basic Usage</ExampleName>
        <DatePickerBasic />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '170px' }}>
        <ExampleName>States</ExampleName>
        <DatePickerStates />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '80px' }}>
        <ExampleName>Date Picker with multiple months</ExampleName>
        <MultipleMonthsDatePicker />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default DatePicker;
