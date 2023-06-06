import { useState } from 'react';
import * as React from 'react';
import { getCharacter } from 'rickmortyapi';

import { GroupedAsyncSelect } from 'spaceweb/asyncSelect';
import _flatten from 'lodash/flatten';

const wait = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export default () => {
  const [value, setValue] = useState({
    male: [2, 5],
    female: [
      3,
      4,
      {
        id: 40,
        name: "Beth's Mytholog",
      },
    ],
  });

  return (
    <GroupedAsyncSelect
      multi
      minimumInput={0}
      filterOutSelected={false}
      noResultsMsg="No characters found"
      searchingText="Searching characters..."
      groupConfig={[
        { id: 'male', label: 'Male' },
        { id: 'female', label: 'Female' },
      ]}
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
                options: results,
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
      resolveSelectedOptions={async groupVsUnresolvedValueKeys => {
        const unresolvedValueKeys = _flatten(Object.values(groupVsUnresolvedValueKeys));
        const data = await getCharacter(unresolvedValueKeys);
        await wait(5000);
        return {
          male: data.filter(character => character.gender === 'Male'),
          female: data.filter(character => character.gender === 'Female'),
        };
      }}
      valueKey="id"
      labelKey="name"
      initialOptions={{
        female: [
          {
            id: 40,
            name: "Beth's Mytholog",
          },
        ],
      }}
      onChange={({ valueKeys }) => setValue(valueKeys)}
      value={value}
    />
  );
};
