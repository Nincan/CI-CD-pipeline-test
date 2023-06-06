import { useState } from 'react';
import { FormControl } from 'spaceweb/form-control';
import { Switch } from 'spaceweb/switch';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <FormControl label="Switch label" caption="Switch caption">
      <Switch checked={checked} onChange={() => setChecked(!checked)}>
        Switch control
      </Switch>
    </FormControl>
  );
};
