import { IconButton, Shape } from 'spaceweb/button';
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
    {ICON_BUTTON_SHAPES.map((shape: Shape) => (
      <Col key={shape}>
        <IconButton aria-label={`${shape} Icon Button`} shape={shape} bordered>
          <RejectIcon />
        </IconButton>
      </Col>
    ))}
    <Col className="flex items-center">
      <Typography $as="div" variant="l1">
        Disabled
      </Typography>
    </Col>
    {ICON_BUTTON_SHAPES.map((shape: Shape) => (
      <Col key={shape}>
        <IconButton aria-label={`${shape} disabled Icon Button`} shape={shape} disabled bordered>
          <RejectIcon />
        </IconButton>
      </Col>
    ))}
    <Col className="flex items-center">
      <Typography $as="div" variant="l1">
        Loading
      </Typography>
    </Col>
    {ICON_BUTTON_SHAPES.map((shape: Shape) => (
      <Col key={shape}>
        <IconButton aria-label={`${shape} loading Icon Button`} shape={shape} isLoading bordered>
          <RejectIcon />
        </IconButton>
      </Col>
    ))}
    <Col className="flex items-center">
      <Typography $as="div" variant="l1">
        Selected
      </Typography>
    </Col>
    {ICON_BUTTON_SHAPES.map((shape: Shape) => (
      <Col key={shape}>
        <IconButton aria-label={`${shape} selected Icon Button`} shape={shape} isSelected bordered>
          <RejectIcon />
        </IconButton>
      </Col>
    ))}
  </Grid>
);
