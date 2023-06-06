import { Box } from 'spaceweb/box';
import { AvatarTag } from 'spaceweb/tag';
import { Stack } from 'spaceweb/stack';

const avatarProps = {
  name: 'user',
  src: 'https://bit.ly/3dcBo1S',
};

const RedDot = <Box className="inline-block px-1 py-1 mr-1 rounded-full spr-clr-red" />;
const GreenDot = <Box className="inline-block px-1 py-1 mr-1 rounded-full spr-clr-green" />;

export default () => (
  <Stack gap={1} direction="vertical">
    <Stack gap={1} direction="horizontal" className="inline-flex">
      <AvatarTag avatarProps={avatarProps}>Charlie Chaplin</AvatarTag>
      <AvatarTag avatarProps={{ name: 'User' }}>Charlie Chaplin</AvatarTag>
      <AvatarTag avatarProps={avatarProps}>User with very long long name</AvatarTag>
    </Stack>
    <Stack gap={1} direction="horizontal" className="inline-flex">
      <AvatarTag startEnhancer={RedDot} avatarProps={avatarProps}>
        With Start enhancer
      </AvatarTag>
      <AvatarTag startEnhancer={GreenDot} avatarProps={avatarProps}>
        With Start enhancer
      </AvatarTag>
    </Stack>
  </Stack>
);
