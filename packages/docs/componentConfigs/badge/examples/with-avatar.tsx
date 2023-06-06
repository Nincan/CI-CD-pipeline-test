import Youtube from 'spaceweb-icons/brand/Youtube';
import { ReactElement } from 'react';

import { Avatar } from 'spaceweb/avatar';
import { Badge } from 'spaceweb/badge';
import { Stack } from 'spaceweb/stack';

export default (): ReactElement => (
  <Stack direction="horizontal" gap={6} shrink>
    <Badge size="sm" overlap="circle" intent="success">
      <Avatar name="user" src="https://bit.ly/3dcBo1S" />
    </Badge>
    <Badge overlap="circle" content={(): ReactElement => <Youtube className="spr-icon-01 h-full" />}>
      <Avatar name="user" src="https://bit.ly/3dcBo1S" />
    </Badge>
  </Stack>
);
