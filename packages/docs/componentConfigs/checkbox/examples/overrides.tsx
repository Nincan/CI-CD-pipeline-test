import * as React from 'react';
import { StyleObject } from 'styletron-react';

import { Checkbox } from 'spaceweb/checkbox';
import useStyle from 'spaceweb/style/useStyle';

export default (): React.ReactElement => {
  const [checked, setChecked] = React.useState(true);
  const { theme } = useStyle();

  return (
    <Checkbox
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
        Checkmark: {
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
    </Checkbox>
  );
};
