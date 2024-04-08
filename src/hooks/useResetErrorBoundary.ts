import { HTTP_STATUS_CODE } from '@constants/error';
import { ROUTES } from '@constants/route';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import HTTPError from '@/types/statusError';

export const useResetError = () => {
   const navigate = useNavigate();

   const handleErrorReset = useCallback(
      (error: Error | HTTPError) => {
         if (error instanceof Error && !(error instanceof HTTPError)) {
            navigate(ROUTES.MAIN);

            return;
         }

         if (error.statusCode && error?.statusCode >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
            navigate(0);
         } else {
            navigate(ROUTES.MAIN);
         }
      },
      [navigate],
   );

   return { handleErrorReset };
};
