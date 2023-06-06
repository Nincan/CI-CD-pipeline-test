import SelectSizes from '../../componentConfigs/select/examples/sizes';
import CreatableMultiSelect from '../../componentConfigs/select/examples/creatable-multi';
import OverlaySelect from 'componentConfigs/select/examples/overlay-select.js';
import OverlaySelectWithConfirmation from 'componentConfigs/select/examples/overlay-select-with-confirmation.js';
import VirtualSelect from 'componentConfigs/select/examples/with-many-options'

import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const Select = () => (
  <ComponentWrapper>
    <ComponentName>Select</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '190px' }}>
        <ExampleName>Size (Default - lg)</ExampleName>
        <SelectSizes />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '90px' }}>
        <ExampleName>Creatable MultiSelect</ExampleName>
        <CreatableMultiSelect />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '80px' }}>
        <ExampleName>Select as Overlay</ExampleName>
        <OverlaySelect />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '140px' }}>
        <ExampleName>Create Overlay Select with confirmation using overrides</ExampleName>
        <OverlaySelectWithConfirmation />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '140px' }}>
        <ExampleName>Virtualized Select with many options</ExampleName>
        <VirtualSelect />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);
export default Select;
