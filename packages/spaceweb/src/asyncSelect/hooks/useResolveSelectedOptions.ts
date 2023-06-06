/**
 *  Created by Aneree on 15/01/21.
 */
import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';
import _forEach from 'lodash/forEach';
import _isEmpty from 'lodash/isEmpty';
import _isObject from 'lodash/isObject';

//components
import { Option } from '../../select';

//hooks
import { useFirstMountState } from '../../hooks/useFirstMountState';

//helpers
import { addOptionsInMap, getInputValue, mergeOptions } from '../helpers';

//types
import { AllOptionsMap, GroupedOptions, GroupedValue, Id, SetStateFunc } from '../types';

interface UseResolveSelectedOptionsArgs {
  groupedValue?: GroupedValue;
  valueKey: string;
  allOptionsMap: AllOptionsMap;
  resolveValuesOnUpdate?: boolean;
  resolveSelectedOptions?: (
    groupVsUnresolvedValueKeys: Record<string, Array<Id>>
  ) => Promise<Record<string, Array<Option>>>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  setOptions: SetStateFunc<GroupedOptions>;
  setAllOptionsMap: SetStateFunc<AllOptionsMap>;
}

const useResolveSelectedOptions = ({
  groupedValue,
  valueKey,
  allOptionsMap,
  resolveValuesOnUpdate,
  resolveSelectedOptions,
  inputRef,
  setOptions,
  setAllOptionsMap,
}: UseResolveSelectedOptionsArgs) => {
  const isFirstMount = useFirstMountState();

  const unresolvedValuesResults = useRef<{
    hasUnresolvedValues: boolean;
    unresolvedGroupedValueKeys: Record<string, Array<Id>>;
  }>({
    unresolvedGroupedValueKeys: {},
    hasUnresolvedValues: false,
  });

  useMemo(() => {
    const shouldCalculateUnresolvedValues =
      (resolveValuesOnUpdate || isFirstMount) && resolveSelectedOptions && !_isEmpty(groupedValue);
    if (!shouldCalculateUnresolvedValues) {
      return;
    }

    let unresolvedGroupedValueKeys: Record<string, Array<Id>> = {},
      hasUnresolvedValues = false;
    _forEach(groupedValue, (values, groupId) => {
      unresolvedGroupedValueKeys[groupId] = (values ?? [])
        .map((valueObjOrId: Id | Option) => (_isObject(valueObjOrId) ? valueObjOrId[valueKey] : valueObjOrId) as Id)
        .filter(valueId => !allOptionsMap[valueId]);
      hasUnresolvedValues = hasUnresolvedValues || unresolvedGroupedValueKeys[groupId].length > 0;
    });

    unresolvedValuesResults.current = { unresolvedGroupedValueKeys, hasUnresolvedValues };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- calculate this on mount or when value changes
  }, [groupedValue]);
  const { hasUnresolvedValues, unresolvedGroupedValueKeys } = unresolvedValuesResults.current;
  const [isResolvingValues, setIsResolving] = useState(hasUnresolvedValues);

  useEffect(() => {
    if (!hasUnresolvedValues || !resolveSelectedOptions) {
      setIsResolving(false);
      return;
    }

    const fetchUnresolvedValueKeys = async (_unresolvedGroupedValueKeys: Record<string, Array<Id>>) => {
      setIsResolving(true);

      try {
        const options = await resolveSelectedOptions(_unresolvedGroupedValueKeys);

        setAllOptionsMap(prevOptions => addOptionsInMap(prevOptions, options, valueKey));

        //Inject the resolved selected options into the options state
        // 1. Only if currently shown options are not filtered i.e. user input text is empty (All options need to be shown)
        if (!getInputValue(inputRef)) {
          setOptions(prevOptions => mergeOptions(prevOptions, options));
        }
      } finally {
        setIsResolving(false);
      }
    };
    fetchUnresolvedValueKeys(unresolvedGroupedValueKeys);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- this effect should run only when unresolvedValues is changed
  }, [unresolvedGroupedValueKeys]);

  return { isResolvingValues, unresolvedGroupedValueKeys };
};

export { useResolveSelectedOptions };
