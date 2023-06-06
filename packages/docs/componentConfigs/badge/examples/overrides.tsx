import { ReactElement } from 'react';

import { Badge } from 'spaceweb/badge';
import { Box } from 'spaceweb/box';
import { Stack } from 'spaceweb/stack';

export default (): ReactElement => (
  <Stack direction="horizontal" gap={6} shrink>
    <Badge overlap="circle" content="32" overrides={{ Anchor: { style: 'rounded-5' } }}>
      <Box className="h-10 w-10 spr-tag-02 rounded-full" />
    </Badge>
    <Badge content="32" overrides={{ Anchor: { style: 'rounded-3 typography-l4' } }}>
      <Box className="h-8 w-8 spr-tag-02" />
    </Badge>
  </Stack>
);
