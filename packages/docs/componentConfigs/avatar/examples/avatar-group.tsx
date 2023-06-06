import * as React from 'react';
import { Avatar, AvatarGroup } from 'spaceweb/avatar';

export default (): React.ReactElement => (
  <AvatarGroup size="lg">
    <Avatar name="user" src="https://material-ui.com/static/images/avatar/1.jpg" />
    <Avatar name="user" src="https://material-ui.com/static/images/avatar/1.jpg" />
    <Avatar name="user" src="https://material-ui.com/static/images/avatar/1.jpg" />
    <Avatar name="user" src="https://material-ui.com/static/images/avatar/1.jpg" />
  </AvatarGroup>
);
