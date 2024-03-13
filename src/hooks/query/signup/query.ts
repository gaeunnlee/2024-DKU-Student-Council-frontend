import { nicknameVeriication } from '@api/signup/signup';
import { useQuery } from 'react-query';

export const useGetNicknameVerify = (nickname: string) => {
   return useQuery(['nicknameVerification', nickname], () => nicknameVeriication(nickname));
};
