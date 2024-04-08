import { API_PATH } from '@constants/api';
import { post } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

interface ResetConfirmCodeRequest {
   token: string;
   code: string;
}

export const usePostPhoneConfirmCode = (
   options?: UseMutationOptions<unknown, unknown, ResetConfirmCodeRequest>,
) => {
   return useMutation({
      mutationFn: ({ token, code }: ResetConfirmCodeRequest) =>
         post(API_PATH.USER.RESET.PHONE_VERIFY_CODE, {
            token,
            code,
         }),
      ...options,
   });
};
