import * as React from 'react';
import { StyleObject } from 'styletron-react';

import { Switch } from 'spaceweb/switch';
import useStyle from 'spaceweb/style/useStyle';

export default (): React.ReactElement => {
  const [checked, setChecked] = React.useState(true);
  const { theme } = useStyle();

  return (
    <Switch
      checked={checked}
      onChange={(): void => setChecked(!checked)}
      overrides={{
        Root: {
          style: (): StyleObject => ({
            borderWidth: theme.borderWidth[2],
            borderStyle: 'solid',
            borderColor: theme.spr.supportWarning,
          }),
        },
        Label: {
          style: (): StyleObject => ({
            color: theme.spr.supportWarning,
          }),
        },
        Toggle: {
          style: (_, { $checked }): StyleObject => ({
            borderTopColor: theme.spr.supportWarning,
            borderBottomColor: theme.spr.supportWarning,
            borderLeftColor: theme.spr.supportWarning,
            borderRightColor: theme.spr.supportWarning,
            backgroundColor: $checked ? theme.spr.supportWarning : undefined,
          }),
        },
      }}
    >
      With style overrides
    </Switch>
  );
};
