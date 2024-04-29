import Board from '@components/ui/board';
import IntersectionBox from '@components/ui/box/intersectionBox';
import { Spinner } from '@components/ui/spinner/indext';
import { Date } from '@components/ui/text/board';
import { useGetRule } from '@hooks/api/rule/useGetRule';
import { RuleContentResponse } from '@hooks/api/rule/useGetRule';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import React from 'react';

export default function RuleList() {
   const { data: rule, fetchNextPage, isFetchingNextPage } = useGetRule();

   const intersectionRef = useInfiniteScroll(fetchNextPage);

   const openFile = (item: RuleContentResponse) => {
      window.open(item.files[0].url);
   };

   return (
      <Board>
         {rule?.pages.map((page) =>
            page.content.map((item) => (
               <Board.Cell key={item.id} onClick={() => openFile(item)}>
                  <div className='flex gap-2 p-3'>
                     <p className='grow text-center truncate'>{item.title}</p>
                     <Date date={item.createdAt} />
                  </div>
               </Board.Cell>
            )),
         )}
         <IntersectionBox ref={intersectionRef} />
         {isFetchingNextPage && <Spinner />}
      </Board>
   );
}