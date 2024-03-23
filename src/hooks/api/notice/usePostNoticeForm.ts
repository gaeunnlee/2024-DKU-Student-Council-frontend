import { API_PATH } from '@constants/api';
import { post } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

export interface PostFormInfo {
   title: string;
   body: string;
   files: File[];
}

interface Response {
   id: number;
}

export const usePostNoticeForm = (options?: UseMutationOptions<Response, unknown, PostFormInfo>) => {
   return useMutation<Response, unknown, PostFormInfo>({
      mutationFn: (formInfo: PostFormInfo) =>
         post(API_PATH.NOTICE.ROOT, {
            formInfo,
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         }),
      ...options,
   });
};
