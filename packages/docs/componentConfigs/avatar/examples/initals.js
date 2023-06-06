import { Avatar } from 'spaceweb/avatar';
import { Stack } from 'spaceweb/stack';

export default () => (
  <Stack direction="horizontal" gap={2} shrink className="items-center">
    {['sm', 'md', 'lg', 'xl'].map(size => (
      <Avatar name="Han Solo" size={size} key={size} />
    ))}
  </Stack>
);
