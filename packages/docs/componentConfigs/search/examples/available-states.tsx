import { Box } from 'spaceweb/box';
import { Search } from 'spaceweb/search';

const SearchVariants = () => (
  <Box>
    <Search variant="default" placeholder="variant - default" />
    <br />
    <Box className="px-6 py-6 spr-ui-03">
      <Search variant="light" placeholder="variant - light" />
    </Box>
  </Box>
);
export default SearchVariants;
