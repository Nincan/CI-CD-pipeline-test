/**
 *  Created by Aneree on 15/01/21.
 */
import { useRef } from 'react';

const useLatest = <T>(
  value: T
): {
  readonly current: T;
} => {
  const ref = useRef(value);
  ref.current = value;

  return ref;
};

export { useLatest };
