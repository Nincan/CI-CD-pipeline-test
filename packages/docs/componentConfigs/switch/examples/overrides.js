import * as React from 'react';
import useStyle from 'spaceweb/style/useStyle';

import { Switch } from 'spaceweb/switch';

export default () => {
  const [checked, setChecked] = React.useState(true);
  const { theme } = useStyle();

  return (
    <Switch
      checked={checked}
      onChange={() => setChecked(!checked)}
      overrides={{
        Root: {
          style: () => ({
            borderWidth: theme.borderWidth[2],
            borderStyle: 'solid',
            borderColor: theme.spr.supportWarning,
          }),
        },
        Label: {
          style: () => ({
            color: theme.spr.supportWarning,
          }),
        },
        Toggle: {
          style: (_, { $checked }) => ({
            borderTopColor: theme.spr.supportWarning,
            borderBottomColor: theme.spr.supportWarning,
            borderLeftColor: theme.spr.supportWarning,
            borderRightColor: theme.spr.supportWarning,
            backgroundColor: $checked ? theme.spr.supportWarning : null,
          }),
        },
      }}
    >
      With style overrides
    </Switch>
  );
};
