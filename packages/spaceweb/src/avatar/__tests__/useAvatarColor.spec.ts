import { renderHook } from '@testing-library/react-hooks';
import { useAvatarColor } from '../useAvatarColor';

describe('useAvatarColor', function () {
  test('should return same color b/w 2 instances if name doest not change.', () => {
    const { result: result1 } = renderHook(() => useAvatarColor('name'));
    const { result: result2 } = renderHook(() => useAvatarColor('name'));
    expect(result2.current).toBe(result1.current);
  });
  test('if hashCode of 2 strings are different then it should return different colors.', () => {
    const { result: result1 } = renderHook(() => useAvatarColor('name1'));
    const { result: result2 } = renderHook(() => useAvatarColor('name2'));
    expect(result2.current).not.toBe(result1.current);
  })
});
