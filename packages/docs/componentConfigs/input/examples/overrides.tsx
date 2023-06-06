import { ReactElement } from 'react';

import { Input } from 'spaceweb/input';
import { StyleObject } from 'spaceweb/types';

interface Props {
  $disabled?: boolean;
  $error?: boolean;
  $isFocused?: boolean;
}

export default (): ReactElement => (
  <Input
    overrides={{
      InputContainer: {
        style: ({ theme }, props: Props): StyleObject => {
          const { $disabled, $error, $isFocused } = props;

          const getBorderColor = (): string => {
            if ($disabled) return theme.spr.text01;
            if ($error) return theme.spr.ui04;
            if ($isFocused) return theme.spr.text02;
            return theme.spr.ui04;
          };

          const getBoxShadow = (): string => {
            if ($error) return '0 1px 4px 0 rgba(229,62,62,0.1)';
            if ($isFocused) return theme.spr.shadow01;
            return 'none';
          };

          return {
            borderColor: getBorderColor(),
            boxShadow: getBoxShadow(),
          };
        },
      },
    }}
    placeholder="Input with a custom InputContainer override"
  />
);
