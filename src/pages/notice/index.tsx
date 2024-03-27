import Board from '@components/ui/board';
import IntersectionBox from '@components/ui/box/intersectionBox';
import ItemList from '@components/ui/item-list';
import { Spinner } from '@components/ui/spinner/indext';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { ROUTES } from '@constants/route';
import { useGetNoticeList } from '@hooks/api/notice/useGetNoticeList';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import { useLayout } from '@hooks/useLayout';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NoticeBoard() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.COUNCIL.HEAD,
         subHeadingText: HEADING_TEXT.NOTICE.SUBHEAD,
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
         dropDown: HEADING_STYLE.COUNCIL.DROPDOWN,
      });
   });

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
                  <ItemList content={item} />
               </Board.Cell>
            )),
         )}
         <IntersectionBox ref={intersectionRef} />
         {isFetchingNextPage && <Spinner />}
      </Board>
   );
}
