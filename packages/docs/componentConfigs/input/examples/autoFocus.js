import * as React from 'react';
import { Input } from 'spaceweb/input';
import { Select } from 'spaceweb/select';
import { Grid, Col } from 'spaceweb/grid';

const OPTIONS = [
  { id: 'start', label: 'start' },
  { id: 'end', label: 'end' },
  { id: 'true', label: 'true' },
  { id: 'false', label: 'false' },
  { id: '5', label: '5' },
];

const getValueFromId = id => {
  switch (id) {
    case 'start':
    case 'end':
      return id;
    case 'true':
      return true;
    case 'false':
      return false;
    case '5':
      return 5;
    default:
      return undefined;
  }
};

export default () => {
  const [value, setValue] = React.useState('AutoFocus example');
  const [autoFocus, setAutoFocus] = React.useState([]);
  return (
    <Grid cols={3} gap={4}>
      <Col colSpan={1}>
        <Select
          options={OPTIONS}
          onChange={({ value: _value }) => setAutoFocus(_value)}
          value={autoFocus}
          placeholder="Select autoFocus"
        />
      </Col>
      <Col colSpan={2}>
        <Input
          value={value}
          onChange={event => setValue(event.currentTarget.value)}
          autoFocus={getValueFromId(autoFocus[0]?.id)}
        />
      </Col>
    </Grid>
  );
};
