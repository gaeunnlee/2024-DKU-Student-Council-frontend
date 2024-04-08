import { API_PATH } from '@constants/api';
import { useAlert } from '@hooks/useAlert';
import { useApi } from '@hooks/useApi';
import { useEnrollmentStore } from '@stores/enrollment-store';
import { isLoggedIn } from '@utils/token';
import React from 'react';

import { IMyInfo } from '@/types/mypage/edit';

export const useFetchMyInfo = () => {
   const { get } = useApi();
   const [myInfo, setMyInfo] = React.useState<IMyInfo>();
   const { alert } = useAlert();

   const { setEnrollment } = useEnrollmentStore();

   const fetchMyInfo = async () => {
      if (isLoggedIn) {
         try {
            const data = await get<IMyInfo>(API_PATH.USER.ME, { authenticate: true });
            setMyInfo(data);
            setEnrollment(data.dkuChecked);
         } catch (error) {
            alert(error);
         }
      }
   };

   return { myInfo, fetchMyInfo };
};
