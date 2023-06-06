import Sizes from 'componentConfigs/radio/examples/sizes.js';
import Disabled from 'componentConfigs/radio/examples/disabled.js';
import HorizontalAlign from 'componentConfigs/radio/examples/horizontal-align.js';
import Error from 'componentConfigs/radio/examples/error.js';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const Radio = () => (
  <ComponentWrapper>
    <ComponentName>Radio</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '360px' }}>
        <ExampleName>Sizes</ExampleName>
        <Sizes />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '120px' }}>
        <ExampleName>Disabled Radios</ExampleName>
        <Disabled />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '250px' }}>
        <ExampleName>Horizontal Alignment</ExampleName>
        <HorizontalAlign />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '150px' }}>
        <ExampleName>Error State</ExampleName>
        <Error />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default Radio;
