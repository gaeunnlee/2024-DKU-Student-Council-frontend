import { IMyInfo } from 'interfaces/mypage/edit';
import { useApi } from './useApi';
import { API_PATH } from 'constants/api';
import { useState } from 'react';
import { useEffectOnce } from './useEffectOnce';

export const useFetchMyInfo = () => {
   const { get } = useApi();
   const [myInfo, setMyInfo] = useState<IMyInfo>();
   const fetchMyInfo = async () => {
      const data = await get<IMyInfo>(API_PATH.USER.ME, { authenticate: true });
      setMyInfo(data);
   };

   useEffectOnce(() => {
      fetchMyInfo();
   });

   return { myInfo, fetchMyInfo };
};
