import { API_PATH } from '@constants/api';
import { get } from '@libs/api';
import { useQuery } from '@tanstack/react-query';

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
   redirectUrl: string | null;
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

export enum PetitionStatusType {
   WAITING,
   ACTIVE,
   ANSWERED,
   EXPIRED,
}

const useGetMain = () => {
   return useQuery<Response>({
      queryKey: ['main'],
      queryFn: () => get(API_PATH.MAIN.ROOT),
   });
};

export default useGetMain;
