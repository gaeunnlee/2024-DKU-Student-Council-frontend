import { useToast } from '@components/ui/toast/use-toaster';
import { API_PATH } from '@constants/api';
import { ROUTES } from '@constants/route';
import { patch } from '@libs/api';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';


interface ResetPwRequest {
   token: string;
   password: string;
}

export const usePostResetPw = () => {
   const navigate = useNavigate();
   const { toast } = useToast();
   return useMutation({
      mutationFn: ({ token, password }: ResetPwRequest) =>
         patch(API_PATH.USER.RESET.RESET_PW, {
            token,
            password,
         }),
      onSuccess: () => {
         toast({
            title: '비밀번호가 변경되었습니다.'
         });
         navigate(ROUTES.LOGIN);
      },
   });
};
