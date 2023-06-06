import * as React from 'react';
import _omit from 'lodash/omit';
import { Select } from '../index';
import { mergeOverrides } from '../../overrides';
import {
  CHILD_SELECT_OVERRIDES,
  CHILD_SELECT_PROPS_TO_OMIT,
  OVERLAY_SELECT_PROPS_TO_OMIT,
  getOverlayOverrides,
} from './overrides';
import { usePauseBodyScrollEffect } from './hooks/usePauseBodyScrollEffect';
import { MobileSelectProps, OverlaySelectProps } from '../types';

export const MobileSelect = React.memo((props: MobileSelectProps): React.ReactElement => {
  const { overrides, children, label } = props;
  const [scrollContainer, setScrollContainer] = React.useState<HTMLElement | null>(null);
  const mergedOverrides = React.useMemo(
    () => mergeOverrides(overrides ?? {}, getOverlayOverrides({ overlayContainerRef: setScrollContainer, label })),
    [overrides, label]
  );
  const childSelectOverrides = React.useMemo(
    () => mergeOverrides(overrides ?? {}, CHILD_SELECT_OVERRIDES),
    [overrides]
  );
  const overlaySelectProps = _omit(props, OVERLAY_SELECT_PROPS_TO_OMIT);
  const viewSelectProps = _omit(props, CHILD_SELECT_PROPS_TO_OMIT);

  usePauseBodyScrollEffect({ currentEl: scrollContainer || undefined });

  return (
    <Select
      overlayWidth="100%"
      maxDropdownHeight="100%"
      autoFocus
      {...overlaySelectProps}
      overrides={mergedOverrides}
      type="overlay"
      filterOptions={overlaySelectProps.filterOptions}
    >
      {React.isValidElement(children) ? (
        children
      ) : (
        <Select
          {...viewSelectProps}
          filterOptions={viewSelectProps.filterOptions}
          overrides={childSelectOverrides}
          type="select"
        />
      )}
    </Select>
  );
});
