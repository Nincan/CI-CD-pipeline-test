import * as React from 'react';
import { Banner, BannerItem, StyledTitle } from 'spaceweb/banner';
import { Stack, StackItem } from 'spaceweb/stack';

export default (): React.ReactElement => (
  <Stack direction="vertical" gap={2}>
    <StackItem>
      <Banner title="Error Banner Component">
        <p>This is Error Banner Component</p>
      </Banner>
    </StackItem>
    <StackItem>
      <Banner
        intent="warning"
        title={<StyledTitle className="typography-bl1">Warning Banner Component.</StyledTitle>}
      />
    </StackItem>
    <StackItem>
      <Banner
        intent="success"
        title={<StyledTitle className="typography-bl1">Success Banner Component.</StyledTitle>}
      />
    </StackItem>
  </Stack>
);
