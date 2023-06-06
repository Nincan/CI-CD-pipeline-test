import { Stack } from 'spaceweb/stack';
import { Typography } from 'spaceweb/typography';

export default () => (
  <Stack
    direction="vertical"
    gap={2}
    sm={{ direction: 'horizontal', gap: 4 }}
    md={{ direction: 'vertical', gap: 8 }}
    xl={{ direction: 'horizontal', gap: 4 }}
  >
    <Typography>Hello</Typography>
    <Typography>Hello 2</Typography>
    <Typography>Hello 3</Typography>
  </Stack>
);
