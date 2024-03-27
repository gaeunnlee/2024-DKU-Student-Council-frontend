import { API_PATH } from '@constants/api';
import { get } from '@libs/api';
import { useQuery } from '@tanstack/react-query';

import { ContentResponse } from '@/types/page';
import { PetitionType } from '@/types/petition';

export interface PetitionContentResponse extends ContentResponse {
   status: PetitionType;
   answer: string;
   expiresAt: string;
   agreeCount: number;
   statisticList: StatistResponse[];
   agree: boolean;
   liked: boolean;
   mine: boolean;
}

export interface StatistResponse {
   department: string;
   agreeCount: number;
}

export const useGetPetitionItem = (id: string) => {
   return useQuery<PetitionContentResponse>({
      queryKey: ['getPetitionItem'],
      queryFn: () => get(API_PATH.PETITION.ID(id)),
   });
};
