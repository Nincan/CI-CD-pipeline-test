import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { getCSSByTestId, TestProvider } from '../../test-utils/test-provider';
import { PhoneInput } from '../index';
import { COUNTRIES, COUNTRY_SELECT_OPTIONS } from '../constants';
import { iso2FlagEmoji } from '../utils';
import * as countrySelect from '../country-select';
import { Country } from '../types';

const DEFAULT_FLAG = iso2FlagEmoji(COUNTRIES.US.id) as string;
const CUSTOM_WIDTH = '300px';
const CUSTOM_HEIGHT = '300px';
const CUSTOM_NUMBER = '0123456789';
const CUSTOM_COUNTRY_CODES = [
  { label: 'India (भारत)', id: 'IN', dialCode: '+91' },
  { label: 'Canada', id: 'CA', dialCode: '+1' },
] as unknown as Array<Country>;

const countrySelectSpy = jest.spyOn(countrySelect, 'default');

const renderPhoneInput = (props?) =>
  render(
    <TestProvider>
      <PhoneInput {...props} />
    </TestProvider>
  );

const getRenderedCountryOptionByLabel = (): Element =>
  window.document.querySelectorAll(`[data-entity-type="country-label"]`)[0];

describe('PhoneInput', () => {
  describe('onChange', () => {
    test('should be called whenever a country is selected', async () => {
      const onChange = jest.fn();
      const { getByText } = renderPhoneInput({ onChange });

      userEvent.click(getByText(DEFAULT_FLAG));

      const option = getRenderedCountryOptionByLabel();
      const optionId = option.getAttribute('data-testid') as string;

      userEvent.click(option);

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({ country: COUNTRY_SELECT_OPTIONS.filter(({ id }) => id === optionId)[0] })
      );
    });

    test('should be called whenever a number is entered', () => {
      const onChange = jest.fn();
      const { container } = renderPhoneInput({ onChange });
      const input = container.querySelector('input') as HTMLInputElement;

      userEvent.type(input, '1');

      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith(expect.objectContaining({ phoneNumber: '1' }));
    });

    test('should return focus to Input whenever a country is selected', async () => {
      const { getByText, container } = renderPhoneInput();

      userEvent.click(getByText(DEFAULT_FLAG));

      const option = getRenderedCountryOptionByLabel();
      userEvent.click(option);

      const input = container.querySelector('input');
      expect(input).toHaveFocus();
    });
  });

  test('disabled should disable flagContainer and input', () => {
    const { container, getByText } = renderPhoneInput({ disabled: true });
    const flagContainer = getByText(DEFAULT_FLAG);
    const input = container.querySelector('input');

    expect(flagContainer).toBeDisabled();
    expect(input).toBeDisabled();
  });

  test('clearable should render clear button, and it should clear input when clicked', () => {
    let phoneNumber = CUSTOM_NUMBER;
    const onInputChange = jest.fn(e => {
      phoneNumber = e.target.value;
    });
    const { getByLabelText } = renderPhoneInput({
      clearable: true,
      value: { country: COUNTRIES.US, phoneNumber },
      onInputChange,
    });

    const clearButton = getByLabelText('Clear value') as HTMLButtonElement;

    userEvent.click(clearButton);

    expect(phoneNumber).toBe('');
  });

  describe('default value', () => {
    test('default value should be US when countries are not provided', () => {
      renderPhoneInput();
      expect(countrySelectSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          value: {
            country: COUNTRIES.US,
            phoneNumber: '',
          },
        }),
        expect.anything()
      );
    });

    test('default value should be the first country in provided countries', () => {
      renderPhoneInput({ countries: CUSTOM_COUNTRY_CODES });
      expect(countrySelectSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          value: {
            country: COUNTRIES.IN,
            phoneNumber: '',
          },
        }),
        expect.anything()
      );
    });
  });

  describe('CountrySelect dropdown dimensions', () => {
    test('maxDropdownWidth should be correctly set', () => {
      const { getByText } = renderPhoneInput({ maxDropdownWidth: CUSTOM_WIDTH });

      userEvent.click(getByText(DEFAULT_FLAG));
      const countrySelectDropdown = getCSSByTestId('country-select-overlay');

      expect(countrySelectDropdown.width).toBe(CUSTOM_WIDTH);
    });

    test('maxDropdownHeight should be correctly set', () => {
      const { getByText } = renderPhoneInput({ maxDropdownHeight: CUSTOM_HEIGHT });

      userEvent.click(getByText(DEFAULT_FLAG));
      const countrySelectDropdown = getCSSByTestId('country-select-menu');

      expect(countrySelectDropdown.maxHeight).toBe(CUSTOM_HEIGHT);
    });
  });

  test('mapIsoToLabel should set the Country label', async () => {
    const mapIsoToLabel = (iso: string) => iso.toLowerCase();
    const { getByText } = renderPhoneInput({ mapIsoToLabel });

    userEvent.click(getByText(DEFAULT_FLAG));

    const option = getRenderedCountryOptionByLabel();
    const optionId = option.getAttribute('data-testid') as string;

    expect(getByText(new RegExp(mapIsoToLabel(optionId)))).toBeInTheDocument();
  });
});
