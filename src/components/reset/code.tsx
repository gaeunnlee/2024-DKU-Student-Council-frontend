import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import Message from '@components/ui/text/message';
import { ROUTES } from '@constants/route';
import { usePostPhoneConfirmCode } from '@hooks/api/reset/usePostPhoneConfirmCode';
import { usePostPhoneVerify } from '@hooks/api/reset/usePostPhoneVerify';
import { useAlert } from '@hooks/useAlert';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function PwVerifyForm() {
   const [pwVerifyInfo, setPwVerifyInfo] = React.useState({ phoneNumber: '', code: '' });
   const [token, setToken] = React.useState<string>('');
   const { alert } = useAlert();
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setPwVerifyInfo({
         ...pwVerifyInfo,
         [name]: value,
      });
   };

   const { mutate: phoneVerify, isSuccess: verifySuccess } = usePostPhoneVerify({
      onSuccess: (res) => {
         setToken(res.token);
      },
   });
   const { mutate: confirmCode, isSuccess: codeSuccess } = usePostPhoneConfirmCode({
      onSuccess: () => {
         navigate(`${ROUTES.RESET.PW}?${searchParams.toString()}`, { state: token });
      },
   });

   const handlePhoneVerify = () => {
      if (pwVerifyInfo.phoneNumber.length === 11) {
         phoneVerify({ phoneNumber: pwVerifyInfo.phoneNumber });
      } else {
         alert('올바른 휴대폰번호를 입력해주세요.');
      }
   };

   const handleConfirmCode = () => {
      if (verifySuccess) {
         if (pwVerifyInfo.code.length !== 6) {
            alert('올바른 인증번호를 입력해주세요.');
         } else {
            confirmCode({ token: token, code: pwVerifyInfo.code });
         }
      } else {
         alert('인증 후 이용 가능합니다.');
      }
   };

   React.useEffect(() => {
      if (codeSuccess) {
         navigate(ROUTES.RESET.PW, {
            state: token,
         });
      }
   }, [codeSuccess, navigate, token]);

   return (
      <form className='flex flex-col mx-auto w-[311px]'>
         <div className='flex items-center mb-4'>
            <Input
               size='md'
               type='number'
               placeholder='가입시 입력한 휴대전화번호 입력'
               name='phoneNumber'
               value={pwVerifyInfo.phoneNumber}
               onChange={handleChange}
            />
            <Button
               variant='ghost'
               type='button'
               className='ml-[-70px] text-[13px]'
               onClick={handlePhoneVerify}
            >
               인증요청
            </Button>
         </div>
         <Message>{verifySuccess ? '인증번호가 발송되었습니다.' : null}</Message>
         <Input
            size='md'
            type='number'
            placeholder='인증번호 입력'
            name='code'
            value={pwVerifyInfo.code}
            onChange={handleChange}
            className='mb-4'
         />
         <Button
            className='rounded-[30px]'
            onClick={handleConfirmCode}
            size='md'
            variant='default'
            type='button'
         >
            확인
         </Button>
      </form>
   );
}
