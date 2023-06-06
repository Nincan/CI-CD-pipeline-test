import * as React from 'react';
import { Avatar, Size } from 'spaceweb/avatar';
import { Stack } from 'spaceweb/stack';

export default (): React.ReactElement => (
  <Stack direction="horizontal" gap={2} shrink className="items-center">
    {['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].map(size => (
      <Avatar name={size} size={size as Size} src="https://material-ui.com/static/images/avatar/0.jpg" key={size} />
    ))}
  </Stack>
);
