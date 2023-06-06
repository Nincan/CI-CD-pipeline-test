import Sizes from 'componentConfigs/search/examples/sizes.js';
import AvailableStates from 'componentConfigs/search/examples/available-states.js';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const Search = () => (
  <ComponentWrapper>
    <ComponentName>Search</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '180px' }}>
        <ExampleName>States and Variants</ExampleName>
        <AvailableStates />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '200px' }}>
        <ExampleName>Sizes</ExampleName>
        <Sizes />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default Search;
