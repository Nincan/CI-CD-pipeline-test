import { useState } from 'react';
import useStyle from 'spaceweb/style/useStyle';
import { Button } from 'spaceweb/button';
import { StatefulPopover } from 'spaceweb/popover';
import { Typography } from 'spaceweb/typography';
import { Switch } from 'spaceweb/switch';

export default () => {
  const { css, theme } = useStyle();
  const [ignoreBoundary, setIgnoreBoundary] = useState(false);
  return (
    <>
      <Switch checked={ignoreBoundary} onChange={e => setIgnoreBoundary(e.target.checked)}>
        ignoreBoundary
      </Switch>
      <br />
      <div className={css('overflow-auto', { height: '300px' })}>
        <div
          className={css('w-full text-center py-56 px-0', {
            height: '700px',
            backgroundColor: theme.spr.field,
          })}
        >
          <StatefulPopover
            initialState={{ isOpen: true }}
            ignoreBoundary={ignoreBoundary}
            content={() => (
              <Typography variant="bs3" className={['p-5', { maxWidth: '200px' }]}>
                {ignoreBoundary
                  ? 'Popover will scroll with button!'
                  : 'Popover will reposition itself to avoid being clipped!'}
                <br />
                <Typography variant="l3"> Try scrolling in this box...</Typography>
              </Typography>
            )}
            placement="top"
          >
            <Button>Click Me</Button>
          </StatefulPopover>
        </div>
      </div>
    </>
  );
};
