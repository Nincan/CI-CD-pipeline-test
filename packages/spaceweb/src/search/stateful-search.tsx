import { ReactElement, useCallback, useState } from 'react';
import { Search } from './search';
import { StatefulSearchProps } from './types';

export const StatefulSearch = ({ initialState, onChange, ...restProps }: StatefulSearchProps): ReactElement => {
  const [query, setQuery] = useState(initialState);
  const handleChange = useCallback(
    e => {
      setQuery(e.target.value);
      if (onChange) {
        onChange(e);
      }
    },
    [onChange]
  );
  return <Search value={query} onChange={handleChange} {...restProps} />;
};
