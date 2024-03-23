import { API_PATH } from '@constants/api';
import { get } from '@libs/api';
import { useInfiniteQuery } from '@tanstack/react-query';

import { PageResponse, ContentResponse } from '@/types/page';

interface GetNoticeListResponse extends PageResponse {
   content: ContentResponse[];
}

export const useGetNoticeList = () => {
   return useInfiniteQuery<GetNoticeListResponse>({
      queryKey: ['getNoticeList'],
      queryFn: ({ pageParam = 0 }) => get(API_PATH.NOTICE.ROOT + `?page=${pageParam}`),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
         const nextPage = allPages.length + 1;
         return lastPage.hasNext ? nextPage : undefined;
      },
   });
};
