import Board from 'components/common/board';
import Text from 'components/ui/text';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ICell {
   id: string;
   title: string;
   author: string;
   body: string;
   createdAt: string;
   files: string;
   views: string;
   tag: string;
   status?: string;
   expiresAt?: string;
   agreeCount?: string;
   blinded: string;
}

export default function BoardLayout({ api }: { api: string }) {
   const { list, isLoading, bottom } = useInfiniteScroll<ICell>(api);
   const [isEmpty, setIsEmpty] = React.useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      setIsEmpty(list && list.length === 0);
   }, [list]);
   return (
      <>
         <Board>
            {isEmpty ? (
               <Board.NoData />
            ) : (
               list?.map(({ id, status, title, createdAt, agreeCount, expiresAt }) => (
                  <Board.Cell
                     key={id}
                     onClick={() => {
                        navigate(`${id}`);
                     }}
                  >
                     {status && <Text length={4}>{status}</Text>}
                     <Text length={4}>{title}</Text>
                     <Text length={4}>{createdAt.slice(0, 10).replaceAll('-', '.')}</Text>
                     {agreeCount && <Text length={4}>{agreeCount}</Text>}
                     {expiresAt && <Text length={4}>{expiresAt}</Text>}
                  </Board.Cell>
               ))
            )}
            {!isLoading && !isEmpty && <div ref={bottom} />}
         </Board>
      </>
   );
}
