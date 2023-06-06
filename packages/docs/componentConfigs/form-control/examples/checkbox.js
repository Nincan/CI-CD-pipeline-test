import { useState } from 'react';
import { FormControl } from 'spaceweb/form-control';
import { Checkbox } from 'spaceweb/checkbox';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <FormControl label="Checkbox label" caption="Checkbox caption">
      <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
        Checkbox control
      </Checkbox>
    </FormControl>
  );
};
