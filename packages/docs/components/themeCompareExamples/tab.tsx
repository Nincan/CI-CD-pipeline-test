import TabsWithIcons from '../../componentConfigs/tabs/examples/default-with-icons';
import FlapTabs from '../../componentConfigs/tabs/examples/flap';
import IconTabs from '../../componentConfigs/tabs/examples/icon-tabs';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const Tab = () => (
  <ComponentWrapper>
    <ComponentName>Tab</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '130px' }}>
        <ExampleName>With Icons</ExampleName>
        <TabsWithIcons />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '120px' }}>
        <ExampleName>Flap Tabs</ExampleName>
        <FlapTabs />
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '270px' }}>
        <ExampleName>Icon Tabs</ExampleName>
        <IconTabs />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default Tab;
