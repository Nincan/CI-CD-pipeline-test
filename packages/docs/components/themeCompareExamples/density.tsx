import { ComponentWrapper } from './common';
import { Input } from 'spaceweb/input';
import { Button, IconButton } from 'spaceweb/button';
import RefreshIcon from 'spaceweb-icons/line/Refresh';
import { Search } from 'spaceweb/search';
import { Box } from 'spaceweb/box';
import { Select, Value } from 'spaceweb/select';
import * as React from 'react';
import { Stack } from 'spaceweb/stack';
import { PhoneInput } from 'spaceweb/phone-input';
import { PaymentCard } from 'spaceweb/payment-card';
import { TimeRangePicker } from 'spaceweb/time-range-picker';
import { useState } from 'react';

const DensityExample = () => {
  const [value, setValue] = React.useState<Value>([]);
  const [trpValue, setTrpValue] = useState<Date[] | string>([
    new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000),
    new Date(),
  ]);
  const [timezone, setTimezone] = React.useState('Asia/Kolkata');

  const handleSubmit = data => {
    setTrpValue(data.value);
    setTimezone(data.timezone);
  };
  return (
    <Stack direction="vertical" gap={2} className="mt-4 px-8">
      <Input />
      <Button>Button</Button>
      <IconButton aria-label="density compare icon button">
        <RefreshIcon />
      </IconButton>
      <Search />
      <Select
        options={[
          { id: 'AliceBlue', color: '#F0F8FF' },
          { id: 'AntiqueWhite', color: '#FAEBD7' },
          { id: 'Aqua', color: '#00FFFF' },
          { id: 'Aquamarine', color: '#7FFFD4' },
          { id: 'Azure', color: '#F0FFFF' },
          { id: 'Beige', color: '#F5F5DC' },
        ]}
        labelKey="id"
        valueKey="color"
        onChange={({ value: _value }): void => setValue(_value)}
        value={value}
      />
      <PhoneInput />
      <PaymentCard />
      <TimeRangePicker value={trpValue} timezone={timezone} onSubmit={handleSubmit} timeSelect />;
    </Stack>
  );
};

export default DensityExample;
