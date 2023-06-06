import { Avatar } from 'spaceweb/avatar';
import { Stack } from 'spaceweb/stack';

export default () => (
  <Stack direction="horizontal" gap={4} shrink>
    <Avatar
      className="border-4 border-solid spr-border-02 cursor-pointer"
      name="Jimmy Page"
      size="xl"
      src="https://guitar.com/wp-content/uploads/2020/05/Jimmy-Page-Hero-Credit-Michael-Ochs-Archives-Getty-Images@2560x1707.jpg"
    />
    <Avatar
      className="border-4 border-solid spr-border-02 cursor-pointer"
      name="Slash"
      size="xl"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw41rTM4NF5mdpIdE8LtlvTLNgakirkjC4gg&usqp=CAU"
    />
  </Stack>
);
