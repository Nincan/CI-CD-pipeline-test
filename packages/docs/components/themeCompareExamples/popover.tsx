import Stateless from 'componentConfigs/popover/examples/stateless.js';
import WithArrow from 'componentConfigs/popover/examples/with-arrow.js';
import Dismiss from 'componentConfigs/popover/examples/dismiss.js';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const Popover = () => (
  <ComponentWrapper>
    <ComponentName>Popover</ComponentName>
    <Examples>
      <ExampleWrapper style={{ display: 'block', height: '90px' }}>
        <ExampleName>Basic</ExampleName>
        <Stateless />
      </ExampleWrapper>
      <ExampleWrapper style={{ display: 'block', height: '80px' }}>
        <ExampleName>Popover with arrow</ExampleName>
        <WithArrow />
      </ExampleWrapper>
      <ExampleWrapper style={{ display: 'block', height: '80px' }}>
        <ExampleName>Popover close from content</ExampleName>
        <Dismiss />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default Popover;
