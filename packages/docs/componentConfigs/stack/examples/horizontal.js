import { Stack } from 'spaceweb/stack';
import { StatefulInput } from 'spaceweb/input';

export default () => (
  <Stack direction="horizontal" gap={2}>
    <StatefulInput placeholder="Enter Name" />
    <StatefulInput placeholder="Enter Address" />
    <StatefulInput placeholder="Enter Phone Number" type="number" />
  </Stack>
);
