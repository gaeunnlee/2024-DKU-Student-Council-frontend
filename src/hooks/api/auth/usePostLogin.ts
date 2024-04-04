import { API_PATH } from '@constants/api';
import { ROUTES } from '@constants/route';
import { post } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { setToken } from '@utils/token';
import { AxiosError, } from 'axios';
import { useNavigate } from 'react-router-dom';


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
   return useMutation<LoginResponse, AxiosError, LoginRequest>({
      mutationFn: ({studentId, password}: LoginRequest) => post(API_PATH.USER.LOGIN, {studentId, password}),
      onSuccess: (data) => {
         setToken(data);
         navigate(ROUTES.MAIN);
      },
      onError: (error: Error) => {
         console.log(error);
      },
      ...options,
   });
};
