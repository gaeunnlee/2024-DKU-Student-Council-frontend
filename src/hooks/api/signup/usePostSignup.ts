import { API_PATH } from '@constants/api';
import { ROUTES } from '@constants/route';
import { post } from '@libs/api';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export interface UserRegistrationInfo {
   nickname: string;
   password: string;
}

export const usePostSignup = (signupToken: string) => {
   const navigate = useNavigate();
   return useMutation({
      mutationFn: ({ nickname, password }: UserRegistrationInfo) =>
         post(API_PATH.USER.SIGNUP.INFO.ROOT(signupToken), {
            nickname,
            password,
         }),
      onSuccess: () => navigate(ROUTES.LOGIN),
   });
};
