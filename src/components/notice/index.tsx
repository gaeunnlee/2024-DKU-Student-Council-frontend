import Board from '@components/ui/board';
import IntersectionBox from '@components/ui/box/intersectionBox';
import ItemList from '@components/ui/item-list';
import { Spinner } from '@components/ui/spinner/indext';
import { ROUTES } from '@constants/route';
import { useGetNoticeList } from '@hooks/api/notice/useGetNoticeList';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';


export default function NoticeList() {

   const navigate = useNavigate();
   const { data: notice, fetchNextPage, isFetchingNextPage } = useGetNoticeList();
   const intersectionRef = useInfiniteScroll(fetchNextPage);

   const goToNoticeDetail = (itemId: number) => {
      const noticeId = itemId.toString();
      navigate(ROUTES.NOTICE.ID(noticeId));
   };

   return (
      <Board>
         {notice?.pages.map((page) =>
            page.content.map((item) => (
               <Board.Cell key={item.id} onClick={() => goToNoticeDetail(item.id)}>
                  <Suspense fallback={<div>loading...</div>}>
                     <ItemList content={item} />
                  </Suspense>
               </Board.Cell>
            )),
         )}
         <IntersectionBox ref={intersectionRef} />
         {isFetchingNextPage && <Spinner />}
      </Board>
   );
}