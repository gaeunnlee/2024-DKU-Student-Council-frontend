import { CONSTANTS } from '@constants/api';
// import { checkToken } from '@libs/interceptor';
import { authorization } from '@libs/interceptor';
import { TokenType, getRefreshToken, setToken } from '@utils/token';
import axios, { AxiosError, AxiosResponse } from 'axios';

export const client = axios.create({
   baseURL: CONSTANTS.SERVER_URL,
   timeout: 18000,
});

export const get = async <T>(...args: Parameters<typeof client.get>): Promise<T> => {
   return await client.get<T, T>(...args);
};

export const post = async <T>(...args: Parameters<typeof client.post>): Promise<T> => {
   return await client.post<T, T>(...args);
};

export const put = async <T>(...args: Parameters<typeof client.put>): Promise<T> => {
   return await client.put<T, T>(...args);
};

export const patch = async <T>(...args: Parameters<typeof client.patch>): Promise<T> => {
   return await client.patch<T, T>(...args);
};

export const del = async <T>(...args: Parameters<typeof client.delete>): Promise<T> => {
   return await client.delete<T, T>(...args);
};

client.interceptors.request.use(async (config) => authorization(config));

client.interceptors.response.use(
   (response: AxiosResponse) => {
      return response.data;
   },
   async (error: AxiosError) => {
      const originalRequest = error.config;
      if (!originalRequest?.headers || originalRequest.headers.Authorization) return Promise.reject(error);
      const refreshToken = getRefreshToken();
      if (localStorage.getItem('damda-atk') === null && error.response?.status === 401) {
         alert('로그인 이후 이용 가능합니다.');
         window.location.href = '/login';
      }
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
   },
);
