export const ROUTES = {
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
   PETITION: {
      /** 청원 루트 */
      ROOT: '/petition',
      /** 청원 상세보기 */
      ID: (id: string) => `/petition/${id}`,
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
      ID: (id: string) => `/notice/${id}`,
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
      DETAIL: (category: string, id: string) => `/business/${category}/${id}`,
      /** 음식 */
      CATEGORY: (category: string) => `/business/${category}`,
   },
} as const;
