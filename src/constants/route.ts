export const ROUTES = {
   /** 메인 화면 */
   MAIN: '/',
   /** 사이드메뉴 */
   MENU: '/menu',
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
      /** 동의 */
      TERMS: '/signup/terms',
      /** 학생 인증 */
      VERIFY: '/signup/verify',
      /** 회원 정보 입력 */
      INFO: '/signup/info',
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
};
