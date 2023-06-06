/**
 *  Created by Aneree on 15/01/21.
 */
import { useRef } from 'react';

function useFirstMountState(): boolean {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;

    return true;
  }

  return isFirst.current;
}

export { useFirstMountState };
