import { API_PATH } from '@constants/api';
import { ROUTES } from '@constants/route';
import { post } from '@libs/api';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { isOAuthFlow, redirectToClient } from '@/utils/oAuth';

export interface UserRegistrationInfo {
   nickname: string;
   password: string;
}

export const usePostSignup = (signupToken: string) => {
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();
   return useMutation({
      mutationFn: ({ nickname, password }: UserRegistrationInfo) =>
         post(API_PATH.USER.SIGNUP.INFO.ROOT(signupToken), {
            nickname,
            password,
         }),
      onSuccess: () => {
         if (isOAuthFlow(searchParams)) {
            redirectToClient(searchParams);
         } else {
            navigate(ROUTES.SIGNUP.SUCCESS);
         }
      },
   });
};
