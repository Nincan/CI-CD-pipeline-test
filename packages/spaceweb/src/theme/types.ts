import { ThemeContext } from '../types';

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

export type ThemeProviderT = ((theme?: ThemeContext) => ThemeContext) | RecursivePartial<ThemeContext>;
