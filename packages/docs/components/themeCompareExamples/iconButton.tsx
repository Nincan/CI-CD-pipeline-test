import IconButtonVariants from '../../componentConfigs/icon-button/examples/border-variants';
import IconButtonShapes from '../../componentConfigs/icon-button/examples/shapes';
import IconButtonSizes from '../../componentConfigs/icon-button/examples/sizes';
import { ComponentName, ComponentWrapper, ExampleName, Examples, ExampleWrapper } from './common';

const IconButton = () => (
  <ComponentWrapper>
    <ComponentName>IconButton</ComponentName>
    <Examples>
      <ExampleWrapper className="items-center" style={{ height: '110px' }}>
        <ExampleName>Size (Default - md)</ExampleName>
        <IconButtonSizes />
      </ExampleWrapper>
      <ExampleWrapper className="items-center" style={{ height: '290px' }}>
        <ExampleName>Shapes (Default - round)</ExampleName>
        <IconButtonShapes />
      </ExampleWrapper>
      <ExampleWrapper className="items-center" style={{ height: '310px' }}>
        <ExampleName>Bordered Variants</ExampleName>
        <IconButtonVariants />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default IconButton;
