import { render } from '@testing-library/react';

import { TestProvider, getCSSByTestId } from '../../../test-utils/test-provider';
import LinearProgress from '../LinearProgress';
import ProgressSegment from '../ProgressSegment';

const VALUE = 35;
const BACKGROUND_COLOR = 'rgb(10, 10, 10)';
const COLOR = 'rgb(100, 100, 100)';
const LABEL = 'PROGRESS_LABEL';

const renderLinearProgress = props =>
  render(
    <TestProvider>
      <LinearProgress {...props} />
    </TestProvider>
  );

describe('LinearProgress', () => {
  test('when value prop provided, width of the progress and aria-valuenow should be equal to that prop', () => {
    const { getByRole } = renderLinearProgress({ value: VALUE });
    const progressBarCSS = getCSSByTestId('filled-track');
    expect(progressBarCSS.width).toBe(`${VALUE}%`);
    expect(getByRole('progressbar').getAttribute('aria-valuenow')).toBe(String(VALUE));
  });
  test('Bar and ProgressBar should have backgroundColor equal to backgroundColor and color prop', () => {
    renderLinearProgress({ color: COLOR, backgroundColor: BACKGROUND_COLOR });
    const progressBarCSS = getCSSByTestId('filled-track');
    const barCSS = getCSSByTestId('track');
    expect(progressBarCSS.backgroundColor).toBe(COLOR);
    expect(barCSS.backgroundColor).toBe(BACKGROUND_COLOR);
  });
  test('label should be applied when passed as a prop', () => {
    const { queryByText } = renderLinearProgress({ label: 'PROGRESS_LABEL' });
    expect(queryByText(LABEL)).toBeTruthy();
  });

  describe('Nested LinearProgress', () => {
    test('each progress segment should have length equal to value prop', () => {
      const VALUES = [30, 20, 10];
      const { getAllByTestId } = render(
        <TestProvider>
          <LinearProgress>
            <ProgressSegment value={VALUES[0]} />
            <ProgressSegment value={VALUES[1]} />
            <ProgressSegment value={VALUES[2]} />
          </LinearProgress>
        </TestProvider>
      );

      const segmentsCSS = getAllByTestId('filled-track').map(el => window.getComputedStyle(el));

      expect(segmentsCSS[0].width).toBe(`${VALUES[0]}%`);
      expect(segmentsCSS[1].width).toBe(`${VALUES[1]}%`);
      expect(segmentsCSS[2].width).toBe(`${VALUES[2]}%`);
    });
  });
});
