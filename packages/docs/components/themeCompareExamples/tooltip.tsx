import Stateful from 'componentConfigs/tooltip/examples/stateful.js';
import Size from 'componentConfigs/tooltip/examples/size.js';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const Tooltip = () => (
  <ComponentWrapper>
    <ComponentName>Tooltip</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '110px' }}>
        <ExampleName>Basic Usage</ExampleName>
        <Stateful />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '110px' }}>
        <ExampleName>Size variants</ExampleName>
        <Size />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default Tooltip;
