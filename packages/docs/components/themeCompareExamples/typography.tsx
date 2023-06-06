import Heading from '../../componentConfigs/typography/examples/headings';
import BLVariants from '../../componentConfigs/typography/examples/longBodyText';
import BSVariants from '../../componentConfigs/typography/examples/shortBodyText';
import LabelsVariants from '../../componentConfigs/typography/examples/labels';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const Typography = () => (
  <ComponentWrapper>
    <ComponentName>Typography (Default - l1) </ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '440px' }}>
        <ExampleName>Heading</ExampleName>
        <Heading />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '460px' }}>
        <ExampleName>Long Body</ExampleName>
        <BLVariants />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '490px' }}>
        <ExampleName>Short Body</ExampleName>
        <BSVariants />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '200px' }}>
        <ExampleName>Label</ExampleName>
        <LabelsVariants />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default Typography;
