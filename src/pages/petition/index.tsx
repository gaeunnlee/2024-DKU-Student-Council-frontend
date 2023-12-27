import Text from 'components/ui/text';
import { API_PATH, CONSTANTS } from 'constant';
import BoardLayout, { IBoardList } from 'layouts/BoardLayout';
import React from 'react';

export default function PetitionBoard() {
   const cell = (data: IBoardList) => (
      <div className='flex justify-between leading-9 px-8'>
         <Text length={4}>{data.status}</Text>
         <Text length={4}>{data.title}</Text>
         <Text length={4}>{data.expiresAt}</Text>
      </div>
   );
   return <BoardLayout api={CONSTANTS.SERVER_URL + API_PATH.POST.PETITION} cell={cell} />;
}
