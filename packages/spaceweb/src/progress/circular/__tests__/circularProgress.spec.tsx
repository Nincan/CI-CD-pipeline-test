import { render } from '@testing-library/react';

import { TestProvider, getCSSByTestId } from '../../../test-utils/test-provider';
import CircularProgress from '../CircularProgress';

const VALUE = 35;
const BACKGROUND_COLOR = 'rgb(10, 10, 10)';
const COLOR = 'rgb(100, 100, 100)';
const LABEL = 'PROGRESS_LABEL';

const renderCircularProgress = props =>
  render(
    <TestProvider>
      <CircularProgress {...props} />
    </TestProvider>
  );

describe('CircularProgress', () => {
  test('when value prop provided, aria-valuenow should be equal to that prop', () => {
    const { getByRole } = renderCircularProgress({ value: VALUE });
    expect(getByRole('progressbar').getAttribute('aria-valuenow')).toBe(String(VALUE));
  });
  test('Bar and BarContainer should have color equal to backgroundColor and color prop', () => {
    renderCircularProgress({ color: COLOR, backgroundColor: BACKGROUND_COLOR });
    const barContainerCSS = getCSSByTestId('bar-container');
    const barCSS = getCSSByTestId('bar');
    expect(barContainerCSS.color).toBe(COLOR);
    expect(barCSS.stroke).toBe(BACKGROUND_COLOR);
  });
  test('label should be applied when passed as a prop', () => {
    const { queryByText } = renderCircularProgress({ label: 'PROGRESS_LABEL' });
    expect(queryByText(LABEL)).toBeTruthy();
  });
});
