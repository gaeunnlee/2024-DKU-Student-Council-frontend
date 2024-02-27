import Input from 'components/ui/input';
import Button from 'components/ui/button';
import Message from 'components/ui/typo/message';
import React, { ChangeEvent, useEffect } from 'react';
import { IUserRegistration } from 'api/signup/types/signup';
import { usePostPhoneVerify, usePostPhoneConfirmCode, usePostSignup } from 'hooks/query/signup/mutation';
import { useGetNicknameVerify } from 'hooks/query/signup/query';

export default function InfoForm({ signupToken }: { signupToken: string }) {
   const [signupInfo, setSignupInfo] = React.useState<IUserRegistration>({
      nickname: '',
      password: '',
   });

   const { phoneVerifyMutation: phoneVerify, isPhoneVerified } = usePostPhoneVerify();
   const { phoneConfirmMutation: phoneConfirm, isCodeVerified } = usePostPhoneConfirmCode();
   const { signupMutation: signup } = usePostSignup();

   const { data, isSuccess, refetch } = useGetNicknameVerify(signupInfo.nickname);

   const buttonStyle = 'h-10 z-10 whitespace-nowrap text-[13px]';

   const [passwordConfirm, setPasswordConfirm] = React.useState<string>('');
   const [passwordMismatch, setPasswordError] = React.useState<boolean>(false);
   const [phoneNumber, setphoneNumber] = React.useState<string>('');
   const [code, setCode] = React.useState<string>('');
   const [isNicknameValid, setIsNicknameValid] = React.useState<boolean>(false);
   const [isFormValid, setIsFormValid] = React.useState<boolean>(false);

   const handlePhoneVerify = () => {
      phoneVerify({ phoneNumber, signupToken });
   };

   const handlePhoneConfirm = () => {
      phoneConfirm({ code, signupToken });
   };

   const handleSignup = () => {
      signup({ signupInfo, signupToken });
   };

   const handleNicknameVerify = () => {
      refetch();
      if (data.message === 'ok') {
         setIsNicknameValid(isSuccess);
      }
   };

   const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleSignup();
   };

   useEffect(() => {
      setIsFormValid(isNicknameValid && isPhoneVerified && isCodeVerified && !passwordMismatch);
   }, [isNicknameValid, isPhoneVerified, isCodeVerified, passwordMismatch]);

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      switch (name) {
         case 'passwordConfirm':
            setPasswordConfirm(value);
            setPasswordError(signupInfo.password !== value);
            break;
         case 'phoneNumber':
            setphoneNumber(value);
            break;
         case 'code':
            setCode(value);
            break;
         default:
            setSignupInfo({
               ...signupInfo,
               [name]: value,
            });
      }
   };

   return (
      <form onSubmit={handleFormSubmit}>
         <section className='flex flex-col gap-2 mb-6'>
            <Input
               label='비밀번호'
               type='password'
               placeholder='비밀번호 입력'
               name='password'
               value={signupInfo.password}
               onChange={handleInputChange}
               size='md'
               borderRadius='10px'
            />
            <Input
               type='password'
               placeholder='비밀번호 확인'
               name='passwordConfirm'
               value={passwordConfirm}
               onChange={handleInputChange}
               size='md'
               borderRadius='10px'
            />
            <Message>{passwordMismatch ? '비밀번호가 일치하지 않습니다.' : null}</Message>
         </section>
         <section className='mb-6'>
            <div className='flex'>
               <Input
                  label='닉네임'
                  type='text'
                  placeholder='닉네임 입력'
                  name='nickname'
                  value={signupInfo.nickname}
                  onChange={handleInputChange}
                  size='md'
                  borderRadius='10px'
               />
               <button
                  type='button'
                  className={`self-end ml-[-70px] ${buttonStyle}`}
                  onClick={handleNicknameVerify}
               >
                  중복확인
               </button>
            </div>
            <Message>{isNicknameValid ? '사용가능한 닉네임입니다.' : null}</Message>
         </section>
         <section className='flex flex-col gap-2'>
            <div className='flex'>
               <Input
                  label='휴대폰 인증'
                  type='number'
                  placeholder='-는 제외하고 입력해주세요.'
                  name='phoneNumber'
                  value={phoneNumber}
                  onChange={handleInputChange}
                  size='md'
                  borderRadius='10px'
               />
               <button
                  type='button'
                  className={`self-end ml-[-70px] ${buttonStyle}`}
                  onClick={handlePhoneVerify}
               >
                  인증요청
               </button>
            </div>
            <Message>{isPhoneVerified ? '인증번호가 전송되었습니다.' : null}</Message>
            <div className={'flex'}>
               <Input
                  type='number'
                  placeholder='인증번호 6자리를 입력해주세요.'
                  name='code'
                  onChange={handleInputChange}
                  size='md'
                  borderRadius='10px'
               />
               <button
                  type='button'
                  className={`self-start ml-[-50px] ${buttonStyle}`}
                  onClick={handlePhoneConfirm}
               >
                  확인
               </button>
            </div>
            <Message>{isCodeVerified ? '인증번호가 일치합니다' : null}</Message>
         </section>
         <Button
            size='md'
            type='submit'
            className='mt-4'
            disabled={!isFormValid}
            onClick={handleSignup}
            variant='default'
            borderRadius='20px'
         >
            확인
         </Button>
      </form>
   );
}
