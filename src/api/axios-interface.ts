import { AxiosError } from 'axios';

/**
 * @description 메시지를 포함하는 에러
 */
export type MessagedError = {
   msg: string;
};

/**
 * @description 메시지를 포함하는 axios 에러
 */
export type MessagedAxiosError = AxiosError<MessagedError>;

/**
 * @description 로그인 요청에 대한 응답
 */
export interface ILoginResponse {
   accessToken: string;
   refreshToken: string;
}
