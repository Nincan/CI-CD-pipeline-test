import { Variant } from 'spaceweb';
import { Button } from 'spaceweb/button';
import { StatefulButtonGroup } from 'spaceweb/button-group';
import { Col, Grid } from 'spaceweb/grid';
import { Typography } from 'spaceweb/typography';
import { ComponentName, ComponentWrapper, ExampleName, Examples, ExampleWrapper } from './common';
import IconButtonGroup from 'componentConfigs/button-group/examples/icon';

const ButtonGroupBasic = ({ variant = 'primary' }: { variant: Variant }) => (
  <>
    <Col>
      <Typography>{variant}</Typography>
    </Col>
    <Col>
      <StatefulButtonGroup variant={variant} initialState={[1]}>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </StatefulButtonGroup>
    </Col>
  </>
);

const ButtonGroupExample = () => (
  <ComponentWrapper>
    <ComponentName>ButtonGroup</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '230px' }}>
        <Grid className="w-2/3" cols={2} rowGap={4}>
          <ButtonGroupBasic variant="primary" />
          <ButtonGroupBasic variant="secondary" />
          <ButtonGroupBasic variant="tertiary" />
          <ButtonGroupBasic variant="minimal" />
        </Grid>
      </ExampleWrapper>
      <ExampleWrapper style={{ height: '60px', alignItems: 'flex-start' }}>
        <ExampleName>Icon Button</ExampleName>
        <IconButtonGroup />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default ButtonGroupExample;
