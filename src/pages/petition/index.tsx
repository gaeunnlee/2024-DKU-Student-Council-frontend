import { API_PATH } from 'constant';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import React from 'react';

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
   const { list, isLoading, bottom } = useInfiniteScroll<IPetitionPost>(API_PATH.POST.PETITON);

   return (
      <>
         <ul className='flex flex-col gap-20'>
            {list.map(({ id, status, title, agreeCount, expiresAt }) => {
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
         {!isLoading && <div ref={bottom} />}
      </>
   );
}
