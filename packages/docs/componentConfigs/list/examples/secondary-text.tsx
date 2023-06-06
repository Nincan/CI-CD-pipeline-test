import * as React from 'react';
import { AvatarListItem, List, ListItemText } from 'spaceweb/list';
import { Typography } from 'spaceweb/typography';

const avatarProps = { name: 'Jane Doe', src: 'https://api.adorable.io/avatars/285/10@adorable.io.png' };
export default (): React.ReactElement => (
  <List className="border border-solid spr-border-01">
    <AvatarListItem button avatarProps={avatarProps}>
      <ListItemText secondary="@jane_doe">Jane Doe</ListItemText>
    </AvatarListItem>
    <AvatarListItem button avatarProps={avatarProps}>
      <ListItemText secondary="@jane_doe">Jane Doe</ListItemText>
    </AvatarListItem>
    <AvatarListItem button avatarProps={avatarProps}>
      <ListItemText secondary="@jane_doe">Jane Doe</ListItemText>
    </AvatarListItem>
    <AvatarListItem button avatarProps={avatarProps}>
      <ListItemText secondary={<Typography weight="bold">@jane_doe</Typography>}>Jane Doe</ListItemText>
    </AvatarListItem>
  </List>
);
