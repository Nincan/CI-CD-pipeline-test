import { Avatar } from 'spaceweb/avatar';
import { Stack } from 'spaceweb/stack';

export default () => (
  <Stack direction="horizontal" gap={2} shrink className="items-center">
    {['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].map(size => (
      <Avatar name={size} size={size} src="https://material-ui.com/static/images/avatar/0.jpg" key={size} />
    ))}
  </Stack>
);
