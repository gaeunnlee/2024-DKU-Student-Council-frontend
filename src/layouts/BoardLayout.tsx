import Board from 'components/common/board';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface IBoardList {
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

export default function BoardLayout({
   api,
   setCell,
}: {
   api: string;
   setCell: (data: IBoardList) => JSX.Element;
}) {
   const { list, isLoading, bottom } = useInfiniteScroll<IBoardList>(api);
   const [isEmpty, setIsEmpty] = React.useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      !list && setIsEmpty(true);
   }, [list]);

   if (isEmpty) {
      return (
         <Board>
            <Board.NoData />
         </Board>
      );
   }

   return (
      <Board>
         {list?.map((data) => (
            <Board.Cell
               key={data.id}
               onClick={() => {
                  navigate(`${data.id}`);
               }}
            >
               {setCell(data)}
            </Board.Cell>
         ))}
         {!isLoading && !isEmpty && <div ref={bottom} />}
      </Board>
   );
}
