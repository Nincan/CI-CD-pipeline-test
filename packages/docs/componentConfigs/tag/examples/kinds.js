import { Stack } from 'spaceweb/stack';
import { Tag } from 'spaceweb/tag';

export default () => (
  <Stack gap={2} direction="horizontal" className="inline-flex">
    <Tag intent="default">default</Tag>

    <Tag intent="warning">warning</Tag>

    <Tag intent="error">error</Tag>

    <Tag intent="success">success</Tag>

    <Tag intent="info">info</Tag>
  </Stack>
);
