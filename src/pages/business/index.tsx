import Board from '@components/ui/board';
import IntersectionBox from '@components/ui/box/intersectionBox';
import ItemList from '@components/ui/item-list';
import { Spinner } from '@components/ui/spinner/indext';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { useGetCoalitionList } from '@hooks/api/coalition/useGetCoalitionList';
import { CoalitionContentResponse } from '@hooks/api/coalition/useGetCoalitionList';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import { useLayout } from '@hooks/useLayout';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { ROUTES } from '@/constants/route';
import { CoalitionType } from '@/types/coalition';

export default function BusinessBoard() {
   const category = useParams();
   const { setLayout } = useLayout();
   const navigate = useNavigate();
   const categoryType = category.category?.toUpperCase();

   const {
      data: coalition,
      refetch,
      fetchNextPage,
      isFetchingNextPage,
   } = useGetCoalitionList(categoryType as CoalitionType);
   const intersectionRef = useInfiniteScroll(fetchNextPage);

   useEffect(() => {
      refetch();
   }, [category, refetch]);

   useEffect(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.BUSINESS.HEAD,
         subHeadingText:
            Object.getOwnPropertyDescriptor(HEADING_TEXT.BUSINESS.SUBHEAD, categoryType as CoalitionType)
               ?.value ?? '',
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
         dropDown: HEADING_STYLE.BUSINESS.DROPDOWN,
      });
   }, [category]);

   const goToBusinessDetail = (item: CoalitionContentResponse) => {
      navigate(ROUTES.BUSINESS.DETAIL(category.category?.toLowerCase() as string, item.id.toString()), {
         state: item,
      });
   };

   return (
      <Board>
         {coalition?.pages.map((page) =>
            page.content.map((item) => (
               <Board.Cell key={item.id} onClick={() => goToBusinessDetail(item)}>
                  <ItemList content={item} />
               </Board.Cell>
            )),
         )}
         <IntersectionBox ref={intersectionRef} />
         {isFetchingNextPage && <Spinner />}
      </Board>
   );
}
