import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { TestProvider } from '../../test-utils/test-provider';
import { StatefulPhoneInput } from '../index';
import { COUNTRIES, COUNTRY_SELECT_OPTIONS } from '../constants';
import { iso2FlagEmoji, sanitize } from '../utils';

const DEFAULT_FLAG = iso2FlagEmoji(COUNTRIES.US.id) as string;
const CUSTOM_NUMBER = '0123456789';

const renderStatefulPhoneInput = (props?) =>
  render(
    <TestProvider>
      <StatefulPhoneInput {...props} />
    </TestProvider>
  );

const getRenderedCountryOptionByLabel = (): Element =>
  window.document.querySelectorAll(`[data-entity-type="country-label"]`)[0];

describe('StatefulPhoneInput', () => {
  test('should set the country flag whenever a country is selected', async () => {
    const { getByText } = renderStatefulPhoneInput();

    userEvent.click(getByText(DEFAULT_FLAG));

    const option = getRenderedCountryOptionByLabel();
    const optionId = option.getAttribute('data-testid') as string;

    getByText(iso2FlagEmoji(optionId) as string);
  });

  test('should set the dialCode whenever a country is selected', async () => {
    const { getByText } = renderStatefulPhoneInput();

    userEvent.click(getByText(DEFAULT_FLAG));

    const option = getRenderedCountryOptionByLabel();
    const optionId = option.getAttribute('data-testid') as string;

    userEvent.click(option);

    getByText(COUNTRY_SELECT_OPTIONS.filter(({ id }) => id === optionId)[0].dialCode);
  });

  test('should set the phoneNumber', () => {
    const { container } = renderStatefulPhoneInput();
    const input = container.querySelector('input') as HTMLInputElement;

    userEvent.type(input, CUSTOM_NUMBER);

    expect(input.value).toBe(CUSTOM_NUMBER);
  });

  test('should not accept non-numeric characters', () => {
    const ALPHA_NUMERIC_VALUE = 'Q1W2E3R4';
    const SANITIZED_VALUE = sanitize(ALPHA_NUMERIC_VALUE);
    const { container } = renderStatefulPhoneInput();
    const input = container.querySelector('input') as HTMLInputElement;

    userEvent.type(input, ALPHA_NUMERIC_VALUE);

    expect(input.value).toBe(SANITIZED_VALUE);
  });
});
