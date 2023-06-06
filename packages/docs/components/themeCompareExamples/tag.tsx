import Basic from 'componentConfigs/tag/examples/basic.js';
import Size from 'componentConfigs/tag/examples/size.js';
import Clickable from 'componentConfigs/tag/examples/clickable.js';
import AvatarTag from 'componentConfigs/tag/examples/avatar-tag.js';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const Tag = () => (
  <ComponentWrapper>
    <ComponentName>Tag</ComponentName>
    <Examples>
      <ExampleWrapper className="block" style={{ height: '70px' }}>
        <ExampleName>Basic Usage</ExampleName>
        <Basic />
      </ExampleWrapper>
      <ExampleWrapper className="block" style={{ height: '70px' }}>
        <ExampleName>Sizes</ExampleName>
        <Size />
      </ExampleWrapper>
      <ExampleWrapper className="block" style={{ height: '90px' }}>
        <ExampleName>Solid/Light Variants</ExampleName>
        <Clickable />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '100px' }}>
        <ExampleName>With Avatar Tag</ExampleName>
        <AvatarTag />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default Tag;
