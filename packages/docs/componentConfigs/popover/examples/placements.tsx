import * as React from 'react';
import { Button } from 'spaceweb/button';
import { Placement, StatefulPopover } from 'spaceweb/popover';
import useStyle from 'spaceweb/style/useStyle';
import { Typography } from 'spaceweb/typography';
import { Grid, Col } from 'spaceweb/grid';

const placements: { type: Placement; colStart: number }[] = [
  {
    type: 'auto',
    colStart: 3,
  },
  {
    type: 'topLeft',
    colStart: 2,
  },
  {
    type: 'top',
    colStart: 3,
  },
  {
    type: 'topRight',
    colStart: 4,
  },
  {
    type: 'leftTop',
    colStart: 1,
  },
  {
    type: 'rightTop',
    colStart: 5,
  },
  {
    type: 'left',
    colStart: 1,
  },
  {
    type: 'right',
    colStart: 5,
  },
  {
    type: 'leftBottom',
    colStart: 1,
  },
  {
    type: 'rightBottom',
    colStart: 5,
  },
  {
    type: 'bottomLeft',
    colStart: 2,
  },
  {
    type: 'bottom',
    colStart: 3,
  },
  {
    type: 'bottomRight',
    colStart: 4,
  },
];

export default (): React.ReactElement => {
  const { css } = useStyle();
  return (
    <div
      className={css('flex flex-col justify-center flex-wrap', {
        height: '340px',
        minWidth: '560px',
      })}
    >
      <Grid cols={5} gap={5} colGap={2}>
        {placements.map(placement => (
          <Col colStart={placement.colStart}>
            <StatefulPopover
              placement={placement.type}
              triggerType="hover"
              content={
                <Typography variant="bs3" className="p-4">
                  {placement.type}
                </Typography>
              }
              accessibilityType="tooltip"
              showArrow
            >
              {({ isOpen }) => (
                <Button fullWidth isSelected={isOpen}>
                  {placement.type}
                </Button>
              )}
            </StatefulPopover>
          </Col>
        ))}
      </Grid>
    </div>
  );
};
