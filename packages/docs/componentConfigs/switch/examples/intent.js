import { StatefulSwitch } from 'spaceweb/switch';
import { Stack } from 'spaceweb/stack';

const Intents = () => {
  const intents = ['default', 'error', 'warning', 'success'];
  return (
    <Stack direction="vertical" gap={4}>
      {intents.map(intent => (
        <StatefulSwitch key={intent} initialState={{ checked: true }} intent={intent}>
          intent - {intent}
        </StatefulSwitch>
      ))}
    </Stack>
  );
};

export default Intents;
