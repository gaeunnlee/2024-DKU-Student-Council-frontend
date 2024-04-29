import Board from '@components/ui/board';
import IntersectionBox from '@components/ui/box/intersectionBox';
import { Spinner } from '@components/ui/spinner/indext';
import { ROUTES } from '@constants/route';
import { useGetPetition } from '@hooks/api/petition/useGetPetiition';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import { getDaysBetween, getPetitionStatus } from '@pages/petition';
import React from 'react';
import { useNavigate } from 'react-router-dom';



export default function PetitionList() {
   const navigate = useNavigate();
   const { data: petition, fetchNextPage, isFetchingNextPage } = useGetPetition();
   const intersectionRef = useInfiniteScroll(fetchNextPage);

   const goToPetitionDetail = (itemId: number) => {
      navigate(ROUTES.PETITION.ID(itemId.toString()));
   };
   return (
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
   );
}