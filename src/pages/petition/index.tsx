import axios from 'axios';
import { API_PATH } from 'constant';
import { useEffectOnce } from 'hooks/useEffectOnce';
import React, { useState } from 'react';

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
   const [board, setBoard] = useState<IPetitionPost[]>([]);

   /* 청원게시판 글 목록 불러오기 */
   useEffectOnce(() => {
      fetchBoard();
   });

   const fetchBoard = () => {
      axios.get(API_PATH.POST.PETITON).then(({ data }) => {
         setBoard(data.content);
         console.log(board);
      });
   };

   return (
      <>
         <ul className='flex flex-col gap-10'>
            {board.map(({ id, status, title, agreeCount, expiresAt }) => {
               return (
                  <li key={id} className='grid grid-cols-5'>
                     <span>{status}</span>
                     <span>{title}</span>
                     <span>{agreeCount}</span>
                     <span>{expiresAt}</span>
                  </li>
               );
            })}
         </ul>
      </>
   );
}
