import { API_PATH, CONSTANTS } from '@constants/api';
import { ROUTES } from '@constants/route';
import { post } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface Request {
   studentId: string;
   password: string;
}

interface Response {
   accessToken: string;
   refreshToken: string;
}

export const usePostLogin = (options?: UseMutationOptions<Response, unknown, Request>) => {
   const navigate = useNavigate();
   return useMutation<Response, unknown, Request>({
      mutationFn: ({ studentId, password }: Request) =>
         post(API_PATH.USER.LOGIN, {
            studentId,
            password,
         }),
      ...options,
      onSuccess: (data) => {
         localStorage.setItem(CONSTANTS.atk_key, data.accessToken);
         localStorage.setItem(CONSTANTS.rtk_key, data.refreshToken);
         navigate(ROUTES.MAIN);
      },
   });
};
