import Title, { Date } from 'components/ui/text/board';
import { API_PATH, CONSTANTS } from 'constants/api';
import BoardLayout, { IBoardList } from 'layouts/BoardLayout';
import React from 'react';

export default function NoticeBoard() {
   const Cell = ({ data }: { data: IBoardList }) => (
      <>
         <Title content={data.title} className='text-xl font-bold' />
         <Date content={data.createdAt} className='text-gray-400' />
      </>
   );

   return (
      <BoardLayout
         api={CONSTANTS.SERVER_URL + API_PATH.POST.NOTICE.ROOT}
         setCell={(data: IBoardList) => <Cell data={data} />}
      />
   );
}
