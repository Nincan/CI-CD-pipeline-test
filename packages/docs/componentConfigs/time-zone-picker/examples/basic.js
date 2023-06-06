import { Box } from 'spaceweb/box';
import { FormControl } from 'spaceweb/form-control';
import useStyle from 'spaceweb/style/useStyle';
import { TimezonePicker } from 'spaceweb/time-zone-picker';

export default function Example() {
  const { css } = useStyle();
  return (
    <Box className={css({ width: '400px' })}>
      <FormControl label="daylight savings time">
        <TimezonePicker date={new Date(2019, 3, 1)} />
      </FormControl>
      <FormControl label="standard time">
        <TimezonePicker date={new Date(2019, 2, 1)} />
      </FormControl>
    </Box>
  );
}
