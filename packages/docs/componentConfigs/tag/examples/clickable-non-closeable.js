import { Stack } from 'spaceweb/stack';
import { Tag } from 'spaceweb/tag';

const variants = ['solid', 'light'];
// eslint-disable-next-line no-alert
const onClick = intent => alert(`${intent} tag is clicked`);

export default () => (
  <Stack gap={1} direction="vertical">
    {variants.map(variant => (
      <Stack key={variant} gap={1} direction="horizontal">
        <Tag
          closeable={false}
          onClick={() => {
            onClick('neutral');
          }}
          variant={variant}
          intent="default"
        >
          neutral
        </Tag>
        <Tag
          closeable={false}
          onClick={() => {
            onClick('primary');
          }}
          variant={variant}
          intent="success"
        >
          primary
        </Tag>
        <Tag
          closeable={false}
          onClick={() => {
            onClick('accent');
          }}
          variant={variant}
          intent="error"
        >
          accent
        </Tag>
        <Tag
          closeable={false}
          onClick={() => {
            onClick('positive');
          }}
          variant={variant}
          intent="info"
        >
          positive
        </Tag>
        <Tag
          closeable={false}
          onClick={() => {
            onClick('warning');
          }}
          variant={variant}
          intent="warning"
        >
          warning
        </Tag>
        <br />
      </Stack>
    ))}
  </Stack>
);
