type TMypageRoutes = {
   INDEX: string;
   PASSWORD: string;
   EDIT: string;
   UPDATE: string;
};

type TSignupRoutes = {
   ROOT: string;
   TERMS: string;
   VERIFY: string;
   INFO: string;
   SUCCESS: string;
};

type TResetRoutes = {
   INDEX: string;
   ID: string;
   PW_VERIFY: string;
   PW: string;
};

type TCouncilRoutes = {
   GREETING: string;
   ORGANIZATION: string;
   LOCATION: string;
   RECRUITMENT: string;
};

type TRentalRoutes = {
   ROOT: string;
   ITEM: string;
};

type TPetitionRoutes = {
   ROOT: string;
   ID: string;
   POST: string;
};

type TNoticeRoutes = {
   ROOT: string;
   POST: string;
   ID: string;
};

type TConferenceRoutes = {
   ROOT: string;
};

type TRuleRoutes = {
   ROOT: string;
};

type TBusinessRoutes = {
   ROOT: string;
   ID: string;
   FOOD: string;
   CULTURE: string;
   HEALTH: string;
   ETC: string;
};

export type TMainRoutes = {
   MAIN: string;
   LOGIN: string;
   MYPAGE: TMypageRoutes;
   NOT_FOUND: string;
   SIGNUP: TSignupRoutes;
   RESET: TResetRoutes;
   COUNCIL: TCouncilRoutes;
   RENTAL: TRentalRoutes;
   PETITION: TPetitionRoutes;
   NOTICE: TNoticeRoutes;
   CONFERENCE: TConferenceRoutes;
   RULE: TRuleRoutes;
   BUSINESS: TBusinessRoutes;
};

export const ROUTES: TMainRoutes = {
   /** 메인 화면 */
   MAIN: '/',
   /** 로그인 화면 */
   LOGIN: '/login',
   /** 마이페이지 */
   MYPAGE: {
      INDEX: '/mypage',
      PASSWORD: '/mypage/password',
      EDIT: '/mypage/edit',
      UPDATE: '/mypage/update',
   },
   /** 404 화면 */
   NOT_FOUND: '*',
   /** 회원가입 */
   SIGNUP: {
      /** 루트 */
      ROOT: '/signup',
      /** 동의 */
      TERMS: '/signup/terms',
      /** 학생 인증 */
      VERIFY: '/signup/verify',
      /** 회원 정보 입력 */
      INFO: '/signup/info',
      /** 회원가입 성공 */
      SUCCESS: '/signup/success',
   },
   /** 아이디 및 비밀번호 재설정 */
   RESET: {
      INDEX: '/reset/idpw',
      ID: '/reset/id',
      PW_VERIFY: '/reset/pw/verify',
      PW: '/reset/pw',
   },
   /** 총학생회 */
   COUNCIL: {
      /** 인사말 */
      GREETING: '/greeting',
      /** 조직도 */
      ORGANIZATION: '/organization',
      /** 오시는 길 */
      LOCATION: '/location',
      /** 모집요강 */
      RECRUITMENT: '/recruitment',
   },
   /** 대여물품 */
   RENTAL: {
      /** 루트 */
      ROOT: '/rental',
      /** 상세 품목 조회 */
      ITEM: '/rental/:id',
   },
   PETITION: {
      /** 청원 루트 */
      ROOT: '/petition',
      /** 청원 상세보기 */
      ID: '/petition/:id',
      /** 청원 글쓰기 */
      POST: '/petition/post',
   },
   /** 공지사항 */
   NOTICE: {
      /** 루트 */
      ROOT: '/notice',
      /** 청원 글 작성 */
      POST: '/notice/post',
      /** 공지 상세보기 */
      ID: '/notice/:id',
   },
   /** 회의록 */
   CONFERENCE: {
      /** 루트 */
      ROOT: '/conference',
   },
   /** 회칙 */
   RULE: {
      /** 루트 */
      ROOT: '/rule',
   },
   /** 제휴사업 */
   BUSINESS: {
      /** 루트 */
      ROOT: '/business',
      /** 상세보기 */
      ID: '/business/:id',
      /** 음식 */
      FOOD: '/business/food',
      /** 문화 */
      CULTURE: '/business/culture',
      /** 헬스 */
      HEALTH: '/business/health',
      /** 기타 */
      ETC: '/business/etc',
   },
};
