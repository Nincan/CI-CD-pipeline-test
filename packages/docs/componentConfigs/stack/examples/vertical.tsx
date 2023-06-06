import { Stack } from 'spaceweb/stack';
import { StatefulInput } from 'spaceweb/input';

export default () => (
  <Stack direction="vertical" gap={2} className="w-64">
    <StatefulInput placeholder="Enter Name" />
    <StatefulInput placeholder="Enter Address" />
    <StatefulInput placeholder="Enter Phone Number" type="number" />
  </Stack>
);
