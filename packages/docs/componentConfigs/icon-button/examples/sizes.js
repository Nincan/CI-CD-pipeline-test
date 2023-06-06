import { IconButton } from 'spaceweb/button';
import RefreshIcon from 'spaceweb-icons/line/Refresh';
import { Grid, Col } from 'spaceweb/grid';
import { Typography } from 'spaceweb/typography';

const ICON_BUTTON_SIZES = ['xxxxs', 'xxxs', 'xxs', 'xs', 'sm', 'md'];

export default () => (
  <Grid cols={ICON_BUTTON_SIZES.length} colGap={3} className="w-3/4">
    {ICON_BUTTON_SIZES.map(size => (
      <Col key={size} className="flex justify-center">
        <Typography $as="div" variant="l1">
          {size}
        </Typography>
      </Col>
    ))}
    {ICON_BUTTON_SIZES.map(size => (
      <Col key={size} className="flex justify-center items-center">
        <IconButton size={size}>
          <RefreshIcon />
        </IconButton>
      </Col>
    ))}
    {ICON_BUTTON_SIZES.map(size => (
      <Col key={size} className="flex justify-center items-center">
        <IconButton shape="square" size={size}>
          <RefreshIcon />
        </IconButton>
      </Col>
    ))}
  </Grid>
);
