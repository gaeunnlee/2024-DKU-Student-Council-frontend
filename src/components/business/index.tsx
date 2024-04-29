import Board from '@components/ui/board';
import IntersectionBox from '@components/ui/box/intersectionBox';
import ItemList from '@components/ui/item-list';
import { Spinner } from '@components/ui/spinner/indext';
import { ROUTES } from '@constants/route';
import { CoalitionContentResponse, useGetCoalitionList } from '@hooks/api/coalition/useGetCoalitionList';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CoalitionType } from '@/types/coalition';

export default function BusinessList({categoryType}: {categoryType: string}) {
   const navigate = useNavigate();

   const {
      data: coalition,
      refetch,
      fetchNextPage,
      isFetchingNextPage,
   } = useGetCoalitionList(categoryType as CoalitionType);
   const intersectionRef = useInfiniteScroll(fetchNextPage);

   useEffect(() => {
      refetch();
   }, [categoryType, refetch]);


   const goToBusinessDetail = (item: CoalitionContentResponse) => {
      navigate(ROUTES.BUSINESS.DETAIL(categoryType.toLowerCase() as string, item.id.toString()), {
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