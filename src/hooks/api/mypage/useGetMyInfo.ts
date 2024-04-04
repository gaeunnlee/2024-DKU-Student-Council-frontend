import { API_PATH } from '@constants/api';
import { get } from '@libs/api';
import { useSuspenseQuery, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface MyPageInfoResponse {
  studentId: string;
  username: string;
  nickname: string;
  age: string;
  gender: string;
  yearOfAdmission: string;
  major: string;
  department: string;
  phoneNumber: string;
  profileImage: string;
  writePostCount: number;
  commentedPostCount: number;
  likedPostCount: number;
  petitionCount: number;
  agreedPetitionCount: number;
  admin: true,
  dkuChecked: boolean;
}

const useGetMyInfo = (options?: UseSuspenseQueryOptions<MyPageInfoResponse, AxiosError>) => {
   return useSuspenseQuery<MyPageInfoResponse, AxiosError>({
      queryKey: ['myInfo'],
      queryFn: () => get(API_PATH.USER.ME),
      ...options,
   });
};


export default useGetMyInfo;
