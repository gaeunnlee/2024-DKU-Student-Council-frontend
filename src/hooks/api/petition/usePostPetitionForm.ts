import { API_PATH } from '@constants/api';
import { post } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

export interface PostFormInfo {
   title: string;
   body: string;
   files: File[];
}

interface PostPetitionResponse {
   id: number;
}

export const usePostPetitionForm = (
   options?: UseMutationOptions<PostPetitionResponse, unknown, PostFormInfo>,
) => {
   return useMutation<PostPetitionResponse, unknown, PostFormInfo>({
      mutationFn: (formInfo: PostFormInfo) =>
         post(API_PATH.PETITION.ROOT, {
            formInfo,
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         }),
      ...options,
   });
};
