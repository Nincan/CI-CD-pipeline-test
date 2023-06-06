import { createRef } from 'react';

import { Button } from 'spaceweb/button';
import { Input } from 'spaceweb/input';
import useStyle from 'spaceweb/style/useStyle';

export default () => {
  const { css, getStyle } = useStyle();
  const inputRef = createRef();

  return (
    <div className={css('flex')}>
      <Input
        inputRef={inputRef}
        placeholder="With input ref"
        overrides={{
          Root: {
            style: getStyle('w-1/2 pr-3'),
          },
        }}
      />
      <Button
        onClick={() => {
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        Click to focus
      </Button>
    </div>
  );
};
