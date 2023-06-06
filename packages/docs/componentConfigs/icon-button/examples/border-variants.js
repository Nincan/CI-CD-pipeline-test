import { IconButton } from 'spaceweb/button';
import RejectIcon from 'spaceweb-icons/solid/Reject';
import { Grid, Col } from 'spaceweb/grid';
import { Typography } from 'spaceweb/typography';

const ICON_BUTTON_SHAPES = ['round', 'square'];

export default () => (
  <Grid cols={3} rowGap={3} colGap={1} className="w-3/4">
    <Col />
    <Col>
      <Typography $as="div" variant="l1">
        Round
      </Typography>
    </Col>
    <Col>
      <Typography $as="div" variant="l1">
        Square
      </Typography>
    </Col>
    <Col className="flex items-center">
      <Typography $as="div" variant="l1">
        Default
      </Typography>
    </Col>
    {ICON_BUTTON_SHAPES.map(shape => (
      <Col key={shape}>
        <IconButton shape={shape} bordered>
          <RejectIcon />
        </IconButton>
      </Col>
    ))}
    <Col className="flex items-center">
      <Typography $as="div" variant="l1">
        Disabled
      </Typography>
    </Col>
    {ICON_BUTTON_SHAPES.map(shape => (
      <Col key={shape}>
        <IconButton shape={shape} disabled bordered>
          <RejectIcon />
        </IconButton>
      </Col>
    ))}
    <Col className="flex items-center">
      <Typography $as="div" variant="l1">
        Loading
      </Typography>
    </Col>
    {ICON_BUTTON_SHAPES.map(shape => (
      <Col key={shape}>
        <IconButton shape={shape} isLoading bordered>
          <RejectIcon />
        </IconButton>
      </Col>
    ))}
    <Col className="flex items-center">
      <Typography $as="div" variant="l1">
        Selected
      </Typography>
    </Col>
    {ICON_BUTTON_SHAPES.map(shape => (
      <Col key={shape}>
        <IconButton shape={shape} isSelected bordered>
          <RejectIcon />
        </IconButton>
      </Col>
    ))}
  </Grid>
);
