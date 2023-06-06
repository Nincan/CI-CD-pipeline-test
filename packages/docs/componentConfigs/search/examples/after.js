import Search from 'spaceweb-icons/line/Search';
import { Box } from 'spaceweb/box';

import { Search as SearchInput } from 'spaceweb/search';
import useStyle from 'spaceweb/style/useStyle';

function Before() {
  return null;
}

function After(props) {
  const { theme } = useStyle();
  return (
    <Box className="flex items-center pr-3">
      <Search size={24} color={props.$isFocused ? theme.spr.focus01 : theme.spr.text03} />
    </Box>
  );
}

const SearchWithOverrides = () => (
  <SearchInput
    variant="light"
    style={{ height: '55px', boxShadow: '0px 2px 10px rgba(201, 201, 201, 0.5)', paddingLeft: '25px' }}
    overrides={{ Before, After, Input: { style: { fontSize: '18px' } } }}
    placeholder="Measure your brand's influence"
  />
);
export default SearchWithOverrides;
