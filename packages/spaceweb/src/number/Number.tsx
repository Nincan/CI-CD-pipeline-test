//hooks
import { useNumber } from './useNumber';

//constants
import { DEFAULT_VARIANT } from './constants';

//types
import { NumberProps } from './types';

export const Number = ({ value, variant = DEFAULT_VARIANT, numberOptions }: NumberProps): JSX.Element => {
  const formattedNumber = useNumber({ value, variant, numberOptions });

  return <>{formattedNumber}</>;
};
