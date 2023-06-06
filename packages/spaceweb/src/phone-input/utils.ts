import _isEmpty from 'lodash/isEmpty';
import { filterOptions } from '../select/utils/default-filter-options';
import { Value as ValueT } from '../select/types';
import { Value, Country } from './types';
import { COUNTRIES, ISO_REGEX, ISO_TO_FLAG_OFFSET } from './constants';
import { defaultValue } from './default-props';

export const iso2FlagEmoji = (iso: string) => {
  if (!ISO_REGEX.test(iso)) {
    return undefined;
  }
  const chars = Array.from(iso.toUpperCase()).map(char => char.charCodeAt(0) + ISO_TO_FLAG_OFFSET);
  return String.fromCodePoint(...chars);
};

export const sanitize = (value = '') => value.replace(/\D/g, '');

export const getPhoneNumberWithCountryDialCode = (value: Value) => {
  if (value === undefined || value.country === undefined || value.phoneNumber === undefined) {
    return undefined;
  }
  return value.country.dialCode.concat(value.phoneNumber);
};

export const countrySelectFilterOptions: (
  options: ValueT,
  filterValue: string,
  excludeOptions?: ValueT | undefined | null,
  params?: {
    valueKey: string;
    labelKey: string;
  }
) => ValueT = (options, filterValue, excludeOptions, params) =>
  filterOptions(options, filterValue, excludeOptions, {
    ...params,
    filterOption: ({ label, dialCode }: Country, _filterValue: string): boolean => {
      const filterValueLowerCase = _filterValue.toLowerCase();
      return label.toLowerCase().includes(filterValueLowerCase) || dialCode.includes(filterValueLowerCase);
    },
  });

export const getDefaultValue = (countries?: Country[]): { country: Country; phoneNumber: string } =>
  countries && !_isEmpty(countries) ? { country: COUNTRIES[countries[0].id], phoneNumber: '' } : defaultValue;
