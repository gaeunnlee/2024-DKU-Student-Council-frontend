import Board from 'components/common/board';
import Text from 'components/ui/text';
import { API_PATH } from 'constant';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import React, { useEffect } from 'react';

interface IPetitionPost {
   id: string;
   title: string;
   author: string;
   body: string;
   createdAt: string;
   files: string;
   views: string;
   tag: string;
   status: string;
   expiresAt: string;
   agreeCount: string;
   blinded: string;
}

export default function PetitionBoard() {
   const { list, isLoading, bottom } = useInfiniteScroll<IPetitionPost>(
      'https://dev.dkustu.com/api/' + API_PATH.POST.PETITION,
   );
   const [isEmpty, setIsEmpty] = React.useState(false);

   useEffect(() => {
      setIsEmpty(list && list.length === 0);
   }, [list]);

   return (
      <>
         <Board>
            {isEmpty ? (
               <Board.NoData />
            ) : (
               list?.map(({ id, status, title, agreeCount, expiresAt }) => (
                  <Board.Cell key={id}>
                     <Text length={4}>{status}</Text>
                     <Text length={4}>{title}</Text>
                     <Text length={4}>{agreeCount}</Text>
                     <Text length={4}>{expiresAt}</Text>
                  </Board.Cell>
               ))
            )}
            {!isLoading && !isEmpty && <div ref={bottom} />}
         </Board>
      </>
   );
}
