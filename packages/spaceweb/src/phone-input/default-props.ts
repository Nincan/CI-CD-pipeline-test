import { Intent } from '../types';
import { InputSize, InputVariant } from '../input';
import { Country, PhoneInputOverrides } from './types';
import { DEFAULT_MAX_DROPDOWN_HEIGHT, DEFAULT_MAX_DROPDOWN_WIDTH } from './constants';

const defaultProps = {
  clearable: false,
  focusLock: false,
  disabled: false,
  maxDropdownHeight: DEFAULT_MAX_DROPDOWN_HEIGHT,
  maxDropdownWidth: DEFAULT_MAX_DROPDOWN_WIDTH,
  name: undefined,
  onChange: () => {},
  overrides: {} as PhoneInputOverrides,
  positive: false,
  required: false,
  variant: 'default' as InputVariant,
};

export const defaultValue = {
  country: {
    label: 'United States',
    id: 'US',
    dialCode: '+1',
  } as Country,
  phoneNumber: '',
};

export default defaultProps;
