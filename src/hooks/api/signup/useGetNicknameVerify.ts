import { API_PATH } from '@constants/api';
import { get } from '@libs/api';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

interface NicknameVerifyResponse {
   message: string;
}

export const useGetNicknameVerify = (nickname: string, options?: UseQueryOptions<NicknameVerifyResponse>) => {
   return useQuery<NicknameVerifyResponse>({
      queryKey: ['nickname'],
      queryFn: () => {
         return get(API_PATH.USER.SIGNUP.INFO.NICKNAME, { params: { nickname } });
      },
      select: (data) => data,
      enabled: false,
      ...options,
   });
};
