import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { getCSSFromEl, TestProvider } from '../../../test-utils/test-provider';
import MobileSelect from '../index';
import { MobileSelectProps } from '../../types';

const OPTIONS = [
  { label: 'AliceBlue', value: '#F0F8FF' },
  { label: 'AntiqueWhite', value: '#FAEBD7' },
  { label: 'Aqua', value: '#00FFFF' },
  { label: 'Aquamarine', value: '#7FFFD4' },
  { label: 'Azure', value: '#F0FFFF' },
  { label: 'Beige', value: '#F5F5DC' },
];

const renderMobileSelect = (props?: Partial<MobileSelectProps>) =>
  render(
    <TestProvider>
      <MobileSelect
        options={OPTIONS}
        type="mobile"
        placeholder="mobile-select"
        labelKey="label"
        valueKey="value"
        {...props}
      />
    </TestProvider>
  );

const mockFn = jest.fn();
Object.defineProperty(window, 'visualViewport', {
  value: { addEventListener: mockFn, removeEventListener: mockFn },
});

describe('MobileSelect', () => {
  test('MobileSheet is visible when Select is clicked, and should close when an option is selected', async () => {
    const { getByText, findByTestId } = renderMobileSelect();

    const mobileSelect = getByText(/mobile-select/i);
    userEvent.click(mobileSelect);

    const mobileSheet = await findByTestId(/mobileSelect-sheetContainer/i);
    expect(mobileSheet).toBeInTheDocument();

    const option = getByText(OPTIONS[1].label);
    userEvent.click(option);

    expect(mobileSheet).not.toBeInTheDocument();
  });

  test('MobileSheet should have `position: fixed`, `bottom: 0px` and `zIndex` greater than Backdrop', () => {
    const { getByText, getByTestId } = renderMobileSelect();

    const mobileSelect = getByText(/mobile-select/i);
    userEvent.click(mobileSelect);

    const mobileSheetCSS = getCSSFromEl(getByTestId(/mobileSelect-sheetContainer/i));
    expect(mobileSheetCSS).toHaveProperty('position', 'fixed');
    expect(mobileSheetCSS).toHaveProperty('bottom', '0px');

    const backdropCSS = getCSSFromEl(getByTestId(/backdropEl/i));
    expect(Number(mobileSheetCSS.zIndex)).toBeGreaterThan(Number(backdropCSS.zIndex));
  });

  test('`label` should be visible & click on Chevron icon should close the MobileSheet', () => {
    const { getByText, getByTestId } = renderMobileSelect({ label: 'back' });

    const mobileSelect = getByText(/mobile-select/i);
    userEvent.click(mobileSelect);

    const mobileSheet = getByTestId(/mobileSelect-sheetContainer/i);
    expect(mobileSheet).toBeInTheDocument();

    getByText(/back/i);

    const chevron = getByTestId('button');
    userEvent.click(chevron);

    expect(mobileSheet).not.toBeInTheDocument();
  });

  test('click on the Backdrop should close the MobileSheet', () => {
    const { getByText, getByTestId } = renderMobileSelect();

    const mobileSelect = getByText(/mobile-select/i);
    userEvent.click(mobileSelect);

    const mobileSheet = getByTestId(/mobileSelect-sheetContainer/i);
    expect(mobileSheet).toBeInTheDocument();

    const backdrop = getByTestId(/backdropEl/i);
    userEvent.click(backdrop);

    expect(mobileSheet).not.toBeInTheDocument();
  });
});
