import { memo } from 'react';

import { Typography } from 'spaceweb/typography';
import { Box } from 'spaceweb/box';

import { version } from 'spaceweb-form/package.json';

import Link from 'next/link';
import { ComplexLayout } from 'componentConfigs/forms/examples/complex-layout';
import { ResponsiveLayout } from 'componentConfigs/forms/examples/responsive-layout';
import { FormWithRenderIndicator } from 'componentConfigs/forms/examples/form-with-render-indicator';

import Layout from '../../components/layout';
import { DocLink, H1, H4, InlineCode, ListItem, Paragraph, UnorderedList } from '../../components/markdown-elements';
import Code from '../../components/code';
import { Button } from 'spaceweb/button';
import { Banner, BannerItem } from 'spaceweb/banner';

const useFormHookCode = `const {
  values,
  errors,
  touched,
  handleSubmit,
  handleAction,
  scrollToError,
  reset,
  loading,
} = useForm({
  scrollToErrors: true,
  shouldValidateOnBlur: true,
  initialValues: {
    name: 'John Doe', 
  },
  initialErrors: {
    email: "Hold on! This field can't be left blank!",
  },
  validate: async ({ values }) => {
    const emailValidationsResult = validateValues(values.email);
    
    if(emailValidationsResult) {
      return {
        email: emailValidationsResult.error,
      }
    }
    
    return undefined;
  },
  onSubmit: async ({ values }) => {
    try {
      await submitValues({ emailAddresses });
      onSuccess('Form Submitted');
    } catch (e) {
      onError('Please try again');
    }
  },
});
`;

function App(props) {
  return (
    <Layout
      toggleDirection={props.toggleDirection}
      toggleTheme={props.toggleTheme}
      path={props.path}
      toggleThemeMode={props.toggleThemeMode}
    >
      <Box className="flex items-center justify-between">
        <H1 slug="spaceweb-forms" title="Spaceweb Forms">
          <Box className="inline-flex items-baseline">
            Spaceweb Forms
            <Typography variant="h5" weight="regular" className="mx-2 spr-text-02">
              v{version}
            </Typography>
          </Box>
        </H1>
        <Button $as="a" href="/guides/theming" size="sm" variant="primary">
          Learn More
        </Button>
      </Box>

      <Paragraph>✨ Simplified way to build any type of form with easy-to-use validation</Paragraph>

      <H4>
        Experience hassle-free form state handling with{' '}
        <DocLink href="/components/icon">
          <InlineCode>useForm</InlineCode>
        </DocLink>{' '}
        hook
      </H4>

      <Banner intent="success" title="Design Docs" $as="ul">
        <BannerItem>
          Refer to this <Link href="/forms/form-examples">example</Link> further understanding
        </BannerItem>
        <BannerItem>
          Refer to this{' '}
          <a href="https://www.figma.com/file/xL7PJJBqC0CNB1Aax9Kz0d/Form-Builders-Library?node-id=3543%3A251635&t=1z3xW3PzYBg5f1R9-0">
            link
          </a>{' '}
          for design documentation of spaceweb forms
        </BannerItem>
      </Banner>

      <Code language="tsx">{useFormHookCode}</Code>

      <Box className="pt-3">
        <H4>
          Build performant forms with complex layouts using{' '}
          <DocLink href="/components/icon">
            <InlineCode>Form</InlineCode>
          </DocLink>
        </H4>
      </Box>

      <UnorderedList>
        <ListItem>It simplifies the process of building complex layouts.</ListItem>
        <Box className="mt-5 mb-10">
          <ComplexLayout />
        </Box>

        <ListItem>It's performant.</ListItem>
        <Typography variant="bs1" weight="regular" className="spr-text-02">
          Edit the fields and notice the render indicator
        </Typography>
        <Box className="mt-5 mb-10">
          <FormWithRenderIndicator />
        </Box>

        <ListItem>It's responsive.</ListItem>
        <Typography variant="bs1" weight="regular" className="spr-text-02">
          Vary the viewport width and witness the fluidity
        </Typography>
        <Box className="mt-5">
          <ResponsiveLayout />
        </Box>
      </UnorderedList>
    </Layout>
  );
}

export default memo(App);
