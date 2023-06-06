import * as React from 'react';
import { Stack } from 'spaceweb/stack';
import { Tag } from 'spaceweb/tag';

export default (): React.ReactElement => (
  <Stack gap={2} direction="horizontal" className="inline-flex">
    <Tag variant="solid" intent="error">
      solid
    </Tag>
    <Tag variant="light" intent="error">
      light
    </Tag>
  </Stack>
);
