/**
 *  Created by Aneree on 15/01/21.
 */
import { useRef, useCallback, MutableRefObject, UIEvent, useState } from 'react';

//components
import { Option, Options } from '../../select';

//hooks
import { useLatest } from '../../hooks/useLatest';

//helpers
import _reduce from 'lodash/reduce';
import _forEach from 'lodash/forEach';
import {
  shouldPaginate,
  addOptionsInMap,
  getInputValue,
  mergeOptions,
  initGroupOptions,
  arrayToGroupedOptions,
} from '../helpers';

//types
import { SetStateFunc, AllOptionsMap, AsyncSelectProps, LoadOptions, GroupedOptions, GroupConfig } from '../types';
import { UNGROUPED_ID } from '../../select/constants';
import { Value } from 'baseui/select/types';

interface UseAsyncOptionHandlersArgs {
  valueKey: string;
  isLoading: boolean;
  minimumInput: number;
  paginationBuffer?: number;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  setIsLoading: SetStateFunc<boolean>;
  setOptions: SetStateFunc<GroupedOptions>;
  setAllOptionsMap: SetStateFunc<AllOptionsMap>;
  loadOptions: LoadOptions;
  createOption: AsyncSelectProps['createOption'];
  groupConfig: GroupConfig;
  selectedOptions?: Value;
  moveSelectedOptionsToTop: boolean;
}

const useAsyncOptionHandlers = ({
  inputRef,
  valueKey,
  isLoading,
  setOptions,
  loadOptions,
  minimumInput,
  setIsLoading,
  paginationBuffer,
  setAllOptionsMap,
  createOption: propsCreateOption,
  groupConfig,
  selectedOptions,
  moveSelectedOptionsToTop,
}: UseAsyncOptionHandlersArgs) => {
  const pageRef = useRef<Record<string, number | undefined>>({});
  const completeRef = useRef<Record<string, boolean>>({});
  const isPaginatingRef = useRef<Record<string, boolean>>({});
  const [resultCountMap, setResultCountMap] = useState<Record<string, number | undefined>>({});
  const updateResultCount = useCallback(
    (groupId: string, count: number | undefined) => setResultCountMap(prev => ({ ...prev, [groupId]: count })),
    []
  );

  const valueKeyRef = useLatest(valueKey);
  const loadOptionsRef = useLatest(loadOptions);
  const minimumInputRef = useLatest(minimumInput);
  const paginationBufferRef = useLatest(paginationBuffer);
  const selectedOptionsRef = useLatest(selectedOptions);

  const fetchOptions = useCallback(
    async (itemGroups: { group: string; pageNumber: number }[]) => {
      const timeoutId = setTimeout(() => setIsLoading(true), 500);

      try {
        const loadedOptions = await loadOptionsRef.current(getInputValue(inputRef), itemGroups);

        const groupedOptions: GroupedOptions = {};
        const selectedOptionsByGroup: GroupedOptions = arrayToGroupedOptions(selectedOptionsRef.current ?? []);
        loadedOptions.groups.forEach(({ options, complete, group, count }) => {
          groupedOptions[group] = options;
          completeRef.current[group] = complete;
          updateResultCount(group, count);
        });
        setAllOptionsMap(prevOptions => addOptionsInMap(prevOptions, groupedOptions, valueKeyRef.current));

        //Merge options when it's not the first page
        setOptions(prevOptions => {
          const updatedOptions = { ...prevOptions };
          itemGroups.forEach(({ group, pageNumber }) => {
            if (pageNumber) {
              updatedOptions[group] = [...prevOptions[group], ...groupedOptions[group]];
            } else {
              updatedOptions[group] =
                moveSelectedOptionsToTop && selectedOptionsByGroup[group]
                  ? [...selectedOptionsByGroup[group], ...groupedOptions[group]]
                  : groupedOptions[group];
            }
          });
          return updatedOptions;
        });

        itemGroups.forEach(({ group, pageNumber }) => {
          pageRef.current[group] = pageNumber;
          isPaginatingRef.current[group] = false;
        });
      } finally {
        clearTimeout(timeoutId);
        setIsLoading(false);
      }
    },
    [
      inputRef,
      loadOptionsRef,
      setAllOptionsMap,
      setIsLoading,
      setOptions,
      updateResultCount,
      valueKeyRef,
      selectedOptionsRef,
    ]
  );

  const onPaginate = useCallback(
    (event: UIEvent<HTMLElement>, itemGroup: string = UNGROUPED_ID) => {
      if (
        !isLoading &&
        !isPaginatingRef.current[itemGroup] &&
        !completeRef.current[itemGroup] &&
        shouldPaginate(event.target as HTMLElement, paginationBufferRef.current)
      ) {
        isPaginatingRef.current[itemGroup] = true;

        fetchOptions([{ group: itemGroup, pageNumber: (pageRef.current[itemGroup] ?? 0) + 1 }]);
      }
    },
    [fetchOptions, isLoading]
  );

  const onInputChange = useCallback(() => {
    if (getInputValue(inputRef).length < minimumInputRef.current) {
      //reset state
      setIsLoading(false);
      setOptions(initGroupOptions(groupConfig));

      pageRef.current = {};
      completeRef.current = {};
      setResultCountMap({});

      return;
    }

    fetchOptions(groupConfig.map(({ id }) => ({ group: id, pageNumber: 0 })));
  }, [fetchOptions, groupConfig]);

  const createOption = useCallback(
    async (label: string): Promise<Options> => {
      if (!propsCreateOption) {
        throw new Error('Spaceweb: [AsyncSelect] `createOption` is not defined');
      }
      try {
        setIsLoading(true);
        const createdOptions = await propsCreateOption(label);
        return createdOptions;
      } catch (err) {
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [propsCreateOption, setIsLoading]
  );

  return {
    onPaginate,
    onInputChange,
    fetchOptions,
    createOption: propsCreateOption ? createOption : undefined,
    resultCountMap,
  };
};

export { useAsyncOptionHandlers };
