import { API_PATH } from '@constants/api';
import { post } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

interface Request {
   code: string;
}

export const usePostPhoneConfirmCode = (
   signupToken: string,
   options?: UseMutationOptions<unknown, unknown, Request>,
) => {
   return useMutation({
      mutationFn: ({ code }: Request) => post(API_PATH.USER.SIGNUP.INFO.CODE(signupToken), { code }),
      ...options,
   });
};
