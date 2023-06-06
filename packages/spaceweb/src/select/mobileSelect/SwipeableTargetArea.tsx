import * as React from 'react';
import { Box } from '../../box';

export const SwipeableTargetArea = ({
  onSwipeStart,
  onSwipeEnd,
  onSwipe,
}: {
  onSwipeStart: (e: React.TouchEvent) => void;
  onSwipeEnd: (e: React.TouchEvent) => void;
  onSwipe: (e: React.TouchEvent) => void;
}): React.ReactElement => (
  <Box
    onTouchStart={onSwipeStart}
    onTouchEnd={onSwipeEnd}
    onTouchMove={onSwipe}
    className={[
      'w-full relative z-10 flex flex-col justify-center items-center py-3',
      { backgroundColor: 'transparent' },
    ]}
    data-testid="swipeableTargetHeader"
  >
    <Box className="spr-tag rounded-16 h-1 w-10" />
  </Box>
);
