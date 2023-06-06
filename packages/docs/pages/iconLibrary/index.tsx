import { ReactElement } from 'react';
import { Box } from 'spaceweb/box';
import { StatefulTabs, Tab, TabList, TabsPanel } from 'spaceweb/tabs';
import { Typography } from 'spaceweb/typography';
import { version } from 'spaceweb-icons/package.json';
import MarkdownElements, { H1, Paragraph, DocLink } from '../../components/markdown-elements';
import { DesignContent } from '../../components/iconLibrary/DesignContent';
import IconFinder from '../../components/iconLibrary/IconFinder';
import Layout from '../../components/layout';

const InlineCode = MarkdownElements.inlineCode;

const IconographyPage = (props: {
  toggleTheme: () => void;
  toggleDirection: () => void;
  path: string;
  toggleThemeMode: () => void;
}): ReactElement => (
  <Layout
    toggleDirection={props.toggleDirection}
    toggleTheme={props.toggleTheme}
    path={props.path}
    toggleThemeMode={props.toggleThemeMode}
  >
    <H1 slug="spaceweb-icons" title="Spaceweb Icons">
      <Box className="inline-flex items-baseline">
        Spaceweb Icons
        <Typography variant="h5" className="mx-2 spr-text-01">
          v{version}
        </Typography>
      </Box>
    </H1>
    <Paragraph>
      The npm package, <InlineCode>@sprinklr/spaceweb-icons</InlineCode>, includes the Sprinklr icons converted to{' '}
      <DocLink href="/components/icon">Spaceweb Icon Component</DocLink>.
    </Paragraph>
    <Paragraph>
      Status and version information of icons can be found on this <DocLink href="https://airtable.com/shrQmSzcKJrwmFhap">Airtable</DocLink>
    </Paragraph>
    <StatefulTabs>
      <TabList className="mb-4">
        <Tab className="typography-h3">Library</Tab>
        <Tab className="typography-h3">Design</Tab>
      </TabList>
      <TabsPanel tabId="0">
        <IconFinder />
      </TabsPanel>
      <TabsPanel tabId="1">
        <DesignContent />
      </TabsPanel>
    </StatefulTabs>
  </Layout>
);

export default IconographyPage;
