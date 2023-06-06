import Shapes from 'componentConfigs/avatar/examples/shapes.js';
import AvatarGroupBasic from 'componentConfigs/avatar/examples/avatar-group.js';
import AvatarGroupSpacing from 'componentConfigs/avatar/examples/avatar-group-spacing.js';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const Avatar = () => (
  <ComponentWrapper>
    <ComponentName>Avatar</ComponentName>
    <Examples>
      <ExampleWrapper className="block" style={{ height: '140px' }}>
        <ExampleName>Different sizes and shapes</ExampleName>
        <Shapes />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '80px' }}>
        <ExampleName>Avatar group basic</ExampleName>
        <AvatarGroupBasic />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '160px' }}>
        <ExampleName>Different spacing in avatar group</ExampleName>
        <AvatarGroupSpacing />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default Avatar;
