import { useState } from 'react';
import { FormControl } from 'spaceweb/form-control';
import { Input } from 'spaceweb/input';

export default () => {
  const [value, setValue] = useState('');
  return (
    <FormControl label="Input label" caption="Input caption" required>
      <Input id="input-id" value={value} onChange={event => setValue(event.currentTarget.value)} />
    </FormControl>
  );
};
