import { API_PATH } from '@constants/api';
import { patch } from '@libs/api';
import { useMutation } from '@tanstack/react-query';

interface ResetPwRequest {
   token: string;
   password: string;
}

export const usePostResetPw = () => {
   return useMutation({
      mutationFn: ({ token, password }: ResetPwRequest) =>
         patch(API_PATH.USER.RESET.RESET_PW, {
            token,
            password,
         }),
   });
};
