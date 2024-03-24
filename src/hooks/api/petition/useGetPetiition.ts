import { API_PATH, QUERY_STRING } from '@constants/api';
import { get } from '@libs/api';
import { useInfiniteQuery } from '@tanstack/react-query';

import { PageResponse, ContentResponse } from '@/types/page';
import { PetitionType } from '@/types/petition';

export interface PetitionContentResponse extends ContentResponse {
   status: PetitionType;
   expiresAt: string;
   agreeCount: number;
}

interface PetitionResponse extends PageResponse {
   content: PetitionContentResponse[];
}

export const useGetPetition = () => {
   return useInfiniteQuery<PetitionResponse>({
      queryKey: ['getRule'],
      queryFn: ({ pageParam = 0 }) => get(API_PATH.PETITION.ROOT + `?${QUERY_STRING.PAGE}=${pageParam}`),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
         const nextPage = allPages.length + 1;
         return lastPage.hasNext ? nextPage : undefined;
      },
   });
};
