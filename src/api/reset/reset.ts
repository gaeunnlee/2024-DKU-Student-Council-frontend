import { client } from 'api';
import { API_PATH } from 'constants/api';
import { formatphoneNumber } from 'utils/tell';
import { ResetPwParams, VerifyCodeParams } from './types/reset';
import { isAxiosError } from 'axios';

export const findId = async (phoneNumber: string) => {
   const formattedPhoneNumber = formatphoneNumber(phoneNumber);
   try {
      const { data } = await client.post(API_PATH.USER.RESET.FIND_ID, {
         phoneNumber: formattedPhoneNumber,
      });
      return data;
   } catch (error) {
      if (isAxiosError(error)) {
         alert(error.response?.data.message[0]);
      }
   }
};

export const phoneVerification = async (phoneNumber: string) => {
   try {
      const { data } = await client.post(API_PATH.USER.RESET.PHONE_VERIFY, { phoneNumber });
      return data;
   } catch (error) {
      if (isAxiosError(error)) {
         alert(error.response?.data.message[0]);
      }
   }
};

export const confirmCode = async ({ token, code }: VerifyCodeParams) => {
   try {
      const { data } = await client.post(API_PATH.USER.RESET.PHONE_VERIFY_CODE, {
         token: token,
         code: code,
      });
      return data;
   } catch (error) {
      if (isAxiosError(error)) {
         alert(error.response?.data.message[0]);
      }
   }
};

export const resetPw = async ({ token, password }: ResetPwParams) => {
   try {
      const { data } = await client.patch(API_PATH.USER.RESET.RESET_PW, {
         token: token,
         password: password,
      });
      return data;
   } catch (error) {
      console.error(error);
   }
};
