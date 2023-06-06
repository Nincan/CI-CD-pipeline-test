import * as React from 'react';
import { Button } from 'spaceweb/button';
import { StatefulPopover } from 'spaceweb/popover';
import useStyle from 'spaceweb/style/useStyle';
import { Typography } from 'spaceweb/typography';

export default (): React.ReactElement => {
  const { css } = useStyle();
  const contentCx = css('p-5', {
    maxWidth: '300px',
  });
  return (
    <StatefulPopover
      dismissOnEsc={false}
      dismissOnClickOutside={false}
      accessibilityType="tooltip"
      content={({ close }): React.ReactElement => (
        <div className={contentCx}>
          <Typography variant="bs3" className={css('pb-4')}>
            content render prop is passed a <code>close()</code> callback so it you can manually trigger popover close
            from within
          </Typography>
          <Button onClick={close}>Dismiss</Button>
        </div>
      )}
    >
      {({ isOpen }) => <Button isSelected={isOpen}>Click Me</Button>}
    </StatefulPopover>
  );
};
