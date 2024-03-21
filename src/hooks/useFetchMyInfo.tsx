import { API_PATH } from '@constants/api';
import { useAlert } from '@hooks/useAlert';
import { useApi } from '@hooks/useApi';
import { useAuth } from '@hooks/useAuth';
import { useEnrollmentStore } from '@stores/enrollment-store';
import { useState } from 'react';

import { IMyInfo } from '../interfaces/mypage/edit';

export const useFetchMyInfo = () => {
   const { get } = useApi();
   const [myInfo, setMyInfo] = useState<IMyInfo>();
   const { alert } = useAlert();
   const { isLoggedIn } = useAuth();
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
