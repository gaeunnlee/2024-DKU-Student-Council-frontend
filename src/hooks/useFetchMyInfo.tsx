import { IMyInfo } from 'interfaces/mypage/edit';
import { useApi } from './useApi';
import { API_PATH } from 'constants/api';
import { useState } from 'react';
import { useAlert } from './useAlert';
import { useEnrollmentStore } from 'stores/enrollment-store';
import { useAuth } from './useAuth';

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
