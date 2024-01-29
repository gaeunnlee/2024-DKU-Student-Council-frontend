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

export const API_PATH = {
   USER: {
      /** 내 정보 조회 */
      ME: '/user',
      /** 로그인 */
      LOGIN: '/user/login',
      /** 회원가입 */
      SIGNUP: {
         VERIFY: '/user/dku/verify',
         INFO: {
            /** 회원가입 */
            ROOT: (signupToken: string) => `/user/${signupToken}`,
            /** 닉네임 중복 검사 */
            NICKNAME: '/user/valid',
            /** 인증 SMS 전송 */
            PHONE_VERIFICATION: (signupToken: string) => `/user/sms/${signupToken}`,
            /** SMS 코드 확인 */
            CODE: (signupToken: string) => `/user/sms/verify/${signupToken}`,
         },
      },
      /** 닉네임 변경 */
      CHANGE: {
         NICKNAME: '/user/change/nickname',
         PASSWORD: '/user/change/password',
         PHONE: {
            VERIFY: '/user/change/phone/verify',
         },
      },
   },
   MAIN: {
      /** 메인페이지 모든 데이터 */
      ROOT: '/main',
      /** 캐러셀 목록 */
      CAROUSEL: '/main/carousel',
      /** 학사일정 */
      SCHEDULE: '/main/schedule',
      /** 학식 정보 */
      CAFETERIA: '/cafeteria/meal/today',
   },
   POST: {
      /* 공지 */
      NOTICE: {
         /** 공지 목록 */
         ROOT: '/post/notice',
         /** 공지 단건조회 */
         ID: (id: string) => `/post/notice/${id}`,
      },
      /* 청원게시판 */
      PETITION: {
         /** 청원게시판 목록 */
         ROOT: '/post/petition',
         /** 청원게시판 단건조회 */
         ID: (id: string) => `/post/petition/${id}`,
         /** 청원글 동의 */
         AGREE: {
            ID: (id: string) => `/post/petition/agree/${id}`,
         },
      },
      /* 대여물품 */
      RENTAL: {
         /** 대여물품 목록 */
         ITEM: '/rental/item',
         /** 대여물품 단건조회 */
         ITEM_DETAIL: (id: string) => `/rental/${id}`,
      },
      /** 회의록 */
      CONFERENCE: {
         /** 회의록 목록 */
         ROOT: '/post/conference',
      },
      /** 회칙 */
      RULE: {
         /** 회칙 목록 */
         ROOT: '/post/rule',
      },
   },
};

/**
 * @description API query string
 */
export const QUERY_STRING = {
   PAGE: 'page',
   SIZE: 'size',
   SORT: 'sort',
   KEYWORD: 'keyword',
};

/**
 * @description Page Size
 */
export const PAGE_SIZE = {
   RENTAL: 20,
};
