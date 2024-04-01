import { API_PATH } from '@constants/api';
import { get } from '@libs/api';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

interface CafeteriaResponse extends MealResponse {
   mealDate: string;
   other: string;
}

export interface MealResponse {
   breakfast: string;
   lunch: string;
   dinner: string;
}

export type MealType = keyof MealResponse;

export const useGetCafeteria = (options?: UseQueryOptions<CafeteriaResponse>) => {
   return useQuery<CafeteriaResponse>({
      queryKey: ['cafeteria'],
      queryFn: () => get(API_PATH.MAIN.CAFETERIA),
      ...options,
   });
};
