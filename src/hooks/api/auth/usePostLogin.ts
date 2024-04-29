import { API_PATH } from '@constants/api';
import { ROUTES } from '@constants/route';
import { post } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { setToken } from '@utils/token';
import { AxiosError } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAlert } from '@/hooks/useAlert';

interface LoginRequest {
   studentId: string;
   password: string;
}

interface LoginResponse {
   accessToken: string;
   refreshToken: string;
}

export const usePostLogin = (options?: UseMutationOptions<LoginResponse, AxiosError, LoginRequest>) => {
   const navigate = useNavigate();
   const { pathname } = useLocation();
   const { alert } = useAlert();
   return useMutation<LoginResponse, AxiosError, LoginRequest>({
      mutationFn: ({ studentId, password }: LoginRequest) =>
         post(API_PATH.USER.LOGIN.DEFAULT, { studentId, password }),
      onSuccess: (data) => {
         setToken(data);
         pathname === '/login' && navigate(ROUTES.MAIN);
      },
      onError: (error: AxiosError) => {
         alert(error.response?.data?.message[0]);
      },
      ...options,
   });
};
