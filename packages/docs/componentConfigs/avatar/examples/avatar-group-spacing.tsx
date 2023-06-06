import * as React from 'react';
import { Avatar, AvatarGroup } from 'spaceweb/avatar';
import { Stack } from 'spaceweb/stack';

const avatars = [1, 2, 3, 4, 5, 6, 7].map(num => (
  <Avatar key={num} name="user" src="https://material-ui.com/static/images/avatar/1.jpg" />
));

export default (): React.ReactElement => (
  <Stack direction="vertical" gap={2}>
    <AvatarGroup spacing="sm" max={3}>
      {avatars}
    </AvatarGroup>
    <AvatarGroup spacing="md" max={3}>
      {avatars}
    </AvatarGroup>
    <AvatarGroup spacing="lg" max={3}>
      {avatars}
    </AvatarGroup>
  </Stack>
);
