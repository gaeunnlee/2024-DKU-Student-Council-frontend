import { useMutation } from 'react-query';
import { confirmCode, findId, phoneVerification, resetPw } from 'api/reset/reset';
import { useAlert } from 'hooks/useAlert';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/route';

export const usePostFindId = () => {
   const { alert } = useAlert();
   return useMutation({
      mutationFn: findId,
      onSuccess: (data) => {
         data.message === 'ok' && alert('문자로 ID를 전송하였습니다.');
      },
   });
};

export const usePostPhoneVerify = (setToken: React.Dispatch<React.SetStateAction<string>>) => {
   return useMutation(phoneVerification, {
      onSuccess: (data) => {
         setToken(data.token);
      },
   });
};

export const usePostPhoneConfirmCode = (token: string) => {
   const navigate = useNavigate();

   return useMutation({
      mutationFn: confirmCode,
      onSuccess: (data) => {
         if (data.message === 'ok') {
            navigate(ROUTES.RESET.PW, { state: token });
         }
      },
   });
};

export const usePostResetPw = () => {
   return useMutation({
      mutationFn: resetPw,
   });
};
