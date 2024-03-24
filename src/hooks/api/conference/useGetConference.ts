import { API_PATH, QUERY_STRING } from '@constants/api';
import { get } from '@libs/api';
import { useInfiniteQuery } from '@tanstack/react-query';

import { PageResponse, ContentResponse } from '@/types/page';

export interface ConferenceContentResponse extends ContentResponse {
   round: number;
   date: string;
}

interface ConferenceResponse extends PageResponse {
   content: ConferenceContentResponse[];
}

export const useGetConference = () => {
   return useInfiniteQuery<ConferenceResponse>({
      queryKey: ['getConference'],
      queryFn: ({ pageParam = 0 }) => get(API_PATH.CONFERENCE.ROOT + `?${QUERY_STRING.PAGE}=${pageParam}`),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
         const nextPage = allPages.length + 1;
         return lastPage.hasNext ? nextPage : undefined;
      },
   });
};
