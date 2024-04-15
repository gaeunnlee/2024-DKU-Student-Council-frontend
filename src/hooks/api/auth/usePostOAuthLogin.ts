import { API_PATH } from '@constants/api';
import { post } from '@libs/api';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';

interface LoginRequest {
   studentId: string;
   password: string;
}

interface LoginResponse {
   accessToken: string;
   refreshToken: string;
}

export const usePostOAuthLogin = (options?: UseMutationOptions<LoginResponse, AxiosError, LoginRequest>) => {
   const [searchParams] = useSearchParams();

   return useMutation<LoginResponse, AxiosError, LoginRequest>({
      mutationFn: ({ studentId, password }: LoginRequest) =>
         post(API_PATH.USER.LOGIN.OAUTH, {
            studentId,
            password,
            clientId: searchParams.get('clientId') || '',
            redirectUri: searchParams.get('redirectUri') || '',
            codeChallenge: searchParams.get('codeChallenge') || '',
            codeChallengeMethod: searchParams.get('codeChallengeMethod') || '',
            scope: searchParams.get('scope') || '',
            responseType: searchParams.get('responseType') || '',
         }),
      ...options,
   });
};
