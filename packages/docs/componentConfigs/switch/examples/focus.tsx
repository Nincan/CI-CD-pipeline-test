import * as React from 'react';
import { Button } from 'spaceweb/button';
import { Switch } from 'spaceweb/switch';

export default () => {
  const [checked, setChecked] = React.useState(true);
  const [focused, setFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <Button
        size="sm"
        onClick={() => {
          if (inputRef.current === null) return;
          if (focused) {
            inputRef.current.blur();
            setFocused(false);
          } else {
            inputRef.current.focus();
            setFocused(true);
          }
        }}
      >
        Click to focus switch
      </Button>
      <Switch inputRef={inputRef} checked={checked} onChange={() => setChecked(!checked)}>
        Focused switch
      </Switch>
    </>
  );
};
