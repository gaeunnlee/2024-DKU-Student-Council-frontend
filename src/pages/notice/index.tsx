import Title, { Date } from 'components/ui/text/board';
import { API_PATH, CONSTANTS } from 'constant';
import BoardLayout, { IBoardList } from 'layouts/BoardLayout';
import React from 'react';

export default function NoticeBoard() {
   const cell = (data: IBoardList) => (
      <>
         <Title content={data.title} />
         <Date content={data.createdAt} />
      </>
   );

   return <BoardLayout api={CONSTANTS.SERVER_URL + API_PATH.POST.NOTICE.ROOT} cell={cell} />;
}
