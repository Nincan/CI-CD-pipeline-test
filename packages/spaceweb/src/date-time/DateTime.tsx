//hooks
import { useDateTime } from './useDateTime';

//types
import { DateTimeProps } from './types';

export const DateTime = ({ date, variant, dateTimeOptions }: DateTimeProps): JSX.Element => {
  const formattedDate = useDateTime({ date, variant, dateTimeOptions });

  return <>{formattedDate}</>;
};
