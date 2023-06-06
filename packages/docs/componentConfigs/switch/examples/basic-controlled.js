import * as React from 'react';
import { Switch } from 'spaceweb/switch';

export default () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Switch checked={checked} onChange={() => setChecked(!checked)}>
      click me
    </Switch>
  );
};
