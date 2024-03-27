import Board from '@components/ui/board';
import IntersectionBox from '@components/ui/box/intersectionBox';
import CouncilSkeleton from '@components/ui/skeleton/council';
import { Spinner } from '@components/ui/spinner/indext';
import { Date } from '@components/ui/text/board';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { useGetConference } from '@hooks/api/conference/useGetConference';
import { ConferenceContentResponse } from '@hooks/api/conference/useGetConference';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import { useLayout } from '@hooks/useLayout';
import React, { Suspense } from 'react';

export default function ConferenceBoard() {
   const { setLayout } = useLayout();
   const { data: conference, fetchNextPage, isFetchingNextPage } = useGetConference();
   const intersectionRef = useInfiniteScroll(fetchNextPage);

   useEffectOnce(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.COUNCIL.HEAD,
         subHeadingText: HEADING_TEXT.CONFERENCE.SUBHEAD,
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
         dropDown: HEADING_STYLE.COUNCIL.DROPDOWN,
      });
   });

   const openFile = (item: ConferenceContentResponse) => {
      window.open(item.files[0].url);
   };

   return (
      <Suspense fallback={<CouncilSkeleton />}>
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
      </Suspense>
   );
}
