import { useToast } from '@components/ui/toast/use-toaster';
import { API_PATH } from '@constants/api';
import { ROUTES } from '@constants/route';
import { post } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';


interface FindIdRequest {
   phoneNumber: string;
}

export const usePostFindId = (options?: UseMutationOptions<unknown, unknown, FindIdRequest>) => {
   const navigate = useNavigate();
   const { toast } = useToast();
   return useMutation({
      mutationFn: ({phoneNumber}: FindIdRequest) => post(API_PATH.USER.RESET.FIND_ID, {phoneNumber}),
      onSuccess: () => {
         toast({
            title: '인증되었습니다.'
         });
         navigate(ROUTES.RESET.PW_VERIFY);
      },
      ...options,
   });
};
