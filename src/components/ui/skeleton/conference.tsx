import Board from '@components/ui/board';
import { Skeleton } from '@components/ui/skeleton/base';
import React from 'react';

export default function ConferenceSkeleton() {
   const skeletonItems = Array.from({ length: 7 }, (_, index) => (
      <li key={index}>
         <Skeleton className="w-full h-[44px]" />
      </li>
   ));
   return (
      <Board>
         {skeletonItems}
      </Board>
   );
}
