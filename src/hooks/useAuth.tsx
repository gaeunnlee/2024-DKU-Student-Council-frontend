import axios from 'axios';
import { useNavigate } from 'react-router';
import { useAlert } from 'hooks/useAlert';
import { API_PATH, CONSTANTS, ROUTES } from 'constant';
import type { IIdPassword } from 'interfaces/default-interfaces';
import type { ILoginResponse } from 'api/axios-interface';

export const useAuth = () => {
   const navigate = useNavigate();
   const { alert } = useAlert();

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

   const isLoggedIn = (() => !!localStorage.getItem(CONSTANTS.atk_key))();

   return {
      isLoggedIn,
      login,
      logout,
   };
};
