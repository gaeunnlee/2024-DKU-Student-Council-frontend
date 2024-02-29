import Button from 'components/ui/button';
import Input from 'components/ui/input';
import Message from 'components/ui/typo/message';
import { usePostPhoneVerify } from 'hooks/query/reset/mutation';
import { usePostPhoneConfirmCode } from 'hooks/query/reset/mutation';
import React from 'react';

export default function PwVerifyForm() {
   const [pwVerifyInfo, setPwVerifyInfo] = React.useState({ phoneNumber: '', code: '' });
   const [token, setToken] = React.useState<string>('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setPwVerifyInfo({
         ...pwVerifyInfo,
         [name]: value,
      });
   };

   const { mutate: phoneVerify, isSuccess: verifySuccess } = usePostPhoneVerify(setToken);
   const { mutate: confirmCode } = usePostPhoneConfirmCode(token);

   const handlePhoneVerify = () => {
      phoneVerify(pwVerifyInfo.phoneNumber);
   };

   const handleConfirmCode = () => {
      confirmCode({ token, code: pwVerifyInfo.code });
   };

   return (
      <form className='flex flex-col mx-auto w-[311px]'>
         <div className='flex mb-4'>
            <Input
               size='md'
               type='number'
               placeholder='가입시 입력한 휴대전화번호 입력'
               name='phoneNumber'
               value={pwVerifyInfo.phoneNumber}
               onChange={handleChange}
            />
            <button
               type='button'
               className='self-end ml-[-70px] h-10 z-10 text-[13px]'
               onClick={handlePhoneVerify}
            >
               인증요청
            </button>
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
         <Button borderRadius='30px' onClick={handleConfirmCode} size='md' variant='default'>
            확인
         </Button>
      </form>
   );
}
