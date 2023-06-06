import { Input } from 'spaceweb/input';

export default () => (
  <Input
    overrides={{
      InputContainer: {
        style: ({ theme }, props) => {
          const { $disabled, $error, $isFocused } = props;

          const getBorderColor = () => {
            if ($disabled) return theme.spr.text01;
            if ($error) return theme.spr.ui04;
            if ($isFocused) return theme.spr.text02;
            return theme.spr.interactive02;
          };

          const getBoxShadow = () => {
            if ($error) return '0 1px 4px 0 rgba(229,62,62,0.1)';
            if ($isFocused) return theme.spr.shadow01;
            return 'none';
          };

          return getStyle({
            borderColor: getBorderColor(),
            boxShadow: getBoxShadow(),
          });
        },
      },
    }}
    placeholder="Input with a custom InputContainer override"
  />
);
