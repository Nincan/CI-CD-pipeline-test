import Search from 'spaceweb-icons/line/Search';

import { Input } from 'spaceweb/input';
import useStyle from 'spaceweb/style/useStyle';
import { Stack } from 'spaceweb/stack';

function Before(props) {
  const { css, theme } = useStyle();
  return (
    <div className={css('flex items-center pl-3')}>
      <Search size={14} color={props.$isFocused ? theme.spr.focus01 : theme.spr.text03} />
    </div>
  );
}

function After(props) {
  const { css, theme } = useStyle();
  return (
    <div className={css('flex items-center pr-3')}>
      <Search size={14} color={props.$isFocused ? theme.spr.focus01 : theme.spr.text03} />
    </div>
  );
}

export default () => (
  <Stack direction="vertical" gap={4}>
    <Input overrides={{ Before }} placeholder="Input with a Before component" />
    <Input overrides={{ After }} placeholder="Input with an After component" />
  </Stack>
);
