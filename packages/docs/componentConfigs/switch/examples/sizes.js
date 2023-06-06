import { Stack } from 'spaceweb/stack';
import { StatefulSwitch } from 'spaceweb/switch';
import { Typography } from 'spaceweb/typography';

const Section = ({ text = '' }) => <Typography $as="div">{text}</Typography>;

const Sizes = () => (
  <Stack direction="vertical" gap={4}>
    <Section text="Size : small" />
    <StatefulSwitch size="sm" onChange={console.log}>
      click me
    </StatefulSwitch>
    <Section text="Size : medium" />
    <StatefulSwitch size="md" onChange={console.log}>
      click me
    </StatefulSwitch>
    <Section text="Size : large" />
    <StatefulSwitch size="lg" onChange={console.log}>
      click me
    </StatefulSwitch>
  </Stack>
);

export default Sizes;
