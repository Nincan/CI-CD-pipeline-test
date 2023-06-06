import * as React from 'react';
import { Stack } from 'spaceweb/stack';
import { Tag, Variant } from 'spaceweb/tag';

const variants: Variant[] = ['solid', 'light'];
// eslint-disable-next-line no-alert
const onClick = (intent: string): void => alert(`${intent} tag is clicked`);

export default (): React.ReactElement => (
  <Stack gap={1} direction="vertical">
    {variants.map(variant => (
      <Stack key={variant} gap={1} direction="horizontal">
        <Tag
          onClick={(): void => {
            onClick('neutral');
          }}
          variant={variant}
          intent="default"
        >
          neutral
        </Tag>
        <Tag
          onClick={(): void => {
            onClick('primary');
          }}
          variant={variant}
          intent="success"
        >
          primary
        </Tag>
        <Tag
          onClick={(): void => {
            onClick('accent');
          }}
          variant={variant}
          intent="error"
        >
          accent
        </Tag>
        <Tag
          onClick={(): void => {
            onClick('positive');
          }}
          variant={variant}
          intent="info"
        >
          positive
        </Tag>
        <Tag
          onClick={(): void => {
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
