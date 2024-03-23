import { useToast } from '@components/ui/toast/use-toaster';
import { API_PATH } from '@constants/api';
import { ROUTES } from '@constants/route';
import { post } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

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
   options?: UseMutationOptions<UserVerifyResponse, unknown, UserVerifyInfo>,
) => {
   const navigate = useNavigate();
   const { toast } = useToast();
   return useMutation<UserVerifyResponse, unknown, UserVerifyInfo>({
      mutationFn: (verifyInfo: UserVerifyInfo) => post(API_PATH.USER.SIGNUP.VERIFY, verifyInfo),
      ...options,
      onSuccess: (data) => {
         toast({
            title: '인증되었습니다',
         });
         navigate(ROUTES.SIGNUP.INFO, {
            state: {
               data,
            },
         });
      },
   });
};
