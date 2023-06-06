import { render } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { createRef } from 'react';
import useStatefulMenu from '../useStatefulMenu';

describe('useStatefulMenu', function() {
  describe('navigationEnabled', function() {
    it('on initial mount navigationEnabled should have opposite value of disableNavigationOnMount', () => {
      const { result } = renderHook(() =>
        useStatefulMenu({
          focusWhenNavigationEnabled: true,
          listItemsContainerRef: null,
        })
      );
      expect(result.current.navigationEnabled).toBe(true);

      const { result: navigationDisableResult } = renderHook(() =>
        useStatefulMenu({
          focusWhenNavigationEnabled: true,
          disableNavigationOnMount: true,
          listItemsContainerRef: null,
        })
      );
      expect(navigationDisableResult.current.navigationEnabled).toBe(false);
    });
  });

  describe('toggle navigation status', function() {
    it('turnOnKeyboardNavigation & turnOffKeyboardNavigation should be function', () => {
      const { result } = renderHook(() =>
        useStatefulMenu({
          focusWhenNavigationEnabled: true,
          listItemsContainerRef: null,
        })
      );

      expect(result.current.turnOnKeyboardNavigation).toEqual(expect.any(Function));
      expect(result.current.turnOffKeyboardNavigation).toEqual(expect.any(Function));
    });
    it('turnOnKeyboardNavigation should enable navigation.', () => {
      const { result } = renderHook(() =>
        useStatefulMenu({
          focusWhenNavigationEnabled: true,
          disableNavigationOnMount: true,
          listItemsContainerRef: null,
        })
      );

      expect(result.current.navigationEnabled).toBe(false);
      act(result.current.turnOnKeyboardNavigation);
      expect(result.current.navigationEnabled).toBe(true);
    });
    it('turnOffKeyboardNavigation should disable navigation.', () => {
      const { result } = renderHook(() =>
        useStatefulMenu({
          focusWhenNavigationEnabled: true,
          listItemsContainerRef: null,
        })
      );

      expect(result.current.navigationEnabled).toBe(true);
      act(result.current.turnOffKeyboardNavigation);
      expect(result.current.navigationEnabled).toBe(false);
    });
  });

  describe('focusWhenNavigationEnabled', function() {
    it('if true, listContainer should be focused when navigation is enabled.', () => {
      const ref = createRef<HTMLUListElement>();

      render(<ul ref={ref} />);
      ref.current?.blur();
      const { result } = renderHook(() =>
        useStatefulMenu({
          focusWhenNavigationEnabled: true,
          disableNavigationOnMount: true,
          listItemsContainerRef: ref.current,
        })
      );

      expect(result.current.navigationEnabled).toBe(false);
      // not focused initially
      expect(ref.current).not.toBe(document.activeElement);
      act(result.current.turnOnKeyboardNavigation);
      expect(result.current.navigationEnabled).toBe(true);
      expect(ref.current).toBe(document.activeElement);
    });
    it('if true, navigation should disable automatically when blurred.', () => {
      const ref = createRef<HTMLUListElement>();

      render(<ul ref={ref} />);
      ref.current?.blur();
      const { result } = renderHook(() =>
        useStatefulMenu({
          listItemsContainerRef: ref.current,
          focusWhenNavigationEnabled: true,
        })
      );

      expect(result.current.navigationEnabled).toBe(true);
      // focused initially
      expect(ref.current).toBe(document.activeElement);
      act(() => ref.current?.blur());
      expect(ref.current).not.toBe(document.activeElement);
      expect(result.current.navigationEnabled).toBe(false);
    });
  });
});
