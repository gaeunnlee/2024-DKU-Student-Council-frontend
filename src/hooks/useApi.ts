import axios from 'axios';
import { CONSTANTS } from 'constant';
import { useAlert } from './useAlert';

type ContentType = 'multipart/form-data' | 'application/json' | 'application/x-www-form-urlencoded';
interface Options {
   authenticate?: boolean;
   log?: boolean;
   id?: string;
   contentType?: ContentType;
}

const client = axios.create({
   baseURL: CONSTANTS.SERVER_URL,
});

export const useApi = () => {
   const { alert } = useAlert();
   const token = localStorage.getItem(CONSTANTS.atk_key);

   /**
    * 특정 URL로 GET 요청을 보내고 응답 데이터를 반환합니다.
    *
    * @template T - 응답 데이터의 타입입니다.
    * @param {string} url - GET 요청을 보낼 URL입니다. CONSTANTS.SERVER_URL을 기준으로 상대 경로를 작성합니다.
    * @param {Options} [options] - GET 요청에 대한 옵션입니다.
    * @param {boolean} [options.authenticate] - 토큰을 헤더에 담아 보낼지 여부입니다.
    * @param {boolean} [options.log] - 응답 데이터를 콘솔에 출력할지 여부입니다.
    * @returns {Promise<T>} - 응답 데이터를 담은 Promise 객체입니다.
    * @throws {Error} - 요청이 실패한 경우 에러를 던집니다.
    * @author 이호연
    */
   const get = async <T>(url: string, options?: Options): Promise<T> => {
      try {
         const { data } = await client.get<T>(url, {
            headers: {
               Authorization: options?.authenticate && token ? `Bearer ${token}` : null,
            },
            params: {
               id: options?.id,
            },
         });
         options?.log && console.log(data);
         return data;
      } catch (error) {
         alert(error);
         return Promise.reject(error);
      }
   };

   /**
    * 특정 URL로 POST 요청을 보내고 응답 데이터를 반환합니다.
    *
    * @template Req - 요청 데이터의 타입입니다.
    * @template Res - 응답 데이터의 타입입니다.
    * @param {string} url - POST 요청을 보낼 URL입니다. CONSTANTS.SERVER_URL을 기준으로 상대 경로를 작성합니다.
    * @param {Req} body - POST 요청에 담아 보낼 데이터입니다.
    * @param options - POST 요청에 대한 옵션입니다.
    * @param {boolean} [options.authenticate] - 토큰을 헤더에 담아 보낼지 여부입니다.
    * @param {boolean} [options.log] - 응답 데이터를 콘솔에 출력할지 여부입니다.
    * @returns {Promise<Res>} - 응답 데이터를 담은 Promise 객체입니다.
    * @throws {Error} - 요청이 실패한 경우 에러를 던집니다.
    * @author 이호연
    */
   const post = async <Req, Res = unknown>(url: string, body: Req, options?: Options): Promise<Res> => {
      try {
         const { data } = await client.post<Res>(url, body, {
            headers: {
               Authorization: options?.authenticate && token ? `Bearer ${token}` : null,
               'Content-Type': options?.contentType,
            },
         });
         options?.log && console.log(data);
         return data;
      } catch (error) {
         alert(error);
         return Promise.reject(error);
      }
   };

   /**
    * 특정 URL로 PATCH 요청을 보내고 응답 데이터를 반환합니다.
    *
    * @template Req - 요청 데이터의 타입입니다.
    * @template Res - 응답 데이터의 타입입니다.
    * @param {string} url - PATCH 요청을 보낼 URL입니다. CONSTANTS.SERVER_URL을 기준으로 상대 경로를 작성합니다.
    * @param {Req} body - PATCH 요청에 담아 보낼 데이터입니다.
    * @param options - PATCH 요청에 대한 옵션입니다.
    * @param {boolean} [options.authenticate] - 토큰을 헤더에 담아 보낼지 여부입니다.
    * @param {boolean} [options.log] - 응답 데이터를 콘솔에 출력할지 여부입니다.
    * @returns {Promise<Res>} - 응답 데이터를 담은 Promise 객체입니다.
    * @throws {Error} - 요청이 실패한 경우 에러를 던집니다.
    * @author 이호연
    */
   const patch = async <Req, Res = unknown>(url: string, body: Req, options?: Options): Promise<Res> => {
      try {
         const { data } = await client.patch<Res>(url, body, {
            headers: {
               Authorization: options?.authenticate && token ? `Bearer ${token}` : null,
            },
         });
         options?.log && console.log(data);
         return data;
      } catch (error) {
         alert(error);
         return Promise.reject(error);
      }
   };

   return {
      get,
      post,
      patch,
      async delete(url: string, options?: Options) {
         try {
            const { data } = await client.delete(url, {
               headers: {
                  Authorization: options?.authenticate && token ? `Bearer ${token}` : null,
               },
            });
            options?.log && console.log(data);
            return data;
         } catch (error) {
            alert(error);
            return Promise.reject(error);
         }
      },
   };
};
