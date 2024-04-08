import { API_PATH, QUERY_STRING } from '@constants/api';
import { get } from '@libs/api';
import { useInfiniteQuery } from '@tanstack/react-query';

import { PageResponse, ContentResponse } from '@/types/page';

export interface RuleContentResponse extends ContentResponse {
   department: string;
}

interface RuleResponse extends PageResponse {
   content: RuleContentResponse[];
}

export const useGetRule = () => {
   return useInfiniteQuery<RuleResponse>({
      queryKey: ['getRule'],
      queryFn: ({ pageParam = 0 }) => get(API_PATH.RULE.ROOT + `?${QUERY_STRING.PAGE}=${pageParam}`),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
         const nextPage = allPages.length + 1;
         return lastPage.hasNext ? nextPage : undefined;
      },
   });
};
