import MenuPopover from 'componentConfigs/menu/examples/menu-popover.js';
import MenuScrollable from 'componentConfigs/menu/examples/menu-scrollable.js';
import ActionMenu from 'componentConfigs/menu/examples/action-menu.js';
import NestedMenu from 'componentConfigs/menu/examples/nested-menu.js';
import VirtualMenu from 'componentConfigs/menu/examples/virtual-list';

import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const Menu = () => (
  <ComponentWrapper>
    <ComponentName>Menu</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '80px' }}>
        <ExampleName>Menu with popover</ExampleName>
        <MenuPopover />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '80px' }}>
        <ExampleName>Menu with max-height</ExampleName>
        <MenuScrollable />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '80px' }}>
        <ExampleName>Action menu</ExampleName>
        <ActionMenu />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '80px' }}>
        <ExampleName>Nested Menu with popover</ExampleName>
        <NestedMenu />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '500px' }}>
        <ExampleName>Virtualized Menu</ExampleName>
        <VirtualMenu />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default Menu;
