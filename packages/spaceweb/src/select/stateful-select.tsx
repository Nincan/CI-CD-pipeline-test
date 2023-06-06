import { StatefulSelectContainer, SelectProps as BaseSelectProps } from 'baseui/select';
import * as React from 'react';

import OverlaySelect from './overlaySelect';
import Select from './select';
import defaultProps from './default-props';
import { OverlaySelectProps, SelectProps, StatefulSelectProps } from './types';

function StatefulSelect({ overrides, onChange, ...restProps }: StatefulSelectProps): React.ReactElement {
  return (
    <StatefulSelectContainer {...restProps} onChange={onChange as BaseSelectProps['onChange']}>
      {(selectProps: BaseSelectProps): React.ReactElement =>
        restProps.type === 'overlay' ? (
          <OverlaySelect {...(selectProps as unknown as OverlaySelectProps)} overrides={overrides}>
            {restProps.children}
          </OverlaySelect>
        ) : (
          <Select
            {...(selectProps as SelectProps)}
            filterOptions={selectProps.filterOptions}
            overrides={overrides}
          />
        )
      }
    </StatefulSelectContainer>
  );
}

StatefulSelect.defaultProps = defaultProps;

export default StatefulSelect;
