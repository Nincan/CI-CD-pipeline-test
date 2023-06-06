import { Typography } from 'spaceweb/typography';
import { Link } from 'spaceweb/link';
import { ComponentName, ComponentWrapper, Examples, ExampleWrapper } from './common';

const LinkExample = () => (
  <ComponentWrapper>
    <ComponentName>Link</ComponentName>
    <Examples>
      <ExampleWrapper style={{ height: '70px' }}>
        <Link className="mb-4" href="/">
          Spaceweb Docs Home Page
        </Link>
        <Typography className="mb-4">
          You can check this component in more details <Link href="/components/link">here</Link>.
        </Typography>
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default LinkExample;
