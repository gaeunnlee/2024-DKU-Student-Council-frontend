import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useInfiniteScroll = <T>(api: string) => {
   const [list, setList] = useState<T[]>([]);
   const [page, setPage] = useState(0);
   const [fetchSuccess, setFetchSuccess] = useState(false);
   const [isLoading, setIsLoading] = useState(true);
   const bottom = useRef<HTMLDivElement>(null);
   const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
         setPage((prevPage) => prevPage + 1);
      }
   };

   useEffect(() => {
      const observer = new IntersectionObserver(callback);
      if (bottom.current) {
         observer.observe(bottom.current);
      }
      return () => observer.disconnect();
   });

   const fetchList = useCallback(
      async (boardPage: number) => {
         setFetchSuccess(false);
         try {
            const { data } = await axios.get(`${api}?page=${boardPage}&size=10&sort=id,desc`);
            if (data.content.length !== 0) {
               setList((prev) => {
                  return page === 0 ? data.content : prev.concat(data.content);
               });
               setFetchSuccess(true);
            }
         } catch (error) {
            alert(error);
         }
      },
      [api, page],
   );

   // fetchList 성공시 isLoading false
   useEffect(() => {
      fetchSuccess && setIsLoading(list.length === 0);
   }, [fetchSuccess, list.length]);

   useEffect(() => {
      setIsLoading(true);
      fetchList(page);
   }, [fetchList, page]);

   return {
      list,
      isLoading,
      bottom,
   };
};
