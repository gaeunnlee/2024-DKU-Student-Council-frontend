import { API_PATH } from '@constants/api';
import { get } from '@libs/api';
import { useSuspenseQuery, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface Response {
   carousels: CarouselType[];
   recentNotices: NoticeType[];
   popularPetitions: PetitionType[];
   recentConferences: [
      {
         id: number;
         title: string;
      },
   ];
}

export interface CarouselType {
   id: number;
   url: string;
   redirectUrl?: string | null;
}

export interface NoticeType {
   id: number;
   title: string;
}

export interface PetitionType {
   id: number;
   title: string;
   petitionStatus: PetitionType;
   d_day: number;
}

const useGetMain = (options?: UseSuspenseQueryOptions<Response, AxiosError>) => {
   return useSuspenseQuery<Response, AxiosError>({
      queryKey: ['main'],
      queryFn: () => get(API_PATH.MAIN.ROOT),
      ...options,
   });
};


export default useGetMain;
