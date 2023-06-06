import { LinearProgress } from 'spaceweb/progress';
import { Stack } from 'spaceweb/stack';

export default () => (
  <Stack direction="vertical" gap={4}>
    <LinearProgress intent="default" className="mb-3" value={20} label="default" />
    <LinearProgress intent="success" className="mb-3" value={40} label="success" />
    <LinearProgress intent="warning" className="mb-3" value={60} label="warning" />
    <LinearProgress intent="error" className="mb-3" value={80} label="error" />
  </Stack>
);
