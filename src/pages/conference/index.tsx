import { API_PATH, CONSTANTS } from 'constant';
import BoardLayout, { IBoardList } from 'layouts/BoardLayout';
import React from 'react';

export default function ConferenceBoard() {
   const setCell = (data: IBoardList) => (
      <>
         {data.title}
         {data.createdAt}
      </>
   );
   return <BoardLayout api={CONSTANTS.SERVER_URL + API_PATH.POST.CONFERENCE.ROOT} setCell={setCell} />;
}
