import { withStyle } from 'baseui';
import { Block } from 'baseui/block';
import { Button } from 'spaceweb/button';
import { StyledLink as Link } from 'baseui/link';
import { H1, H2 } from '../components/markdown-elements';
import Contributors from '../components/contributors';
import { Card, StyledBody, CardOverrides } from 'baseui/card';

import Layout from '../components/layout';
import Markdown from '../components/markdown-elements';

const MinHeightBody = withStyle(StyledBody, {
  minHeight: '150px',
});

const cardOverrides: CardOverrides = {
  Root: {
    style: ({ $theme }) => ({
      marginLeft: $theme.sizing.scale600,
      marginRight: $theme.sizing.scale600,
      marginTop: $theme.sizing.scale500,
      width: '300px',
    }),
  },
};

const Index = (props: { toggleTheme: () => void; toggleDirection: () => void; toggleThemeMode: () => void }) => (
  <Layout
    toggleDirection={props.toggleDirection}
    toggleTheme={props.toggleTheme}
    toggleThemeMode={props.toggleThemeMode}
  >
    <H1>Spaceweb React UI Framework</H1>
    <Block
      display="flex"
      marginLeft="-16px"
      marginRight="-16px"
      overrides={{
        Block: {
          style: ({ $theme }) => ({
            flexWrap: 'wrap',
            [$theme.mediaQuery.small]: {
              flexWrap: 'nowrap',
            },
          }),
        },
      }}
    >
      <Card title="Setup Spaceweb" overrides={cardOverrides}>
        <MinHeightBody>
          Spaceweb is distributed as a private Sprinklr npm package. As Spaceweb is built on top of a CSS-in-JS engine,
          all you need is the dependencies from npm.
        </MinHeightBody>
        <Button $as="a" href="/getting-started/setup" size="md" fullWidth>
          Setup Spaceweb
        </Button>
      </Card>

      <Card title="Learning Spaceweb" overrides={cardOverrides}>
        <MinHeightBody>
          Probably the best way to learn Spaceweb is by start building an application using it. On this page, you’ll
          find a simple and a more complex app built using Spaceweb.
        </MinHeightBody>
        <Button $as="a" href="/guides/theming" size="md" fullWidth>
          Learn more
        </Button>
      </Card>
    </Block>
    <H2>Extensibility</H2>
    <Markdown.p>
      Through the <Link href="/guides/understanding-overrides">Overrides API</Link>, Spaceweb provides you with an
      extreme level of customization. No matter if you want to modify a component in one place only, or you want to
      build your design system on top of Spaceweb, we have the options for you.
    </Markdown.p>
    <H2>Built-in Accessibility</H2>
    <Markdown.p>
      Spaceweb does the heavy lifting for you—components are built with accessibility being a first-class citizen.
    </Markdown.p>
    <Contributors />
  </Layout>
);

export default Index;
