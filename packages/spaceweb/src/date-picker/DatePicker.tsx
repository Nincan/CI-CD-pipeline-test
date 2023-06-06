import { ReactElement } from 'react';
import StatefulContainer from './stateful-container';
import { StatelessDatePicker } from './StatelessDatePicker';
import { DatePickerProps } from './types';

export const DatePicker = (props: DatePickerProps): ReactElement => (
  <StatefulContainer {...props} value={props.value}>
    {extendedProps => <StatelessDatePicker {...extendedProps} />}
  </StatefulContainer>
);
