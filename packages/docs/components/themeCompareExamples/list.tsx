import Basic from 'componentConfigs/list/examples/basic.js';
import AutoFocus from 'componentConfigs/list/examples/autoFocus.js';
import AsButton from 'componentConfigs/list/examples/as-button.js';
import Disabled from 'componentConfigs/list/examples/disabled.js';
import VirtualList from 'componentConfigs/list/examples/virtual-list';

import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const List = () => (
  <ComponentWrapper>
    <ComponentName>List</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '200px' }}>
        <ExampleName>Basic Usage</ExampleName>
        <Basic />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '170px' }}>
        <ExampleName>autoFocus Prop Usage</ExampleName>
        <AutoFocus />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '200px' }}>
        <ExampleName>List Item with button prop</ExampleName>
        <AsButton />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '200px' }}>
        <ExampleName>Disbaled ListItem</ExampleName>
        <Disabled />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '500px' }}>
        <ExampleName>Virtualized List</ExampleName>
        <VirtualList />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default List;
