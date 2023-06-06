import { Badge } from 'spaceweb/badge';
import { Box } from 'spaceweb/box';
import { Stack } from 'spaceweb/stack';

export default () => (
  <Stack direction="horizontal" gap={6} shrink>
    <Badge content="1" horizontalPosition="left" verticalPosition="top">
      <Box className="h-10 w-10 spr-tag-02" />
    </Badge>
    <Badge content="1" horizontalPosition="right" verticalPosition="top">
      <Box className="h-10 w-10 spr-tag-02" />
    </Badge>
    <Badge content="1" horizontalPosition="left" verticalPosition="bottom">
      <Box className="h-10 w-10 spr-tag-02" />
    </Badge>
    <Badge content="1" horizontalPosition="right" verticalPosition="bottom">
      <Box className="h-10 w-10 spr-tag-02" />
    </Badge>
  </Stack>
);
