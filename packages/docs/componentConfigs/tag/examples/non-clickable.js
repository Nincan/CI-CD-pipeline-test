import { Stack } from 'spaceweb/stack';
import { Tag } from 'spaceweb/tag';

const variants = ['solid', 'light'];

export default () => (
  <Stack gap={1} direction="vertical">
    {variants.map(variant => (
      <Stack key={variant} gap={1} direction="horizontal">
        <Tag variant={variant} intent="default">
          default
        </Tag>

        <Tag variant={variant} intent="error">
          error
        </Tag>

        <Tag variant={variant} intent="success">
          success
        </Tag>

        <Tag variant={variant} intent="warning">
          warning
        </Tag>

        <Tag variant={variant} intent="info">
          info
        </Tag>
        <br />
      </Stack>
    ))}
  </Stack>
);
