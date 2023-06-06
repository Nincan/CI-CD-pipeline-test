import * as React from 'react';
import { Typography } from 'spaceweb/typography';
import { Stack } from 'spaceweb/stack';

const textString = 'We ignite opportunity by setting the world in motion.';

export default (): React.ReactElement => (
  <Stack direction="vertical" gap={6}>
    <Typography variant="h1">h1 - {textString}</Typography>
    <Typography variant="h2">h2 - {textString}</Typography>
    <Typography variant="h3">h3 - {textString}</Typography>
    <Typography variant="h4">h4 - {textString}</Typography>
    <Typography variant="h5">h5 - {textString}</Typography>
    <Typography variant="h6">h6 - {textString}</Typography>
    <Typography variant="h7">h7 - {textString}</Typography>
  </Stack>
);
