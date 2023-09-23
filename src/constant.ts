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

   /** 하단 네비게이션 사이즈 */
   bottomNavSize: '60px',
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
   /** 마이페이지 */
   MYPAGE: '/mypage',
   /** 404 화면 */
   NOT_FOUND: '*',
   /** 회원가입 */
   SIGNUP: {
      /** 루트 */
      ROOT: '/signup',
      /** 학생 인증 */
      VERIFY: '/signup/verify',
      /** 동의 */
      TERMS: '/signup/terms',
   },
   /** 대여물품 */
   RENTAL: {
      /** 루트 */
      ROOT: '/rental',
   },
};

/**
 * @description API 경로
 */
export const API_PATH = {
   USER: {
      /** 내 정보 조회 */
      ME: '/user',
      /** 로그인 */
      LOGIN: '/user/login',
      /** 회원가입 */
      SIGNUP: {
         VERIFY: '/user/dku/verify',
      },
   },
   MAIN: {
      /** 메인페이지 모든 데이터 */
      ROOT: '/main',
      /** 캐러셀 목록 */
      CAROUSEL: '/main/carousel',
      /** 학사일정 */
      SCHEDULE: '/main/schedule',
   },
   RENTAL: {
      /** 대여물품 목록 */
      ITEM: '/rental/item',
   },
};
