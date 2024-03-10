import { TOption } from 'components/ui/selector';
import { ROUTES } from 'constants/route';

export const HEADING_TEXT = {
   MAIN: {
      HEAD: 'DANKOOK UNIVERSITY',
      SUBHEAD: 'DANKOOK UNIV STUDENT COUNCIL',
   },
   LOGIN: {
      HEAD: 'Login',
      SUBHEAD: '단국대학교 총학생회 로그인',
   },
   COUNCIL: {
      HEAD: '총학생회',
   },
   CONFERENCE: {
      SUBHEAD: '회의록',
   },
   NOTICE: {
      SUBHEAD: '공지',
   },
   PETITION: {
      HEAD: '청원게시판',
   },
   RESET_ID_PW: {
      SUBHEAD: 'ID찾기 PW 재설정',
   },
   RULE: {
      SUBHEAD: '회칙',
   },
   ORGANIZATION: {
      SUBHEAD: '조직도',
   },
   LOCATION: {
      SUBHEAD: '오시는 길',
   },
   GREETING: {
      SUBHEAD: '인사말',
   },
   RECRUIT: {
      HEAD: '부원모집',
      SUBHEAD: '모집요강',
   },
   BUSINESS: {
      HEAD: '제휴사업',
      SUBHEAD: {
         FOOD: '음식',
         CULTURE: '문화',
         HEALTH: '헬스',
         ETC: '기타',
      },
   },
};

export const COUNCIL_LIST: TOption[] = [
   { text: '공지', path: ROUTES.NOTICE.ROOT },
   { text: '회의록', path: ROUTES.CONFERENCE.ROOT },
   { text: '회칙', path: ROUTES.RULE.ROOT },
   { text: '인사말', path: ROUTES.COUNCIL.GREETING },
   { text: '조직도', path: ROUTES.COUNCIL.ORGANIZATION },
   { text: '오시는 길', path: ROUTES.COUNCIL.LOCATION },
];

export const BUSINESS_LIST: TOption[] = [
   { text: '음식', path: `${ROUTES.BUSINESS.ROOT}/food` },
   { text: '문화', path: `${ROUTES.BUSINESS.ROOT}/culture` },
   { text: '헬스', path: `${ROUTES.BUSINESS.ROOT}/health` },
   { text: '기타', path: `${ROUTES.BUSINESS.ROOT}/etc` },
];

export const HEADING_STYLE = {
   MAIN: {
      HEAD: 'mt-[41px] mb-[3px] text-center',
      SUBHEAD: 'text-center font-normal text-[11px] mb-[61px]',
   },
   LOGIN: {
      HEAD: 'mt-7 mb-[19px] text-center',
      SUBHEAD: 'text-center mb-[51px] font-extrabold',
   },
   COUNCIL: {
      HEAD: 'ml-[29px] mt-[38px] mb-2',
      SUBHEAD: 'text-xl ml-[29px] mb-[30px] font-extrabold',
      DROPDOWN: COUNCIL_LIST,
   },
   RESET: {
      HEAD: 'mt-[15px] mb-[19px] text-center',
      SUBHEAD: 'text-center mb-[55px] font-extrabold',
   },
   BUSINESS: {
      DROPDOWN: BUSINESS_LIST,
   },
};
