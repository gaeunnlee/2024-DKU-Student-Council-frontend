import { useMutation } from 'react-query';
import { confirmCode, findId, phoneVerification, resetPw } from 'api/reset/reset';

export const usePostFindId = () => {
   return useMutation({
      mutationFn: findId,
   });
};

export const usePostPhoneVerify = () => {
   return useMutation({
      mutationFn: phoneVerification,
   });
};

export const usePostPhoneConfirmCode = () => {
   return useMutation({
      mutationFn: confirmCode,
   });
};

export const usePostResetPw = () => {
   return useMutation({
      mutationFn: resetPw,
   });
};
