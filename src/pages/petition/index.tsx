import Text from 'components/ui/text';
import { API_PATH, CONSTANTS } from 'constant';
import BoardLayout, { IBoardList } from 'layouts/BoardLayout';
import React from 'react';

export const getDaysBetween = (expiresAt: string) => {
   const startDate = new Date();
   const endDate = new Date(expiresAt);
   const result = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
   return result;
};

export const getPetitionStatus = (status: string) => {
   const statusEng = ['WAITING', 'ACTIVE', 'ANSWERED', 'EXPIRED'];
   const statusKor = ['대기', '진행중', '완료', '종료'];
   const resultIndex = statusEng.findIndex((keyword) => status === keyword);
   return statusKor[resultIndex];
};

export default function PetitionBoard() {
   const setCell = (data: IBoardList) => (
      <div className='flex justify-between leading-9 px-2 gap-3 whitespace-nowrap'>
         <Text length={4}>{getPetitionStatus(data.status!)}</Text>
         <Text length={4} className='text-ellipsis overflow-hidden'>
            {data.title}
         </Text>
         <Text length={4}>{`D-${getDaysBetween(data.expiresAt!)}`}</Text>
      </div>
   );

   return <BoardLayout api={CONSTANTS.SERVER_URL + API_PATH.POST.PETITION.ROOT} setCell={setCell} />;
}
