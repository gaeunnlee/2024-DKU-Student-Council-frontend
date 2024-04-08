import { API_PATH } from '@constants/api';
import { patch } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

interface resetPasswordRequest {
   token: string;
   password: string;
}

export const usePatchResetPassword = (
   options?: UseMutationOptions<unknown, unknown, resetPasswordRequest>,
) => {
   return useMutation({
      mutationFn: ({ token, password }: resetPasswordRequest) =>
         patch(API_PATH.USER.RESET.RESET_PW, {
            token,
            password,
         }),
      ...options,
   });
};
