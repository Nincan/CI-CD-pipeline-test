import * as React from 'react';
import Select from './select';

import { SelectProps } from './types';

export function MultiSelect(props: SelectProps): React.ReactElement {
  return <Select {...props} filterOptions={props.filterOptions} multi />;
}
export function SingleSelect(props: SelectProps): React.ReactElement {
  return <Select {...props} filterOptions={props.filterOptions} multi={false} />;
}
