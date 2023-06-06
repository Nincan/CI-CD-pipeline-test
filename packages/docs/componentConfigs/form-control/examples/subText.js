import { FormControl } from 'spaceweb/form-control';
import { StatefulInput } from 'spaceweb/input';
import { Stack } from 'spaceweb/stack';

export default () => (
  <Stack direction="vertical" gap={4}>
    <FormControl label="Vertical Layout" subText="Help Text will be rendered b/w Label and Field" required>
      <StatefulInput placeholder="Enter your account number here" />
    </FormControl>
    <FormControl
      label="Vertical Layout"
      subText="Help Text will be displayed when hovered on info icon."
      subTextAsIcon
      required
    >
      <StatefulInput placeholder="Enter your account number here" />
    </FormControl>
    <FormControl
      label="Horizontal"
      layout="horizontal"
      subText="Help Text will be displayed when hovered on info icon."
      required
    >
      <StatefulInput placeholder="Enter your account number here" />
    </FormControl>
  </Stack>
);
