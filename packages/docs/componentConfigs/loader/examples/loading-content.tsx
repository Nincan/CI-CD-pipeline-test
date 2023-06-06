import { Box } from 'spaceweb/box';
import { Loader } from 'spaceweb/loader';
import { Typography } from 'spaceweb/typography';

export default () => (
  <Box className="flex justify-between">
    <Loader
      loadingContent={
        <Typography variant="h6" $as="div">
          Using Typography
        </Typography>
      }
    />
    <Loader loadingContent="Text Content" />
    <Loader loadingContent={<Box $as="span">Non Typography Component</Box>} />
  </Box>
);
