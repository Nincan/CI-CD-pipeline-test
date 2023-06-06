import { ReactElement } from 'react';
import { StatefulSlider } from 'spaceweb/slider';
import { Stack } from 'spaceweb/stack';

const Intents = (): ReactElement => (
  <Stack direction="horizontal" gap={2}>
    <Stack direction="vertical" gap={1}>
      <StatefulSlider intent="default" />
      <StatefulSlider intent="error" />
      <StatefulSlider intent="warning" />
      <StatefulSlider intent="success" />
    </Stack>
    <Stack direction="vertical" gap={1}>
      <StatefulSlider intent="default" disabled />
      <StatefulSlider intent="error" disabled />
      <StatefulSlider intent="warning" disabled />
      <StatefulSlider intent="success" disabled />
    </Stack>
  </Stack>
);

export default Intents;
