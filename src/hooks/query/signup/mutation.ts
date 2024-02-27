import { useState } from 'react';
import { useMutation } from 'react-query';
import { confirmCode, phoneVerification, verify, signup } from 'api/signup/signup';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/route';

export const usePostStudentVerify = () => {
   const navigate = useNavigate();
   return useMutation({
      mutationFn: verify,
      onSuccess: (data) => {
         navigate(ROUTES.SIGNUP.INFO, { state: { data } });
      },
   });
};

export const usePostPhoneVerify = () => {
   const [isPhoneVerified, setIsPhoneVerified] = useState<boolean>(false);

   const { mutate: phoneVerifyMutation } = useMutation({
      mutationFn: phoneVerification,
      onSuccess: () => {
         setIsPhoneVerified(true);
      },
   });

   return { phoneVerifyMutation, isPhoneVerified };
};

export const usePostPhoneConfirmCode = () => {
   const [isCodeVerified, setIsCodeVerified] = useState<boolean>(false);

   const { mutate: phoneConfirmMutation } = useMutation({
      mutationFn: confirmCode,
      onSuccess: () => {
         setIsCodeVerified(true);
      },
   });

   return { phoneConfirmMutation, isCodeVerified };
};

export const usePostSignup = () => {
   const navigate = useNavigate();

   const { mutate: signupMutation } = useMutation({
      mutationFn: signup,
      onSuccess: () => {
         navigate(ROUTES.SIGNUP.SUCCESS);
      },
   });

   return { signupMutation };
};
