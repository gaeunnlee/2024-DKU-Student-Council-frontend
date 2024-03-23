import { API_PATH } from '@constants/api';
import { get } from '@libs/api';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

interface Response extends MealResponse {
   mealDate: string;
   other: string;
}

export interface MealResponse {
   breakfast: string;
   lunch: string;
   dinner: string;
}

export type MealType = keyof MealResponse;

export const useGetCafeteria = (options?: UseQueryOptions<Response>) => {
   return useQuery<Response>({
      queryKey: ['cafeteria'],
      queryFn: () => get<Response>(API_PATH.MAIN.CAFETERIA),
      ...options,
   });
};
