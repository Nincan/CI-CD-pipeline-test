import { Stack } from 'spaceweb/stack';
import { Tag } from 'spaceweb/tag';
import * as React from 'react';

export default () => (
  <Stack gap={2} direction="horizontal" className="inline-flex">
      <Tag size="sm">sm</Tag>
    <Tag size="lg">lg</Tag>
  </Stack>
);
