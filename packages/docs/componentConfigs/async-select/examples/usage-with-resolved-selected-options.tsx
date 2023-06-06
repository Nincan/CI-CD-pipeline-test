import { useState } from 'react';
import * as React from 'react';
import { getCharacter } from 'rickmortyapi';

import { AsyncSelect, AsyncSelectValue } from 'spaceweb/asyncSelect';

const SELECTED_OPTIONS = [
  {
    id: 40,
    label: "Beth's Mytholog",
  },
  {
    id: 402,
    label: 'Guy from The Bachelor',
  },
];

export default (): React.ReactElement => {
  const [value, setValue] = useState<AsyncSelectValue>(SELECTED_OPTIONS);

  return (
    <AsyncSelect
      multi
      minimumInput={3}
      filterOutSelected={false}
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
      initialOptions={SELECTED_OPTIONS}
      onChange={({ valueKeys }) => setValue(valueKeys)}
      value={value}
    />
  );
};
