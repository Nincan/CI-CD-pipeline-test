import * as React from 'react';
import { FormControl } from 'spaceweb/form-control';
import { Switch } from 'spaceweb/switch';

export default (): React.ReactElement => {
  const [checked, setChecked] = React.useState(false);
  return (
    <FormControl label="Switch label" caption="Switch caption">
      <Switch checked={checked} onChange={() => setChecked(!checked)}>
        Switch control
      </Switch>
    </FormControl>
  );
};
