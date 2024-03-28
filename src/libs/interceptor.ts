import { client } from '@libs/api';
import { TokenType, getAccessToken, getRefreshToken, setToken } from '@utils/token';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';

export const authorization = (config: InternalAxiosRequestConfig) => {
   const accessToken = getAccessToken();
   if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
   }
   return config;
};

export const checkToken = async (error: AxiosError) => {
   const originalRequest = error.config;
   if (!originalRequest?.headers || originalRequest.headers.Authorization) return Promise.reject(error);
   const refreshToken = getRefreshToken();
   if (error.response?.status === 401) {
      try {
         const res = await client.post<TokenType>('/user/reissue', { refreshToken });
         const newAccessToken = res.data.accessToken;
         const newRefreshToken = res.data.refreshToken;
         setToken({ accessToken: newAccessToken, refreshToken: newRefreshToken });
         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
         return client(originalRequest);
      } catch (error) {
         alert('세션이 만료되었습니다. 다시 로그인을 시도해주세요');
         window.location.href = '/login';
         return Promise.reject(error);
      }
   }
   return Promise.reject(error);
};
