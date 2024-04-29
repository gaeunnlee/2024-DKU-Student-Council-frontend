import Board from '@components/ui/board';
import { Skeleton } from '@components/ui/skeleton/base';
import React from 'react';

export default function NoticeSkeleton() {
   const noticeList = Array.from({ length: 5 }, (_, index) => (
      <Board.Cell key={index}>
         <div className='flex gap-4 overflow-hidden px-1'>
            <Skeleton className='w-[40%] h-[100px] overflow-hidden' />
            <div className='w-[60%] h-[100px] flex flex-col gap-3 justify-center'>
               <Skeleton className='w-12' />
               <Skeleton className='w-4' />
            </div>
         </div>
      </Board.Cell>
   ));
   return (
      <Board>
         {noticeList}
      </Board>
   );
}
