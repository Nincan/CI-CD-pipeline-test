import { useState } from 'react';
import useStyle from 'spaceweb/style/useStyle';
import { Button } from 'spaceweb/button';
import { StatefulPopover } from 'spaceweb/popover';
import { Typography } from 'spaceweb/typography';
import { Switch } from 'spaceweb/switch';

export default () => {
  const { css, theme } = useStyle();
  const [viewportAsBoundary, setViewportAsBoundary] = useState(false);
  return (
    <>
      <Switch checked={viewportAsBoundary} onChange={e => setViewportAsBoundary(e.target.checked)}>
        viewportAsBoundary
      </Switch>
      <br />
      <div
        className={css('overflow-auto spr-ui-03 flex items-center justify-center', { height: '200px', width: '300px' })}
      >
        <StatefulPopover
          viewportAsBoundary={viewportAsBoundary}
          content={() => (
            <Typography variant="bs3" className={['p-5', { height: '200px' }]}>
              {viewportAsBoundary
                ? 'Popover will render according to placement!'
                : 'Popover will try to render inside scrollParent as overflow-auto is applied on parent!'}
              <br />
            </Typography>
          )}
          placement="bottom"
        >
          <Button>Click Me</Button>
        </StatefulPopover>
      </div>
    </>
  );
};
