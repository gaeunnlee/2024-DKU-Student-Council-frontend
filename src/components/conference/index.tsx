import Board from '@components/ui/board';
import IntersectionBox from '@components/ui/box/intersectionBox';
import { Spinner } from '@components/ui/spinner/indext';
import { Date } from '@components/ui/text/board';
import { useGetConference } from '@hooks/api/conference/useGetConference';
import { ConferenceContentResponse } from '@hooks/api/conference/useGetConference';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import React from 'react';

export default function ConferenceList() {
   const { data: conference, fetchNextPage, isFetchingNextPage } = useGetConference();
   const intersectionRef = useInfiniteScroll(fetchNextPage);

   const openFile = (item: ConferenceContentResponse) => {
      window.open(item.files[0].url);
   };
   return (
      <Board>
         {conference?.pages.map((page) =>
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