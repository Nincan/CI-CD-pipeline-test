import { Options, Option, Value } from '../types';
import { normalizeOptions } from 'baseui/select/utils';
import { UNGROUPED_ID } from '../constants';

function removeDuplicates(valueKey: string, options: Option[] | ReadonlyArray<Option>): Value {
  const keySet = new Set();
  return options.filter(opt => {
    const key = (opt.__optgroup || UNGROUPED_ID) + opt[valueKey];
    const shouldAdd = !keySet.has(key);
    keySet.add(key);
    return shouldAdd;
  });
}

export function mergeOptions(valueKey: string, options1: Options = [], options2: Options = []): Value {
  const optArr1 = normalizeOptions(options1),
    optArr2 = normalizeOptions(options2);

  return removeDuplicates(valueKey, [...optArr1, ...optArr2]);
}
