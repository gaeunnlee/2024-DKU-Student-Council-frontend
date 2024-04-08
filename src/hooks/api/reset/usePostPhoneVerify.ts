import { API_PATH } from '@constants/api';
import { post } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

interface ResetPhoneVerifyRequest {
   phoneNumber: string;
}

interface ResetPhoneVerifyResponse {
   token: string;
}

export const usePostPhoneVerify = (
   options?: UseMutationOptions<ResetPhoneVerifyResponse, unknown, ResetPhoneVerifyRequest>,
) => {
   return useMutation<ResetPhoneVerifyResponse, unknown, ResetPhoneVerifyRequest>({
      mutationFn: ({ phoneNumber }: ResetPhoneVerifyRequest) =>
         post<ResetPhoneVerifyResponse>(API_PATH.USER.RESET.PHONE_VERIFY, {
            phoneNumber,
         }),
      ...options,
   });
};
