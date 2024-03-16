import { renderHook } from '@testing-library/react';

import { useEffectOnce } from './useEffectOnce';

describe('useEffectOnce', () => {
   it('마운트 되었을 때 한번만 callback을 실행한다.', () => {
      const callback = jest.fn();
      renderHook(() => useEffectOnce(callback));

      expect(callback).toBeCalledTimes(1);
   });
});
