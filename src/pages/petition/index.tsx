import Board from '@components/ui/board';
import IntersectionBox from '@components/ui/box/intersectionBox';
import FloatingButton from '@components/ui/button/FloatingButton';
import { Spinner } from '@components/ui/spinner/indext';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { ROUTES } from '@constants/route';
import { useGetPetition } from '@hooks/api/petition/useGetPetiition';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import { useLayout } from '@hooks/useLayout';
import { isLoggedIn } from '@utils/token';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PetitionType } from '@/types/petition';

export const getDaysBetween = (expiresAt: string) => {
   const startDate = new Date();
   const endDate = new Date(expiresAt);
   const result = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
   return result;
};

export const getPetitionStatus = (status: PetitionType) => {
   const statusEng: PetitionType[] = [
      PetitionType.WAITING,
      PetitionType.ACTIVE,
      PetitionType.ANSWERED,
      PetitionType.EXPIRED,
   ];
   const statusKor = ['대기', '진행중', '완료', '종료'];
   const resultIndex = statusEng.findIndex((keyword) => status == keyword);
   return statusKor[resultIndex];
};

export default function PetitionBoard() {
   const navigate = useNavigate();
   const { setLayout } = useLayout();
   const { data: petition, fetchNextPage, isFetchingNextPage } = useGetPetition();
   const intersectionRef = useInfiniteScroll(fetchNextPage);

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.PETITION.HEAD,
         headingStyle: `${HEADING_STYLE.COUNCIL.HEAD} mb-[30px]`,
         rounded: true,
         dropDown: HEADING_STYLE.COUNCIL.DROPDOWN,
      });
   });

   const goToPetitionDetail = (itemId: number) => {
      navigate(ROUTES.PETITION.ID(itemId.toString()));
   };

   return (
      <React.Fragment>
         <Board>
            {petition?.pages.map((page) =>
               page.content.map((item) => (
                  <Board.Cell key={item.id} onClick={() => goToPetitionDetail(item.id)}>
                     <div className=' py-3 flex justify-between leading-9 px-6 gap-3 whitespace-nowrap'>
                        <p>{getPetitionStatus(item.status)}</p>
                        <p className='text-ellipsis overflow-hidden'>{item.title}</p>
                        <p>
                           {getDaysBetween(item.expiresAt!) > 0
                              ? `D-${getDaysBetween(item.expiresAt!)}`
                              : '만료'}
                        </p>
                     </div>
                  </Board.Cell>
               )),
            )}
            <IntersectionBox ref={intersectionRef} />
            {isFetchingNextPage && <Spinner />}
         </Board>
         {isLoggedIn && (
            <FloatingButton
               event={() => {
                  navigate(ROUTES.PETITION.POST);
               }}
            >
               <p className='text-white'>Upload</p>
            </FloatingButton>
         )}
      </React.Fragment>
   );
}
