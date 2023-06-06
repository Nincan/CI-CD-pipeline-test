import Sizes from '../../componentConfigs/checkbox/examples/sizes.js';
import Error from 'componentConfigs/checkbox/examples/error.js';
import Indeterminate from 'componentConfigs/checkbox/examples/indeterminate.js';
import Disabled from 'componentConfigs/checkbox/examples/disabled.js';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const checkbox = () => (
  <ComponentWrapper>
    <ComponentName>Checkbox</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '190px' }}>
        <ExampleName>Sizes</ExampleName>
        <Sizes />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '70px' }}>
        <ExampleName>Error State</ExampleName>
        <Error />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '190px' }}>
        <ExampleName>Indeterminate State</ExampleName>
        <Indeterminate />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '90px' }}>
        <ExampleName>Disabled State</ExampleName>
        <Disabled />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default checkbox;
