import { ReactElement, useState } from 'react';
import * as React from 'react';

import { TimeRangePicker } from 'spaceweb/time-range-picker';
import { Typography } from 'spaceweb/typography';
import AlertWarningIcon from 'spaceweb-icons/solid/AlertWarning';
import { Stack } from 'spaceweb/stack';
import { StatefulCheckbox } from 'spaceweb/checkbox';

export default (): ReactElement => {
  const [value, setValue] = useState<Date[] | string>([
    new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000),
    new Date(),
  ]);
  const [timezone, setTimezone] = React.useState('Asia/Kolkata');

  const handleSubmit = data => {
    setValue(data.value);
    setTimezone(data.timezone);
  };

  return (
    <TimeRangePicker
      overrides={{
        HeaderBeforeEnhancer: {
          component: () => (
            <>
              <Typography variant="bs1" $as="span" weight="medium" className="ml-5 flex items-center">
                Date Range
              </Typography>
            </>
          ),
        },
        FooterBeforeEnhancer: {
          component: () => (
            <Stack direction="horizontal" gap={2} className="items-center" shrink>
              <StatefulCheckbox>Filter Stats only</StatefulCheckbox>
              <AlertWarningIcon size={14} />
            </Stack>
          ),
        },
      }}
      value={value}
      timezone={timezone}
      onSubmit={handleSubmit}
      timeSelect
    />
  );
};
