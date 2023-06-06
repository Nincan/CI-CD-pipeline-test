import InputExample from 'componentConfigs/form-control/examples/input.js';
import HorizontalExample from 'componentConfigs/form-control/examples/horizontal.js';
import SubTextExample from 'componentConfigs/form-control/examples/subText.js';
import ValidationExample from 'componentConfigs/form-control/examples/validation.js';
import Kinds from 'componentConfigs/form-control/examples/kinds.js';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const FormControl = () => (
  <ComponentWrapper>
    <ComponentName>Form Control</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '150px' }}>
        <ExampleName>Input</ExampleName>
        <InputExample />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '110px' }}>
        <ExampleName>Horizontal</ExampleName>
        <HorizontalExample />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '300px' }}>
        <ExampleName>SubText</ExampleName>
        <SubTextExample />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '170px' }}>
        <ExampleName>Validation example ( with email )</ExampleName>
        <ValidationExample />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '260px' }}>
        <ExampleName>States</ExampleName>
        <Kinds />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default FormControl;
