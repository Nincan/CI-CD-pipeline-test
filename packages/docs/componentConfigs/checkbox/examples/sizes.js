import { StatefulCheckbox } from 'spaceweb/checkbox';
import { Stack } from 'spaceweb/stack';

export default () => {
  const Section = ({ text = '' }) => <div>{text}</div>;
  return (
    <Stack direction="vertical" gap={2}>
      <Section text="Size : small" />
      <StatefulCheckbox size="sm" onChange={console.log}>
        click me
      </StatefulCheckbox>
      <Section text="Size : medium" />
      <StatefulCheckbox size="md" onChange={console.log}>
        click me
      </StatefulCheckbox>
      <Section text="Size : large" />
      <StatefulCheckbox size="lg" onChange={console.log}>
        click me
      </StatefulCheckbox>
    </Stack>
  );
};
