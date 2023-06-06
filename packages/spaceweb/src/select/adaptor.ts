import { TYPE } from 'baseui/select';
import { Type } from './types';
import { ValueOf } from '../utility-types';

export const typeAdaptor: Record<Type, ValueOf<typeof TYPE>> = {
  select: TYPE.select,
  search: TYPE.search,
};
