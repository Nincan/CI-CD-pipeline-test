import { Stack } from 'spaceweb/stack';
import { Tag } from 'spaceweb/tag';

const variants = ['solid', 'light'];

export default () => (
  <Stack gap={1} direction="vertical">
    {variants.map(variant => (
      <Stack key={variant} gap={1} direction="horizontal">
        <Tag closeable={false} variant={variant} intent="default">
          default
        </Tag>

        <Tag closeable={false} variant={variant} intent="error">
          error
        </Tag>

        <Tag closeable={false} variant={variant} intent="success">
          success
        </Tag>

        <Tag closeable={false} variant={variant} intent="warning">
          warning
        </Tag>

        <Tag closeable={false} variant={variant} intent="info">
          info
        </Tag>
        <br />
      </Stack>
    ))}
  </Stack>
);
