import { Box } from 'spaceweb/box';
import { Avatar } from 'spaceweb/avatar';
import { Typography } from 'spaceweb/typography';
import { Input } from 'spaceweb/input';

const Header = ({ imgUrl, name }) => (
  <Box className="flex items-center py-3 px-4 spr-ui-01 flex-none border-b-1 spr-border-01 border-solid">
    <Avatar src={imgUrl} name={name} shape="circle" size="md" />
    <Typography variant="h6" className="ml-2 spr-text-01">
      {name}
    </Typography>
  </Box>
);

const Body = () => (
  <Box className="px-4 flex flex-col spr-tag">
    <Box className="my-4 py-3 px-4 flex-none rounded-2 border-1 spr-border-01 border-solid spr-shadow-01 cursor-pointer spr-ui-01">
      <Typography variant="l1" $as="span" className="spr-text-03">
        <Input placeholder="Click here to reply" />
      </Typography>
    </Box>
  </Box>
);

const BoxMockComponent = () => (
  <Box
    className="rounded-4 border-1 spr-border-01 border-solid overflow-hidden h-full w-full flex flex-col"
    $as="section"
  >
    <Header imgUrl="https://www.gstatic.com/tv/thumb/persons/31690/31690_v9_ba.jpg" name="Jimi Hendrix" />
    <Body />
  </Box>
);

export default BoxMockComponent;
