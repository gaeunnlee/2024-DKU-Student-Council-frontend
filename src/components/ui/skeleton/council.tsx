import Board from '@components/ui/board';
import { Skeleton } from '@components/ui/skeleton/base';
import React from 'react';

export default function CouncilSkeleton() {
   return (
      <Board>
         <li>
            <Skeleton className='w-full h-5' />
         </li>
         <li>
            <Skeleton className='w-full h-5' />
         </li>
         <li>
            <Skeleton className='w-full h-5' />
         </li>
         <li>
            <Skeleton className='w-full h-5' />
         </li>
         <li>
            <Skeleton className='w-full h-5' />
         </li>
      </Board>
   );
}
