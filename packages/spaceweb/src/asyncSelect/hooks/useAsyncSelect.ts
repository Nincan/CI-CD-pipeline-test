import { FocusEventHandler, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import _keyBy from 'lodash/keyBy';
import _reduce from 'lodash/reduce';
import _isObject from 'lodash/isObject';

//components
import { OnChangeParams, Option, SelectProps } from '../../select';

//hooks
import { useLocale } from '../../locale';
import { useLatest } from '../../hooks/useLatest';
import useCombinedRefs from '../../hooks/useCombinedRef';
import { useInputChangeHandler } from './useInputChangeHandler';
import { useAsyncOptionHandlers } from './useAsyncOptionHandlers';
import { useResolveSelectedOptions } from './useResolveSelectedOptions';

//helpers
import { getInputValue, getNoResultsMsg, initGroupOptions, mergeOptions } from '../helpers';
import { normalizeOptions } from 'baseui/select/utils';
import { add$props } from '../../helpers';

//utils
import { mergeOverrides } from '../../overrides';

//types
import { AllOptionsMap, GroupedAsyncSelectProps, GroupedOptions, Id } from '../types';
import { BaseSelectProps, Value } from '../../select/types';
import defaultProps from '../../select/default-props';
import { LOADING_KEY } from '../../select/constants';

const EMPTY_OBJ = {};

export type UseAsyncSelectParams = Omit<GroupedAsyncSelectProps, 'onChange'> & {
  onChange?: (params: OnChangeParams & { valueKeys: Id[] }) => unknown;
};

export const useAsyncSelect = (
  params: UseAsyncSelectParams
): SelectProps & { resultCountMap: Record<string, number | undefined> } => {
  const {
    loadOptions,
    searchingText,
    paginationBuffer,
    debounceInterval,
    resolveSelectedOptions,
    minimumInput = 0,
    loadOnMount = false,
    loadOnFocus = false,
    initialOptions = EMPTY_OBJ,
    listenAllInputChanges = true,
    groupConfig,
    resolveValuesOnUpdate,
    hideUnresolvedValues,
    moveSelectedOptionsToTop = false,
    //selectProps
    onInputChange,
    noResultsMsg,
    overrides,
    value: groupedValue,
    controlRef,
    inputRef: propsInputRef,
    createOption: propsCreateOption,
    valueKey = defaultProps.valueKey,
    labelKey = defaultProps.labelKey,
    onChange: propsOnChange,
    ...restSelectProps
  } = params;
  const locale = useLocale();

  const loadOnMountRef = useLatest(loadOnMount);

  const [options, setOptions] = useState<GroupedOptions>(() =>
    mergeOptions(initialOptions, initGroupOptions(groupConfig))
  );

  const [allOptionsMap, setAllOptionsMap] = useState<AllOptionsMap>(() =>
    _keyBy(normalizeOptions(initialOptions) as Array<Option>, valueKey)
  );

  const [inputElement, setInputElement] = useState<HTMLInputElement | null>(null);
  const inputRef = useLatest(inputElement);

  const combinedRef = useCombinedRefs<HTMLInputElement>(setInputElement, propsInputRef);
  const [rootRef, setRootRef] = useState<HTMLElement | null>(null);
  const [popoverRef, setPopoverRef] = useState<HTMLElement | null>(null);

  const { unresolvedGroupedValueKeys, isResolvingValues } = useResolveSelectedOptions({
    groupedValue,
    valueKey,
    inputRef,
    allOptionsMap,
    setOptions,
    setAllOptionsMap,
    resolveValuesOnUpdate,
    resolveSelectedOptions,
  });
  const [_isLoading, setIsLoading] = useState(loadOnMount);
  const isLoading = isResolvingValues || _isLoading;

  const unresolvedValueKeysRef = useRef<{ id: string; groupId: string }[]>([]);
  const selectedOptions = useMemo(
    () => {
      if (!groupedValue) {
        return undefined;
      }
      unresolvedValueKeysRef.current = [];
      const groupedValueObject = _reduce(
        groupedValue,
        (acc, values, groupId) => {
          acc[groupId] = (values || []).flatMap((valueObjOrId: Id | Option) => {
            const valueId: string = _isObject(valueObjOrId) ? valueObjOrId[valueKey] : valueObjOrId;
            const isResolving = isResolvingValues && unresolvedGroupedValueKeys[groupId].includes(valueId);
            const valueObject: Option = _isObject(valueObjOrId)
              ? valueObjOrId
              : {
                  [valueKey]: valueId,
                  [labelKey]: valueId,
                };
            const isUnresolved = !allOptionsMap[valueId];
            const resolvedObject = isUnresolved ? valueObject : { ...valueObject, ...allOptionsMap[valueId] };
            if (isResolving) {
              return [{ ...resolvedObject, [LOADING_KEY]: true }];
            }
            if (isUnresolved && hideUnresolvedValues) {
              unresolvedValueKeysRef.current.push({ id: valueId, groupId });
              return [];
            }
            return [resolvedObject];
          });
          return acc;
        },
        {} as Record<string, Value>
      );
      return normalizeOptions(groupedValueObject);
    },
    // All options map needs to be present in the dependency list so that the values get recomputed when
    // the resolved options have been fetched
    [
      groupedValue,
      valueKey,
      isResolvingValues,
      unresolvedGroupedValueKeys,
      labelKey,
      allOptionsMap,
      hideUnresolvedValues,
    ]
  );

  const {
    fetchOptions,
    onPaginate,
    onInputChange: inputChangeHandlerToDebounce,
    createOption,
    resultCountMap,
  } = useAsyncOptionHandlers({
    valueKey,
    isLoading,
    minimumInput,
    paginationBuffer,
    inputRef,
    setAllOptionsMap,
    setIsLoading,
    setOptions,
    loadOptions,
    createOption: propsCreateOption,
    groupConfig,
    selectedOptions,
    moveSelectedOptionsToTop,
  });

  const _onInputChange = useInputChangeHandler({
    inputElement,
    listenAllInputChanges,
    onInputChange,
    inputChangeHandlerToDebounce,
    debounceInterval,
  });

  /************************************************ HANDLING FOCUS ****************************************************/

  const handleFocus: FocusEventHandler<HTMLElement> = useCallback(
    event => {
      /**
       * https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/relatedTarget
       * event.relatedTarget points to last focused element
       */
      const lastFocusedNode = event.relatedTarget as Node;
      if (loadOnFocus && !rootRef?.contains(lastFocusedNode) && !popoverRef?.contains(lastFocusedNode)) {
        inputChangeHandlerToDebounce();
      }
    },
    [loadOnFocus, inputChangeHandlerToDebounce, rootRef, popoverRef]
  );

  /******************************************* HANDLING FETCH ON MOUNT ************************************************/

  useEffect(() => {
    if (loadOnMountRef.current) {
      fetchOptions(groupConfig.map(({ id }) => ({ group: id, pageNumber: 0 })));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only want to load the options on first mount
  }, []);

  /********************************************************************************************************************/

  const inputText = getInputValue(inputRef),
    adaptedNoResultsMsg = getNoResultsMsg({
      isLoading,
      noResultsMsg,
      inputText,
      minimumInput,
      searchingText: searchingText ?? locale.asyncSelect.searchingText,
      emptyInputMsg: locale.asyncSelect.emptyInputMsg,
    });

  const mergedOverrides = useMemo(
    () =>
      mergeOverrides(
        {
          Root: { props: { ref: setRootRef, onFocus: handleFocus } },
          Popover: { props: { overrides: { Inner: { props: { ref: setPopoverRef } } } } },
          StatefulMenu: { props: { $onPaginate: onPaginate } },
          NoResults: { props: add$props({ isLoading, inputText, adaptedNoResultsMsg }) },
          ...(params.type === 'overlay'
            ? {
                // In overlaySelect, overflow property is on OverlayContentContainer
                OverlayContentContainer: { props: { onScroll: onPaginate } },
                Menu: { props: { $onPaginate: onPaginate } },
              }
            : {
                //Overriding DropdownContainer and not StatefulMenu so that async select remains functional even when
                //user overrides StatefulMenu in favour of rendering virtualized menu
                Menu: { props: { onScroll: onPaginate } },
              }),
        },
        overrides
      ),
    [handleFocus, onPaginate, isLoading, inputText, adaptedNoResultsMsg, params.type, overrides]
  );

  const onChange: Required<BaseSelectProps>['onChange'] = useCallback(
    onChangeParams => {
      propsOnChange?.({
        ...onChangeParams,
        valueKeys: [
          ...unresolvedValueKeysRef.current.map(({ id }) => id),
          ...onChangeParams.value.map(opt => opt[valueKey]),
        ],
        value: unresolvedValueKeysRef.current.length
          ? [
              ...unresolvedValueKeysRef.current.map(({ id, groupId }) => ({
                [valueKey]: id,
                [labelKey]: id,
                __optgroup: groupId,
              })),
              ...onChangeParams.value,
            ]
          : onChangeParams.value,
      });
    },
    [propsOnChange, valueKey, labelKey]
  );

  return {
    children: undefined,
    ...restSelectProps,
    options,
    isLoading,
    value: selectedOptions,
    controlRef,
    inputRef: combinedRef,
    overrides: mergedOverrides,
    noResultsMsg: adaptedNoResultsMsg,
    createOption,
    onInputChange: _onInputChange,
    valueKey,
    labelKey,
    type: restSelectProps.type,
    resultCountMap,
    onChange,
    onOpen: () => {
      moveSelectedOptionsToTop && setOptions(prev => mergeOptions((selectedOptions || []) as Array<Option>, prev));
      restSelectProps.onOpen && restSelectProps.onOpen();
    },
  };
};
