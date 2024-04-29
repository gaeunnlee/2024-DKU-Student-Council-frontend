import { HTTP_STATUS_CODE } from '@constants/error';
import { useCallback } from 'react';

import HTTPError from '@/types/statusError';

export const useResetError = () => {

   const handleErrorReset = useCallback(
      (error: Error | HTTPError) => {
         if (error instanceof Error && !(error instanceof HTTPError)) {
            window.location.href = '/';
            return;
         }

         if (error.statusCode && error?.statusCode >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
            window.location.reload();
         } else {
            window.location.href = '/';
         }
      },
      [],
   );

   return { handleErrorReset };
};
