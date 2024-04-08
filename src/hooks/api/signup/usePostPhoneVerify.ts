import { API_PATH } from '@constants/api';
import { post } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

interface Request {
   phoneNumber: string;
}

export const usePostPhoneVerify = (
   signupToken: string,
   options?: UseMutationOptions<unknown, unknown, Request>,
) => {
   return useMutation({
      mutationFn: ({ phoneNumber }: Request) =>
         post(API_PATH.USER.SIGNUP.INFO.PHONE_VERIFICATION(signupToken), { phoneNumber }),
      ...options,
   });
};
