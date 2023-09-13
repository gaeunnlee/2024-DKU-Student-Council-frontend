export const CONSTANTS = {
   /** 루트 주소값 */
   get BASE_URL() {
      const url = process.env.REACT_APP_BASE_URL;
      if (!url) {
         throw new Error('환경변수 REACT_APP_BASE_URL이 정의되지 않았습니다.');
      }
      return url;
   },

   /** 서버 주소값 */
   get SERVER_URL() {
      const url = process.env.REACT_APP_API_URL;
      if (!url) {
         throw new Error('환경변수 REACT_APP_API_URL이 정의되지 않았습니다.');
      }
      return url;
   },

   /** AccessToken Key */
   atk_key: 'damda-atk',
   /** RefreshToken Key */
   rtk_key: 'damda-rtk',
};

/**
 * @description 라우터 경로
 * @example
 * import { ROUTES } from "src/routes";
 * console.log(ROUTES.MAIN.root); // "/"
 * @author 이호연
 */
export const ROUTES = {
   /** 메인 화면 */
   MAIN: '/',
   /** 로그인 화면 */
   LOGIN: '/login',
   /** 404 화면 */
   NOT_FOUND: '*',
   SIGNUP_VERIFY: '/signup/verify',
};

/**
 * @description API 경로
 */
export const API_PATH = {
   /** 로그인 */
   LOGIN: '/login',
   SIGNUP_VERIFY: '/signup/verify',
};
