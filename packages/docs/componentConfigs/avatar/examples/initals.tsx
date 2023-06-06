import * as React from 'react';
import { Avatar, Size } from 'spaceweb/avatar';
import { Stack } from 'spaceweb/stack';

export default (): React.ReactElement => (
  <Stack direction="horizontal" gap={2} shrink className="items-center">
    {['sm', 'md', 'lg', 'xl'].map(size => (
      <Avatar name="Han Solo" size={size as Size} key={size} />
    ))}
  </Stack>
);
