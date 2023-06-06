/**
 *  Created by Aneree on 10/12/20.
 */
import { RefObject } from 'react';

import * as React from 'react';

import { AllOptionsMap, GroupConfig, GroupedOptions, Option } from './types';
import { normalizeOptions } from 'baseui/select/utils';

import { UNGROUPED_ID } from '../select/constants';
import { Value } from '../select/types';

export const getNoResultsMsg = ({
  isLoading,
  minimumInput,
  inputText,
  noResultsMsg,
  searchingText,
  emptyInputMsg,
}: {
  isLoading: boolean;
  minimumInput: number;
  inputText: string;
  noResultsMsg?: React.ReactNode;
  searchingText: React.ReactNode;
  emptyInputMsg: string;
}): string | React.ReactNode | undefined => {
  if (isLoading) {
    return searchingText;
  }

  //todo: Add locale support
  if (minimumInput > 0 && inputText.length < minimumInput) {
    return `Type at least ${minimumInput} characters to search`;
  }

  return inputText ? noResultsMsg : emptyInputMsg;
};

export const shouldPaginate = (element: HTMLElement, paginationBuffer = 50): boolean =>
  element.scrollHeight > element.clientHeight &&
  element.scrollTop >= element.scrollHeight - element.clientHeight - paginationBuffer;

export const getInputValue = (inputRef: RefObject<HTMLInputElement>): string => inputRef.current?.value || '';

export const arrayToGroupedOptions = (options: Array<Option> | GroupedOptions | Value): GroupedOptions => {
  if (!Array.isArray(options)) {
    return options as GroupedOptions;
  }
  return options.reduce((acc: GroupedOptions, option) => {
    acc[option.__optgroup || UNGROUPED_ID] = acc[option.__optgroup || UNGROUPED_ID] || [];
    acc[option.__optgroup || UNGROUPED_ID].push(option);
    return acc;
  }, {});
};

export const mergeOptions = (a: Array<Option> | GroupedOptions, b: Array<Option> | GroupedOptions): GroupedOptions => {
  const groupedA = arrayToGroupedOptions(a),
    groupedB = arrayToGroupedOptions(b);
  const allKeys = Object.keys({ ...groupedA, ...groupedB });
  return allKeys.reduce((acc: GroupedOptions, key) => {
    acc[key] = [...(groupedA[key] || []), ...(groupedB[key] || [])];
    return acc;
  }, {});
};

export const initGroupOptions = (groupConfig: GroupConfig): GroupedOptions =>
  groupConfig.reduce((acc: GroupedOptions, { id }) => {
    acc[id] = [];
    return acc;
  }, {});

export const addOptionsInMap = (
  optionsMap: AllOptionsMap,
  options: Array<Option> | GroupedOptions,
  valueKey: string
): AllOptionsMap => {
  const newOptions = normalizeOptions(options).filter(option => !optionsMap[option[valueKey]]);

  //Not creating a new map (reference) if there are no new options to be added
  if (newOptions.length) {
    const newOptionsMap = {
      ...optionsMap,
    };

    //Not re-setting options that are already present in the map to prevent their reference from changing
    newOptions.forEach(option => {
      newOptionsMap[option[valueKey]] = option;
    });

    return newOptionsMap;
  }

  return optionsMap;
};

export { normalizeOptions };
