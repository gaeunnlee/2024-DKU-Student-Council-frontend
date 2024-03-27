interface ErrorMessage {
   HEADING: string;
   BUTTON: string;
}

export const HTTP_STATUS_CODE = {
   SUCCESS: 200,
   NO_CONTENT: 204,
   BAD_REQUEST: 400,
   UNAUTHORIZED: 403,
   NOT_FOUND: 404,
   CONTENT_TOO_LARGE: 413,
   INTERNAL_SERVER_ERROR: 500,
} as const;

export const HTTP_ERROR_MESSAGE: Record<number, ErrorMessage> = {
   [HTTP_STATUS_CODE.NOT_FOUND]: {
      HEADING: '잘못된 주소입니다.',
      BUTTON: '홈으로 가기',
   },
   [HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR]: {
      HEADING: '현재 페이지를 표시할 수 없습니다.',
      BUTTON: '새로고침',
   },
   [HTTP_STATUS_CODE.BAD_REQUEST]: {
      HEADING: '잘못된 요청입니다.',
      BUTTON: '홈으로 가기',
   },
   [HTTP_STATUS_CODE.UNAUTHORIZED]: {
      HEADING: '권한이 존재하지 않습니다.',
      BUTTON: '홈으로 가기',
   },
};
