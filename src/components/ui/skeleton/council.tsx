import Board from '@components/ui/board';
import { Skeleton } from '@components/ui/skeleton/base';
import React from 'react';

export default function CouncilSkeleton() {
   const skeletonItems = Array.from({ length: 6 }, (_, index) => (
      <li key={index}>
         <Skeleton className="w-full h-[60px]" />
      </li>
   ));
   return (
      <Board>
         {skeletonItems}
      </Board>
   );
}
