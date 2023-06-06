import TextareaBasic from 'componentConfigs/textarea/examples/basic.js';
import TextareaStates from 'componentConfigs/textarea/examples/states.js';
import TextareaSizes from 'componentConfigs/textarea/examples/sizes.js';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const Textarea = () => (
  <ComponentWrapper>
    <ComponentName>Textarea</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '130px' }}>
        <ExampleName>Basic Usage</ExampleName>
        <TextareaBasic />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '220px' }}>
        <ExampleName>States</ExampleName>
        <TextareaStates />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '210px' }}>
        <ExampleName>Sizes</ExampleName>
        <TextareaSizes />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default Textarea;
