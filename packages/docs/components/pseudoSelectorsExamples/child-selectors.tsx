import { Box } from 'spaceweb/box';
import { Typography } from 'spaceweb/typography';
import _times from 'lodash/times';

const ChildSelectors = () => (
  <Box className="py-8 pr-4 pl-8 typography-h4 flex items-center spr-ui-03 rounded-8 flex-wrap">
    <Box className="w-full flex items-center justify-around mb-6">
      <Typography variant="h3" className="w-12">
        First
      </Typography>
      <Box className="flex justify-around flex-1">
        {_times(4).map(x => (
          <Box key={x} className="h-16 w-16 rounded-8 spr-support-success first-child:spr-clr-orange" />
        ))}
      </Box>
    </Box>
    <Box className="w-full flex items-center justify-around mb-6">
      <Typography variant="h3" className="w-12">
        Last
      </Typography>
      <Box className="flex justify-around flex-1">
        {_times(4).map(x => (
          <Box key={x} className="h-16 w-16 rounded-8 spr-support-success last-child:spr-clr-orange" />
        ))}
      </Box>
    </Box>
    <Box className="w-full flex items-center justify-around mb-6">
      <Typography variant="h3" className="w-12">
        Odd
      </Typography>
      <Box className="flex justify-around flex-1">
        {_times(4).map(x => (
          <Box key={x} className="h-16 w-16 rounded-8 spr-support-success odd-child:spr-clr-orange" />
        ))}
      </Box>
    </Box>
    <Box className="w-full flex items-center justify-around">
      <Typography variant="h3" className="w-12">
        Even
      </Typography>
      <Box className="flex justify-around flex-1">
        {_times(4).map(x => (
          <Box key={x} className="h-16 w-16 rounded-8 spr-support-success even-child:spr-clr-orange" />
        ))}
      </Box>
    </Box>
  </Box>
);

export default ChildSelectors;
