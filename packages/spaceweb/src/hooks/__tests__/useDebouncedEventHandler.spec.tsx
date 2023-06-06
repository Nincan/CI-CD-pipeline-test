import { waitFor } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { useDebouncedEventHandler } from '../useDebouncedEventHandler';

const wait = async (interval: number): Promise<void> => new Promise(resolve => setTimeout(resolve, interval));
const DUMMY_EVENT = {};
describe('UseDebouncedEventHandler hook', function() {
  describe('Single event fired', function() {
    test('onChange should be called immediately, and debounce handler is only called once after default debounce interval', async () => {
      const normalCallback = jest.fn();
      const debouncedCallback = jest.fn();
      const { result } = renderHook(() => useDebouncedEventHandler(debouncedCallback, normalCallback, 500));
      act(() => {
        result.current(DUMMY_EVENT);
      });

      expect(normalCallback).toHaveBeenCalledTimes(1);
      expect(debouncedCallback).toHaveBeenCalledTimes(0);
      await waitFor(() => expect(debouncedCallback).toHaveBeenCalledTimes(1));
    });
  });
  describe('Multiple event fired', function() {
    test('onChange should be called immediately when triggered, and debounce handler is only called once within default debounce interval', async () => {
      const normalCallback = jest.fn();
      const debouncedCallback = jest.fn();
      const { result } = renderHook(() => useDebouncedEventHandler(debouncedCallback, normalCallback, 500));
      act(() => {
        result.current(DUMMY_EVENT);
      });
      expect(normalCallback).toHaveBeenCalledTimes(1);
      expect(debouncedCallback).toHaveBeenCalledTimes(0);
      act(() => {
        result.current(DUMMY_EVENT);
      });
      expect(normalCallback).toHaveBeenCalledTimes(2);
      expect(debouncedCallback).toHaveBeenCalledTimes(0);
      await wait(200);
      act(() => {
        result.current(DUMMY_EVENT);
        result.current(DUMMY_EVENT);
      });

      expect(normalCallback).toHaveBeenCalledTimes(4);
      expect(debouncedCallback).toHaveBeenCalledTimes(0);
      await waitFor(() => expect(debouncedCallback).toHaveBeenCalledTimes(1));
    });
    test('When passing new debouncedCallback function, it should not call the old debounceHandler', async () => {
      const normalCallback = jest.fn();
      const debouncedCallback = jest.fn();

      const { result, rerender } = renderHook(
        ({ debouncedCallback, normalCallback }) => useDebouncedEventHandler(debouncedCallback, normalCallback, 500),
        {
          initialProps: {
            normalCallback,
            debouncedCallback,
          },
        }
      );

      act(() => {
        result.current(DUMMY_EVENT);
      });
      expect(normalCallback).toHaveBeenCalledTimes(1);
      expect(debouncedCallback).toHaveBeenCalledTimes(0);

      const newDebouncedCallback = jest.fn();
      rerender({ normalCallback, debouncedCallback: newDebouncedCallback });

      act(() => {
        result.current(DUMMY_EVENT);
      });

      expect(normalCallback).toHaveBeenCalledTimes(2);
      await waitFor(() => expect(newDebouncedCallback).toHaveBeenCalledTimes(1));
      expect(debouncedCallback).toHaveBeenCalledTimes(0);
    });
  });
});
