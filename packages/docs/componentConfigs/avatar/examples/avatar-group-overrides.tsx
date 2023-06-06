import * as React from 'react';
import { StyleUtils } from 'spaceweb';
import { Avatar, AvatarGroup } from 'spaceweb/avatar';
import { StyleObject } from 'spaceweb/types';

export default (): React.ReactElement => (
  <AvatarGroup
    max={3}
    overrides={{
      Root: { style: ({ theme }): StyleObject => ({ backgroundColor: theme.spr.clrOrange }) },
      ExtraAvatar: { props: { overrides: { Initials: { style: { color: 'red' } } } } },
    }}
  >
    <Avatar name="user" src="https://material-ui.com/static/images/avatar/1.jpg" />
    <Avatar
      name="user"
      src="https://material-ui.com/static/images/avatar/1.jpg"
      overrides={{
        Root: {
          style: ({ theme }: StyleUtils): StyleObject => ({
            borderStyle: 'solid',
            borderWidth: theme.borderWidth.default,
            borderColor: theme.spr.focus01,
          }),
        },
      }}
    />
    <Avatar name="user" src="https://material-ui.com/static/images/avatar/1.jpg" />
    <Avatar name="user" src="https://material-ui.com/static/images/avatar/1.jpg" />
    <Avatar name="user" src="https://material-ui.com/static/images/avatar/1.jpg" />
  </AvatarGroup>
);
