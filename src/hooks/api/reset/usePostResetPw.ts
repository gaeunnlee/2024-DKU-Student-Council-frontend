import { API_PATH } from '@constants/api';
import { post } from '@libs/api';
import { useMutation } from '@tanstack/react-query';

interface ResetPwRequest {
   token: string;
   password: string;
}

export const usePostResetPw = () => {
   return useMutation({
      mutationFn: ({ token, password }: ResetPwRequest) =>
         post(API_PATH.USER.RESET.RESET_PW, {
            token,
            password,
         }),
      onSuccess: () => {
         console.log('성공');
      },
   });
};
