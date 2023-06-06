import { useState } from 'react';
import { getCharacter } from 'rickmortyapi';

import { GroupedAsyncSelect, STATE_CHANGE_TYPE } from 'spaceweb/asyncSelect';

export default () => {
  const [value, setValue] = useState();
  const [selectAllSelected, setSelectAllState] = useState(false);

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
      onChange={({ valueKeys, type }) => {
        if (type === STATE_CHANGE_TYPE.selectAll) {
          setSelectAllState(true);
        } else if (type === STATE_CHANGE_TYPE.clear) {
          setSelectAllState(false);
        }
        setValue(valueKeys);
      }}
      value={value}
      loadOnFocus
      showSelectAll
      selectAllSelected={selectAllSelected}
    />
  );
};
