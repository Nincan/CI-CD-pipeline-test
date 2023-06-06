import * as React from 'react';
import { Button } from 'spaceweb/button';
import { Checkbox } from 'spaceweb/checkbox';

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
        Click to focus checkbox
      </Button>
      <Checkbox inputRef={inputRef} checked={checked} onChange={() => setChecked(!checked)}>
        Focused checkbox
      </Checkbox>
    </>
  );
};
