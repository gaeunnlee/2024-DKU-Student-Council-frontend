import axios, { AxiosResponse } from 'axios';
import { CONSTANTS } from 'constant';
import { useAlert } from './useAlert';

// axios.interceptors.request.use((config) => {
//    if (config.auth) {
//       const token = localStorage.getItem(CONSTANTS.atk_key);
//       if (token) {
//          config.headers.Authorization = `Bearer ${token}`;
//       }
//    }
//    return config;
// });

interface Options {
   authenticate?: boolean;
   log?: boolean;
}

const client = axios.create({
   baseURL: CONSTANTS.SERVER_URL,
});

export const useApi = () => {
   const { alert } = useAlert();

   const get = async <T>(url: string, options?: Options): Promise<T> => {
      const token = localStorage.getItem(CONSTANTS.atk_key);
      try {
         const { data } = await client.get<AxiosResponse<T>>(url, {
            headers: {
               Authorization: options?.authenticate && token ? `Bearer ${token}` : null,
            },
         });
         options?.log && console.log(data);
         return data.data;
      } catch (error) {
         alert(error);
         return Promise.reject(error);
      }
   };

   return { get };
};
