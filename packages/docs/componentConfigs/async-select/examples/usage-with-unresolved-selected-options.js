import { useState } from 'react';
import { getCharacter } from 'rickmortyapi';
import _castArray from 'lodash/castArray';

import { AsyncSelect } from 'spaceweb/asyncSelect';
import { Stack } from 'spaceweb/stack';
import { Button } from 'spaceweb/button';
import { Switch } from 'spaceweb/switch';

let lastUnresolvedKey = 5;
export default () => {
  const [value, setValue] = useState([
    2,
    3,
    4,
    5,
    {
      id: 40,
      label: "Beth's Mytholog",
    },
  ]);
  const [resolveValuesOnUpdate, setResolveValuesOnUpdate] = useState(false);

  return (
    <Stack direction="vertical" gap={3} shrink>
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
        resolveSelectedOptions={unresolvedValueKeys =>
          getCharacter(unresolvedValueKeys).then(data => _castArray(data).map(opt => ({ id: opt.id, label: opt.name })))
        }
        initialOptions={[
          {
            id: 40,
            label: "Beth's Mytholog",
          },
        ]}
        onChange={({ valueKeys }) => setValue(valueKeys)}
        value={value}
        resolveValuesOnUpdate={resolveValuesOnUpdate}
      />
      <Stack direction="horizontal" gap={3} className="items-center">
        <Switch
          checked={resolveValuesOnUpdate}
          intent="default"
          onChange={e => setResolveValuesOnUpdate(e.target.checked)}
        >
          Resolve values on update
        </Switch>
        <Button
          onClick={() =>
            setValue(prev => {
              lastUnresolvedKey += 1;
              return [...prev, lastUnresolvedKey];
            })
          }
        >
          Add unresolved option
        </Button>
      </Stack>
    </Stack>
  );
};
