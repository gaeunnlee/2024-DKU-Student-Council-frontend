import { API_PATH } from '@constants/api';
import { post } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

interface FindIdRequest {
   phoneNumber: string;
}

export const usePostFindId = (options?: UseMutationOptions<unknown, unknown, FindIdRequest>) => {
   return useMutation({
      mutationFn: () => post(API_PATH.USER.RESET.FIND_ID),
      ...options,
   });
};
