import { TOption } from 'components/ui/selector';
import { ROUTES } from 'constants/route';

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
