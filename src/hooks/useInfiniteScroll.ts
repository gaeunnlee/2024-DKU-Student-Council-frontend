import axios from 'axios';
import { CONSTANTS } from 'constants/api';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
   const { pathname } = useLocation();

   useEffect(() => {
      setPage(0);
      setList([]);
   }, [pathname]);

   useEffect(() => {
      const observer = new IntersectionObserver(callback);
      if (bottom.current) {
         observer.observe(bottom.current);
      }
      return () => observer.disconnect();
   });

   const fetchList = useCallback(
      async (boardPage: number) => {
         if (api.length > 0) {
            const API =
               api.indexOf('?') !== -1
                  ? `${CONSTANTS.SERVER_URL}/${api}&page=${boardPage}&size=10&sort=id,desc`
                  : `${CONSTANTS.SERVER_URL}/${api}?page=${boardPage}&size=10&sort=id,desc`;
            setFetchSuccess(false);
            try {
               const { data } = await axios.get(API);
               if (data.content.length !== 0) {
                  setList((prev) => {
                     return page === 0 ? data.content : prev.concat(data.content);
                  });
                  setFetchSuccess(true);
               }
            } catch (error) {
               alert(error);
            }
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
      setList,
      isLoading,
      bottom,
   };
};
