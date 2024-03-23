import { API_PATH } from '@constants/api';
import { post } from '@libs/api';
import { useMutation } from '@tanstack/react-query';

export interface UserRegistrationInfo {
   nickname: string;
   password: string;
}

export const usePostSignup = (signupToken: string) => {
   return useMutation({
      mutationFn: ({ nickname, password }: UserRegistrationInfo) =>
         post(API_PATH.USER.SIGNUP.INFO.ROOT(signupToken), {
            nickname,
            password,
         }),
   });
};
