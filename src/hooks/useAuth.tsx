import { useState } from 'react';
import { useEffectOnce } from './useEffectOnce';
import { CONSTANTS, ROUTES } from '../constant';
import type { ILoginInfo } from '../pages/login';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router';
import type { MessagedAxiosError } from '../interfaces/axios.interface';

interface ILoginResponse {
   accessToken: string;
   refreshToken: string;
}

export const useAuth = () => {
   const [isLoggedIn] = useState(false);
   const navigate = useNavigate();

   useEffectOnce(() => {
      const atk = localStorage.getItem(CONSTANTS.atk_key);
      console.log(atk);
   });

   const login = async (loginInfo: ILoginInfo) => {
      try {
         const { data: d } = await axios.post<AxiosResponse<ILoginResponse>>('/user/login', loginInfo);
         navigate(ROUTES.MAIN);
         console.log(d);
      } catch (error) {
         const e = error as MessagedAxiosError;
         alert(e.response?.data?.message[0]);
      }
   };

   const logout = () => {};

   return {
      isLoggedIn,
      login,
      logout,
   };
};
