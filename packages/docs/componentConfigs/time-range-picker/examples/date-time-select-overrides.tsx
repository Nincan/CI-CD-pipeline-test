import { ReactElement, useState, ChangeEvent, ReactNode } from 'react';
import * as React from 'react';

import { TimeRangePicker } from 'spaceweb/time-range-picker';
import { TimeSelect } from 'spaceweb/date-picker';
import { StackItem, Stack } from 'spaceweb/stack';
import { Switch } from 'spaceweb/switch';
import AlertWarningIcon from 'spaceweb-icons/solid/AlertWarning';
import { StatefulTooltip } from 'spaceweb/tooltip';
import { Box } from 'spaceweb/box';

const DateTimeSelect = (props: { $timeSelect: TimeSelect; children: ReactNode }): ReactElement => {
  const [startDateRolling, setStartDateRolling] = React.useState(false);
  const [endDateRolling, setEndDateRolling] = React.useState(false);

  return (
    <StackItem className="flex-1">
      {props.children}
      {props.$timeSelect === 'start' ? (
        <Stack direction="horizontal" className="mt-1" gap={2} shrink>
          <Switch
            checked={startDateRolling}
            size="md"
            intent="default"
            onChange={(e: ChangeEvent<HTMLInputElement>): void => setStartDateRolling(e.target.checked)}
          >
            Rolling start date
          </Switch>
          <StatefulTooltip placement="bottom" content="Start date will update by 1 day everyday">
            <Box>
              <AlertWarningIcon />
            </Box>
          </StatefulTooltip>
        </Stack>
      ) : (
        <Stack direction="horizontal" className="mt-1" gap={2} shrink>
          <Switch
            checked={endDateRolling}
            size="md"
            intent="default"
            onChange={(e: ChangeEvent<HTMLInputElement>): void => setEndDateRolling(e.target.checked)}
          >
            Rolling end date
          </Switch>
          <StatefulTooltip placement="bottom" content="End date will update by 1 day everyday">
            <Box>
              <AlertWarningIcon />
            </Box>
          </StatefulTooltip>
        </Stack>
      )}
    </StackItem>
  );
};

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
      value={value}
      timezone={timezone}
      onSubmit={handleSubmit}
      timeSelect
      overrides={{
        DateTimeSelect: {
          component: DateTimeSelect,
        },
      }}
    />
  );
};
