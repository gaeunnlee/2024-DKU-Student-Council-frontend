import { API_PATH } from '@constants/api';
import { get } from '@libs/api';
import { useInfiniteQuery } from '@tanstack/react-query';

import { PageResponse, ContentResponse } from '@/types/page';

enum CoalitionType {
   HEALTH,
   FOOD,
   CULTURE,
   ETC,
}

interface CoalitionContentResponse extends ContentResponse {
   coalitionType: CoalitionType;
}

interface CoalitionResponse extends PageResponse {
   content: CoalitionContentResponse[];
}

export const useGetCoalitionList = (coalition: CoalitionType) => {
   return useInfiniteQuery<CoalitionResponse>({
      queryKey: ['getCoalitionList'],
      queryFn: ({ pageParam = 0 }) =>
         get(API_PATH.COALITION.ROOT + `?coalitionType=${coalition}&page=${pageParam}`),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
         const nextPage = allPages.length + 1;
         return lastPage.hasNext ? nextPage : undefined;
      },
   });
};
