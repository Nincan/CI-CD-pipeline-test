import * as React from 'react';
import { CircularProgress } from 'spaceweb/progress';
import { Stack } from 'spaceweb/stack';

export default (): React.ReactElement => (
  <Stack direction="horizontal" gap={4}>
    <CircularProgress intent="default" className="mr-3" value={20} label="20%" />
    <CircularProgress intent="success" className="mr-3" value={40} label="40%" />
    <CircularProgress intent="warning" className="mr-3" value={60} label="60%" />
    <CircularProgress intent="error" className="mr-3" value={80} label="80%" />
  </Stack>
);
