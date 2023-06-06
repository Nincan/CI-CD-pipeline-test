import * as React from 'react';
import { Banner, BannerItem, StyledTitle } from 'spaceweb/banner';
import { Stack, StackItem } from 'spaceweb/stack';

export default () => (
  <Stack direction="vertical" gap={2}>
    <StackItem>
      <Banner title="Numeric List Banner Component" $as="ol">
        <BannerItem>Error 1</BannerItem>
        <BannerItem>Error 2</BannerItem>
        <BannerItem>Error 3</BannerItem>
      </Banner>
    </StackItem>
    <StackItem>
      <Banner title="Bullet List Banner Component" $as="ul">
        <BannerItem>Error 1</BannerItem>
        <BannerItem>Error 2</BannerItem>
        <BannerItem>Error 3</BannerItem>
      </Banner>
    </StackItem>
    <StackItem>
      <Banner title="No list Banner Component">
        <p>This is Error Banner Component</p>
      </Banner>
    </StackItem>
  </Stack>
);
