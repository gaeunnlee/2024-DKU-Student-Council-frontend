import { renderHook, act } from '@testing-library/react-hooks';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
   it('초기값을 반환한다.', () => {
      const { result } = renderHook(() => useDebounce('hello', 500));
      expect(result.current).toBe('hello');
   });

   it('디바운싱 된 값을 반환한다.', () => {
      jest.useFakeTimers();
      const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
         initialProps: { value: 'hello', delay: 500 },
      });

      expect(result.current).toBe('hello');

      act(() => {
         rerender({ value: 'world', delay: 500 });
      });

      expect(result.current).toBe('hello');

      jest.advanceTimersByTime(500);

      expect(result.current).toBe('world');
   });
});
