import { API_PATH } from '@constants/api';
import { get } from '@libs/api';
import { useSuspenseQuery } from '@tanstack/react-query';

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

const useGetMain = () => {
   return useSuspenseQuery<Response>({
      queryKey: ['main'],
      queryFn: () => get(API_PATH.MAIN.ROOT),
      staleTime: 6,
      gcTime: 10,
   });
};

export default useGetMain;
