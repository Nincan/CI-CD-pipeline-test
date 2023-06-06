import { ReactElement, useState, useCallback } from 'react';
import { getCharacter } from 'rickmortyapi';

import { AsyncSelect, AsyncSelectValue } from 'spaceweb/asyncSelect';
import { Options } from 'spaceweb/select';

const wait = (interval: number) =>
  new Promise(resolve => {
    setTimeout(resolve, interval);
  });

const createCharacterMutation = async (label: string): Promise<Options> => {
  await wait(2000);
  return [{ label, id: label }];
};

const CreateOptionPromise = (): ReactElement => {
  const [value, setValue] = useState<AsyncSelectValue>([]);

  const createOption = useCallback(async (label: string): Promise<Options> => {
    try {
      const characterValue = await createCharacterMutation(label);
      return characterValue;
    } catch (err) {
      console.error(err, 'Error while creating character');
      return [];
    }
  }, []);

  return (
    <AsyncSelect
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
      creatable
      multi
      createOption={createOption}
    />
  );
};

export default CreateOptionPromise;
