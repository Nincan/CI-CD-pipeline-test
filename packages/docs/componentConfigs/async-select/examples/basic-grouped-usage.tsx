import { useState } from 'react';
import { getCharacter } from 'rickmortyapi';

import { GroupedAsyncSelect, GroupedValue } from 'spaceweb/asyncSelect';

export default () => {
  const [value, setValue] = useState<GroupedValue>();

  return (
    <GroupedAsyncSelect
      groupConfig={[
        { id: 'male', label: 'Male' },
        { id: 'female', label: 'Female' },
      ]}
      multi
      closeOnSelect={false}
      filterOutSelected={false}
      loadOptions={async (inputText, groupFilters) => {
        const groups = await Promise.all(
          groupFilters.map(({ group, pageNumber }) =>
            getCharacter({
              name: inputText,
              page: pageNumber + 1,
              gender: group,
            }).then(data => {
              const { info, results, error } = data;

              if (error) {
                return {
                  group,
                  options: [],
                  complete: true,
                  count: 0,
                };
              }

              return {
                group,
                options: results.map(opt => ({ id: opt.id, label: opt.name })),
                complete: !info.next,
                count: info.count,
              };
            })
          )
        );
        return {
          groups,
        };
      }}
      noResultsMsg="No characters found"
      searchingText="Searching characters..."
      onChange={({ valueKeys }) => setValue(valueKeys)}
      value={value}
      loadOnFocus
    />
  );
};
