import { useState } from 'react';

import { FormControl } from 'spaceweb/form-control';
import { TimePicker } from 'spaceweb/time-picker';
import { Box } from 'spaceweb/box';

export default () => {
  const [twelveHourTime, setTwelveHourTime] = useState<Date | null>(null);
  const [twentyFourHourTime, setTwentyFourHourTime] = useState<Date | null>(null);
  const [creatableTime, setCreatableTime] = useState<Date | null>(null);
  return (
    <Box>
      <FormControl label="12 hour format">
        <TimePicker value={twelveHourTime} onChange={setTwelveHourTime} />
      </FormControl>
      <FormControl label="24 hour format">
        <TimePicker value={twentyFourHourTime} onChange={setTwentyFourHourTime} format="24" step={1800} />
      </FormControl>
      <FormControl label="Creatable times">
        <TimePicker value={creatableTime} onChange={setCreatableTime} creatable step={900} />
      </FormControl>
    </Box>
  );
};
