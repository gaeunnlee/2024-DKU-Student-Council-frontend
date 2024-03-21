import { client } from '@api/index';
import {
   IVerifyInfo,
   PhoneVerifyParams,
   SignupParams,
   StudentVerifyResponse,
   confirmCodeParams,
} from '@api/signup/types/signup';
import { API_PATH } from '@constants/api';
import { formatphoneNumber } from '@utils/tell';

export const verify = async (verifyInfo: IVerifyInfo) => {
   try {
      const { data } = await client.post<StudentVerifyResponse>(API_PATH.USER.SIGNUP.VERIFY, verifyInfo);
      return data;
   } catch (error) {
      console.error(error);
   }
};

export const nicknameVeriication = async (nickname: string) => {
   try {
      const { data } = await client.get(API_PATH.USER.SIGNUP.INFO.NICKNAME, {
         params: { nickname },
      });
      return data;
   } catch (error) {
      console.error(error);
   }
};

export const phoneVerification = async ({ phoneNumber, signupToken }: PhoneVerifyParams) => {
   const formattedPhoneNumber = formatphoneNumber(phoneNumber);
   try {
      const { data } = await client.post(API_PATH.USER.SIGNUP.INFO.PHONE_VERIFICATION(signupToken), {
         phoneNumber: formattedPhoneNumber,
      });
      return data;
   } catch (error) {
      console.error(error);
   }
};

export const confirmCode = async ({ signupToken, code }: confirmCodeParams) => {
   try {
      const { data } = await client.post(API_PATH.USER.SIGNUP.INFO.CODE(signupToken), {
         code: code,
      });
      return data;
   } catch (error) {
      console.error(error);
   }
};

export const signup = async ({ signupToken, signupInfo }: SignupParams) => {
   try {
      const { data } = await client.post(API_PATH.USER.SIGNUP.INFO.ROOT(signupToken), signupInfo);
      return data;
   } catch (error) {
      console.error(error);
   }
};
