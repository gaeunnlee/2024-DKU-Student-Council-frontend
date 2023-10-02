import axios from 'axios';
import { API_PATH } from 'constant';
import React, { useEffect, useRef, useState } from 'react';

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
   const [page, setPage] = useState(0);
   const [loading, setLoading] = useState(true);
   const target = useRef<HTMLDivElement>(null);

   const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
         setPage((prevPage) => prevPage + 1);
      }
   };

   useEffect(() => {
      const observer = new IntersectionObserver(callback);
      if (target.current) {
         observer.observe(target.current);
      }
      return () => observer.disconnect();
   });

   const fetchBoard = (boardPage: number) => {
      setLoading(true);
      axios.get(`${API_PATH.POST.PETITON}?page=${boardPage}&size=10&sort=id,desc`).then(({ data }) => {
         setBoard((prev) => {
            return page === 0 ? data.content : prev.concat(data.content);
         });
         setLoading(data.content.length === 0);
      });
   };

   useEffect(() => {
      fetchBoard(page);
   }, [page]);

   return (
      <>
         <ul className='flex flex-col gap-20'>
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
         {!loading && <div ref={target} />}
      </>
   );
}
