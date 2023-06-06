import { countrySelectFilterOptions } from '../utils';
import { COUNTRY_SELECT_OPTIONS, COUNTRIES } from '../constants';

describe('utils', () => {
  test('country select options should be filterable by dailCode', () => {
    const filteredCountries = countrySelectFilterOptions(COUNTRY_SELECT_OPTIONS, '+91');

    expect(filteredCountries).toEqual(expect.arrayContaining([COUNTRIES.IN]));
  });

  test('country select options should be filterable by label (case insensitive)', () => {
    const filteredCountries = countrySelectFilterOptions(COUNTRY_SELECT_OPTIONS, 'InDiA');

    expect(filteredCountries).toEqual(expect.arrayContaining([COUNTRIES.IN]));
  });
});
