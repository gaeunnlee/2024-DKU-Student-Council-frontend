import { API_PATH } from '@constants/api';
import { get } from '@libs/api';
import { useQuery } from '@tanstack/react-query';

export const useGetNicknameVerify = (nickname: string) => {
   return useQuery({
      queryKey: ['nickname'],
      queryFn: () => {
         return get(API_PATH.USER.SIGNUP.INFO.NICKNAME, { params: { nickname } });
      },
      enabled: false,
   });
};
