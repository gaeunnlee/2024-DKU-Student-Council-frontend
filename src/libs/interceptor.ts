import { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { HTTP_STATUS_CODE } from '@/constants/error';

interface ErrorResponse {
   statusCode?: number;
   status: string;
   message: string;
}

export const checkToken = (config: InternalAxiosRequestConfig) => {
   if (!config.headers || config.headers.Authorization) return config;

   const accessToken = localStorage.getItem('accessToken');

   if (!accessToken) {
      // window.location.href = '/';
      throw new Error('토큰이 유효하지 않습니다');
   }

   config.headers.Authorization = `Bearer ${accessToken}`;
   return config;
};

export const handleAPIError = (error: AxiosError<ErrorResponse>) => {
   if (!error.response) throw error;

   const { status } = error.response;
   if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
      throw new Error();
   }

   throw new Error();
};
