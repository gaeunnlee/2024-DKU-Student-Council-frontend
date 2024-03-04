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
   files: [{ id: number; url: string; originalName: string; mimeType: string }];
   views: string;
   tag: string;
   status?: string;
   expiresAt?: string;
   agreeCount?: string;
   blinded: string;
   images?: [{ id: number; url: string; originalName: string; mimeType: string; thumbnailUrl: string }];
}

export default function BoardLayout({
   api,
   setCell,
   isFileLink, // 페이지 이동 없이 파일 링크만 새탭에서 여는 경우
}: {
   api: string;
   setCell: (data: IBoardList) => JSX.Element;
   isFileLink?: boolean;
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
                  isFileLink ? window.open(data.files[0].url) : navigate(`${data.id}`);
               }}
            >
               {setCell(data)}
            </Board.Cell>
         ))}
         {!isLoading && !isEmpty && <div ref={bottom} />}
      </Board>
   );
}
