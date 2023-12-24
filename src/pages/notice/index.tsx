import { API_PATH, CONSTANTS } from 'constant';
import BoardLayout from 'layouts/BoardLayout';
import React from 'react';

export default function NoticeBoard() {
   return <BoardLayout api={CONSTANTS.SERVER_URL + API_PATH.POST.NOTICE.ROOT} />;
}
