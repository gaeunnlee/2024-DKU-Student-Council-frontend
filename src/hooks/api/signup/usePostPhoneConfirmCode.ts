import { API_PATH } from '@constants/api';
import { post } from '@libs/api';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

interface Request {
   code: string;
}

interface Response {
   message: string;
}


export const usePostPhoneConfirmCode = (
   signupToken: string,
) => {
   return useMutation<AxiosResponse<Response>, AxiosError, Request>({
      mutationFn: ({code }: Request) => post(API_PATH.USER.SIGNUP.INFO.CODE(signupToken), { code }),
   });
};