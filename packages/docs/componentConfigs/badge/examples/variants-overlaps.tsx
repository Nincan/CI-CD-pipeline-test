import * as React from 'react';

import { Badge } from 'spaceweb/badge';
import { Box } from 'spaceweb/box';
import { Stack } from 'spaceweb/stack';

export default (): React.ReactElement => (
  <Stack direction="horizontal" gap={6} shrink>
    <Badge size="sm">
      <Box className="h-10 w-10 spr-tag-02" />
    </Badge>
    <Badge size="sm" overlap="circle">
      <Box className="h-10 w-10 spr-tag-02 rounded-full" />
    </Badge>
    <Badge size="lg" content="1">
      <Box className="h-10 w-10 spr-tag-02" />
    </Badge>
    <Badge size="lg" overlap="circle" content="1">
      <Box className="h-10 w-10 spr-tag-02 rounded-full" />
    </Badge>
  </Stack>
);
