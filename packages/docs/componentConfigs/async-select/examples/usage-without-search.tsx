import { useState } from 'react';
import * as React from 'react';
import { getCharacter } from 'rickmortyapi';

import { AsyncSelect, AsyncSelectValue } from 'spaceweb/asyncSelect';

const WithoutSearch = (): React.ReactElement => {
  const [value, setValue] = useState<AsyncSelectValue>([]);

  return (
    <AsyncSelect
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
      searchable={false}
      loadOnMount
    />
  );
};

export default WithoutSearch;
