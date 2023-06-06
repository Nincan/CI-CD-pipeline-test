import { render, act } from '@testing-library/react';
import { TestProvider, getCSSByTestId, getTestStyleUtils } from '../../test-utils/test-provider';
import Loader from '../loader';
import { LoaderProps } from '../types';

const mockDelay = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

const renderLoader = (props: Partial<LoaderProps>) =>
  render(
    <TestProvider>
      <Loader {...props} />
    </TestProvider>
  );

describe('Loader', function() {
  describe('when beat variant', function() {
    it('should render 3 balls inside loader.', () => {
      const TEST_ID = 'beat-loader-ball';
      const { getAllByTestId } = renderLoader({ overrides: { BeatLoaderBall: { props: { 'data-testid': TEST_ID } } } });
      expect(getAllByTestId(TEST_ID).length).toBe(3);
    });
    it('should make sure that size passed to loader is applied to each ball.', () => {
      const TEST_ID = 'beat-loader-ball';
      renderLoader({
        size: 15,
        overrides: { BeatLoaderBall: { props: { 'data-testid': TEST_ID } } },
      });
      const styles = getCSSByTestId(TEST_ID);
      const { px2rem } = getTestStyleUtils();

      expect(styles.height).toBe(px2rem(15));
      expect(styles.width).toBe(px2rem(15));
    });
  });
  describe('when clip variant', function() {
    it('size passed should be applied to clip loader', () => {
      const TEST_ID = 'clip-loader';
      renderLoader({
        size: 15,
        variant: 'clip',
        overrides: { Loader: { props: { 'data-testid': TEST_ID } } },
      });
      const styles = getCSSByTestId(TEST_ID);
      const { px2rem } = getTestStyleUtils();

      expect(styles.height).toBe(px2rem(15));
      expect(styles.width).toBe(px2rem(15));
    });
  });
  describe('delay', function() {
    it('loader should be visible after provided delay.', async () => {
      const { queryByTestId, getByTestId } = renderLoader({ delay: 1000 });
      expect(queryByTestId('loader')).toBeNull();

      await act(() => mockDelay(1000));
      getByTestId('loader');
    });
    it('if delay is 0, loader should be visible as soon as it mounts.', () => {
      const { getByTestId } = renderLoader({ delay: 0 });
      getByTestId('loader');
    });
  });
  describe('overrides', function() {
    it('Text should accept Typography props if loadingContent is not Typography node.', () => {
      const TEST_ID = 'loader-content';
      renderLoader({
        loadingContent: 'Loading',
        overrides: { Text: { props: { weight: 'bold', 'data-testid': TEST_ID } } },
      });
      const styles = getCSSByTestId(TEST_ID);
      expect(styles.fontWeight).toBe('700');
    });
    it('BeatLoaderBall', () => {
      const TEST_ID = 'clip-loader-ball';
      renderLoader({
        overrides: { BeatLoaderBall: { props: { 'data-testid': TEST_ID }, style: { backgroundColor: 'red' } } },
      });
      const styles = getCSSByTestId(TEST_ID);
      expect(styles.backgroundColor).toBe('red');
    });
  });
  describe('Accessibility', function() {
    it('aria-busy should be true when loader is visible', async () => {
      const { getByRole } = renderLoader({ delay: 1000 });
      expect(window.document.querySelectorAll('[aria-busy="true"]').length).toBe(0);

      await act(() => mockDelay(1000));
      const loader = getByRole('progressbar');
      expect(loader.getAttribute('aria-busy')).toBe('true');
    });
  });
});
