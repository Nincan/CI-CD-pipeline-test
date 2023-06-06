import InputSizes from '../../componentConfigs/input/examples/sizes';
import InputStates from '../../componentConfigs/input/examples/available-states';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const Input = () => (
  <ComponentWrapper>
    <ComponentName>Input</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '190px' }}>
        <ExampleName>Size (Default - lg)</ExampleName>
        <InputSizes />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '290px' }}>
        <ExampleName>States and Variants</ExampleName>
        <InputStates />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default Input;
