import _uniqueId from 'lodash/uniqueId';
import { useMemo } from 'react';

const PREFIX = 'sw-id--';

const useUniqueId = (): string => useMemo(() => _uniqueId(PREFIX), []);

export const getUniqueId = (): string => _uniqueId(PREFIX);

export default useUniqueId;
