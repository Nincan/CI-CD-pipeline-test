import ButtonIntents from '../../componentConfigs/button/examples/intents';
import ButtonSizes from '../../componentConfigs/button/examples/sizes';
import ButtonVariants from '../../componentConfigs/button/examples/variants';
import ButtonShapes from '../../componentConfigs/button/examples/shapes';
import IconTextButtons from '../../componentConfigs/button/examples/iconTextButtons';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const Button = () => (
  <ComponentWrapper>
    <ComponentName>Button</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '110px' }}>
        <ExampleName>Size (Default - Large)</ExampleName>
        <ButtonSizes />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '240px' }}>
        <ExampleName>Variants (Default - Primary)</ExampleName>
        <ButtonVariants />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '240px' }}>
        <ExampleName>Intents</ExampleName>
        <ButtonIntents />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '235px' }}>
        <ExampleName>Shapes</ExampleName>
        <ButtonShapes />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '240px' }}>
        <ExampleName>IconTextButtons</ExampleName>
        <IconTextButtons />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default Button;
