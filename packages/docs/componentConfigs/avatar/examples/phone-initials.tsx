import * as React from 'react';
import { Avatar } from 'spaceweb/avatar';
import { Stack } from 'spaceweb/stack';

export default (): React.ReactElement => (
  <Stack direction="horizontal" gap={4} shrink>
    <Avatar name="+91 8234567890" src="https://material-ui.com/static/images/avatar/2.jpg" />
    <Avatar name="+91 8234567890" />
    <Avatar name="+91 3456789012" src="https://material-ui.com/static/images/avatar/2.jpg" allowPhoneInitials />
    <Avatar name="+91 2234567890" allowPhoneInitials />
  </Stack>
);
