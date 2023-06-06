import * as React from 'react';
import { Typography } from 'spaceweb/typography';
import { Stack } from 'spaceweb/stack';

const bodyString = `Good things happen when people can move, whether across town or towards their dreams. 
  Opportunities appear, open up, become reality.What started as a way to tap a button to get a ride has led to billions of moments of human connection as people around
  the world go all kinds of places in all kinds of ways with the help of our technology.`;

export default (): React.ReactElement => (
  <Stack direction="vertical" gap={6}>
    <Typography variant="l1" $as="div">
      Below are for long paragraphs with more than three lines. Always left-align this type; never center it.
    </Typography>
    <Typography variant="bl1">bl1 - {bodyString}</Typography>
    <Typography variant="bl2">bl2 - {bodyString}s</Typography>
    <Typography variant="bl3">bl3 - {bodyString}</Typography>
  </Stack>
);
