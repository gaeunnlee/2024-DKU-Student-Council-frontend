import Title, { Date } from 'components/ui/text/board';
import { API_PATH, CONSTANTS } from 'constants/api';
import BoardLayout, { IBoardList } from 'layouts/BoardLayout';
import React from 'react';

export default function ConferenceBoard() {
   const Cell = ({ data }: { data: IBoardList }) => (
      <div className='flex gap-2'>
         <Title content={data.title} className='grow text-center truncate' />
         <Date content={data.createdAt} />
      </div>
   );
   return (
      <BoardLayout
         api={CONSTANTS.SERVER_URL + API_PATH.POST.CONFERENCE.ROOT}
         setCell={(data: IBoardList) => <Cell data={data} />}
         isFileLink={true}
      />
   );
}
