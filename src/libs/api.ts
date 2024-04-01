import { CONSTANTS } from '@constants/api';
import { checkToken } from '@libs/interceptor';
import { authorization } from '@libs/interceptor';
import axios, { AxiosResponse } from 'axios';

export const client = axios.create({
   baseURL: CONSTANTS.SERVER_URL,
   timeout: 15000,
});

export const get = async <T>(...args: Parameters<typeof client.get>): Promise<T> => {
   const response = await client.get<T, AxiosResponse<T>>(...args);
   return response.data;
};

export const post = async <T>(...args: Parameters<typeof client.post>): Promise<T> => {
   const response = await client.post<T, AxiosResponse<T>>(...args);
   return response.data;
};

export const put = async <T>(...args: Parameters<typeof client.put>): Promise<T> => {
   const response = await client.put<T, AxiosResponse<T>>(...args);
   return response.data;
};

export const patch = async <T>(...args: Parameters<typeof client.patch>): Promise<T> => {
   const response = await client.patch<T, AxiosResponse<T>>(...args);
   return response.data;
};

export const del = async <T>(...args: Parameters<typeof client.delete>): Promise<T> => {
   const response = await client.delete<T, AxiosResponse<T>>(...args);
   return response.data;
};

client.interceptors.request.use(async (config) => authorization(config));

client.interceptors.response.use(
   (response: AxiosResponse) => {
      return response;
   },
   async (error) => {
      checkToken(error);
   },
);
