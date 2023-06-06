import { useState } from 'react';
import type { GroupConfig } from '../types';
import type { Items } from 'baseui/menu/types';

export const useGetExpandedGroup = ({
  groupConfig,
  groupedItems,
}: {
  groupConfig: GroupConfig;
  groupedItems: Items;
}): [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>] => {
  const [expandedGroupId, setExpandedGroupId] = useState<string | undefined>(groupConfig[0].id);

  // by default open very first group with non zero elements
  const [initialised, setInitialised] = useState(false);
  if (!initialised) {
    const validGroup = groupConfig.find(group => !!group.count || !!groupedItems[group.id]?.length);
    if (validGroup) {
      setExpandedGroupId(validGroup.id);
      setInitialised(true);
    }
  }
  return [expandedGroupId, setExpandedGroupId];
};
