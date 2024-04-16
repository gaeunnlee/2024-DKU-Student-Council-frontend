import { Gnb, GnbGoBack, GnbTitle } from '@components/common/gnb';
import { GnhTitle } from '@components/common/gnh';
import { ContentSection, HeaderSection } from '@components/layouts';
import Board from '@components/ui/board';
import IntersectionBox from '@components/ui/box/intersectionBox';
import ItemList from '@components/ui/item-list';
import Selector from '@components/ui/selector';
import { Spinner } from '@components/ui/spinner/indext';
import { HEADING_TEXT, BUSINESS_LIST } from '@constants/heading';
import { ROUTES } from '@constants/route';
import { useGetCoalitionList } from '@hooks/api/coalition/useGetCoalitionList';
import { CoalitionContentResponse } from '@hooks/api/coalition/useGetCoalitionList';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import { CoalitionType } from '@/types/coalition';


export default function BusinessBoard() {
   const category = useParams();
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

   const goToBusinessDetail = (item: CoalitionContentResponse) => {
      navigate(ROUTES.BUSINESS.DETAIL(category.category?.toLowerCase() as string, item.id.toString()), {
         state: item,
      });
   };

   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
            <GnbTitle>{HEADING_TEXT.COUNCIL.HEAD}</GnbTitle>
         </Gnb>
         <HeaderSection className="pt-[38px] pl-[29px] pb-[30px]">
            <GnhTitle className="mb-2">{HEADING_TEXT.BUSINESS.HEAD}</GnhTitle>
            <Selector list={BUSINESS_LIST} subHeadingText={Object.getOwnPropertyDescriptor(HEADING_TEXT.BUSINESS.SUBHEAD, categoryType as CoalitionType)
               ?.value ?? ''} />
         </HeaderSection>
         <ContentSection showNav={true}>
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
         </ContentSection>
      </React.Fragment>
   );
}
