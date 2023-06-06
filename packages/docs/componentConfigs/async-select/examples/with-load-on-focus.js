import { useState } from 'react';
import { getCharacter } from 'rickmortyapi';

import { AsyncSelect } from 'spaceweb/asyncSelect';

const WithLoadOnFocus = () => {
  const [value, setValue] = useState([]);

  return (
    <AsyncSelect
      loadOnFocus
      multi
      filterOutSelected={false}
      closeOnSelect={false}
      noResultsMsg="No characters found"
      searchingText="Searching characters..."
      loadOptions={(inputText, pageNumber) =>
        getCharacter({
          name: inputText,
          page: pageNumber + 1,
        }).then(data => {
          const { info, results, error } = data;

          if (error) {
            throw error;
          }

          return {
            options: results.map(opt => ({ id: opt.id, label: opt.name })),
            complete: !info.next,
          };
        })
      }
      onChange={({ valueKeys }) => setValue(valueKeys)}
      value={value}
    />
  );
};
export default WithLoadOnFocus;
