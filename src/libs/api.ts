import { CONSTANTS } from '@constants/api';
import { checkToken } from '@libs/interceptor';
import { authorization } from '@libs/interceptor';
import axios, { AxiosResponse } from 'axios';

export const client = axios.create({
   baseURL: CONSTANTS.SERVER_URL,
   timeout: 15000,
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
   async (error) => {
      checkToken(error);
   },
);
