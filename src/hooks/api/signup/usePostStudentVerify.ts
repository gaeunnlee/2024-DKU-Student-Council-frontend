import { useToast } from '@components/ui/toast/use-toaster';
import { API_PATH } from '@constants/api';
import { ROUTES } from '@constants/route';
import { post } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import HTTPError from '@/types/statusError';


export interface UserVerifyInfo {
   dkuStudentId: string;
   dkuPassword: string;
}

interface UserVerifyResponse {
   signupToken: string;
   student: StudentInfo;
}

interface StudentInfo {
   studentName: string;
   studentId: string;
   age: string;
   gender: string;
   major: string;
}


export const usePostStudentVerify = (
   options?: UseMutationOptions<AxiosResponse<UserVerifyResponse>, AxiosError, UserVerifyInfo>,
) => {
   const navigate = useNavigate();
   const { toast } = useToast();
   return useMutation<AxiosResponse<UserVerifyResponse>, AxiosError, UserVerifyInfo>({
      mutationFn: (verifyInfo: UserVerifyInfo) => post(API_PATH.USER.SIGNUP.VERIFY, verifyInfo),
      ...options,
      onSuccess: (data) => {
         console.log(data);
         toast({
            title: '인증되었습니다',
         });
         navigate(ROUTES.SIGNUP.INFO, {
            state: {
               data,
            },
         });
      },
      onError: (error) => {
         const errorResponse = error?.response?.data as HTTPError;
         const errorMsg = errorResponse.message[0];
         toast({
            title: errorMsg,
         });
      }
   });
};
