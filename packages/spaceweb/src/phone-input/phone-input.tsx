import { useRef } from 'react';
import * as React from 'react';
import _pick from 'lodash/pick';
import { Input as DefaultInput } from '../input';
import CountrySelectContainer from './country-select-container';
import { getRootStyles, getInputStyles } from './styled-components';
import { getDefaultValue, sanitize } from './utils';
import { useOverrides, mergeOverrides } from '../overrides';
import { useLocale } from '../locale';
import { PhoneInputProps } from './types';
import defaultProps from './default-props';
import { useContextualFormProps } from '../form-control/context';
import { useStyle } from '../style';
import { getDefaultSize } from '../helpers/themeHelpers';

const PhoneInput = (props: PhoneInputProps): React.ReactElement => {
  const {
    size: _size,
    variant,
    intent,
    disabled,
    overrides,
    mapIsoToLabel,
    maxDropdownHeight,
    maxDropdownWidth,
    onInputChange,
    onChange,
    value: propValue,
    countries,
    ...rest
  } = useContextualFormProps(props);
  const { isRTL, theme } = useStyle();
  const size = _size ?? getDefaultSize(theme);
  const locale = useLocale();
  const inputRef = useRef(null);

  const value = propValue ?? getDefaultValue(countries);

  const mergedOverrides = mergeOverrides(
    {
      Input: {
        props: {
          overrides: {
            Root: {
              style: getRootStyles,
              props: { $disabled: disabled },
            },
            Input: {
              style: getInputStyles,
            },
            [isRTL ? 'After' : 'Before']: {
              component: CountrySelectContainer,
              props: {
                size,
                disabled,
                inputRef,
                value,
                onChange,
                mapIsoToLabel,
                maxDropdownHeight,
                maxDropdownWidth,
                countries,
                overrides: _pick(overrides, ['CountrySelect', 'CountrySelectContainer', 'FlagContainer', 'DialCode']),
              },
            },
          },
        },
      },
    },
    overrides
  );

  const [Input, inputProps] = useOverrides(mergedOverrides?.Input, DefaultInput);

  return (
    <Input
      aria-label={locale.phoneInput.inputAriaLabel}
      size={size}
      variant={variant}
      intent={intent}
      disabled={disabled}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const number = sanitize(e.currentTarget.value);
        if (onChange) {
          onChange({ ...value, phoneNumber: number });
        }
        if (onInputChange) {
          onInputChange(e);
        }
      }}
      value={sanitize(value?.phoneNumber)}
      inputRef={inputRef}
      type="text"
      inputMode="tel"
      {...rest}
      {...inputProps}
    />
  );
};
PhoneInput.defaultProps = defaultProps;

export default PhoneInput;
