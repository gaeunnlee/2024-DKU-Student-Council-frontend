import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useAlert } from 'hooks/useAlert';
import { API_PATH, CONSTANTS, ROUTES } from 'constant';
import type { IIdPassword } from 'interfaces/default-interfaces';
import type { ILoginResponse } from 'api/axios-interface';

export const useAuth = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const navigate = useNavigate();
   const { alert } = useAlert();

   useEffectOnce(() => {
      const atk = localStorage.getItem(CONSTANTS.atk_key);
      if (!atk) {
         setIsLoggedIn(false);
      } else if (atk.length > 0) {
         setIsLoggedIn(true);
      }
   });

   const login = async (loginInfo: IIdPassword) => {
      try {
         const { data } = await axios.post<ILoginResponse>(API_PATH.USER.LOGIN, loginInfo);
         localStorage.setItem(CONSTANTS.atk_key, data.accessToken);
         localStorage.setItem(CONSTANTS.rtk_key, data.refreshToken);
         navigate(ROUTES.MAIN);
      } catch (error) {
         alert(error);
      }
   };

   const logout = () => {
      try {
         localStorage.removeItem(CONSTANTS.atk_key);
         localStorage.removeItem(CONSTANTS.rtk_key);
         navigate(ROUTES.LOGIN);
      } catch (error) {
         alert(error);
      }
   };

   return {
      isLoggedIn,
      login,
      logout,
   };
};
