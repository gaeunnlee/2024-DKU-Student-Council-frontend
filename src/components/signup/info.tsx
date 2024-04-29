import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import Message from '@components/ui/text/message';
import { useGetNicknameVerify } from '@hooks/api/signup/useGetNicknameVerify';
import { usePostPhoneConfirmCode } from '@hooks/api/signup/usePostPhoneConfirmCode';
import { usePostPhoneVerify } from '@hooks/api/signup/usePostPhoneVerify';
import { UserRegistrationInfo } from '@hooks/api/signup/usePostSignup';
import { usePostSignup } from '@hooks/api/signup/usePostSignup';
import React, { ChangeEvent, useEffect } from 'react';

import HTTPError from '@/types/statusError';

export default function InfoForm({ signupToken }: { signupToken: string }) {
   const [signupInfo, setSignupInfo] = React.useState<UserRegistrationInfo>({
      nickname: '',
      password: '',
   });

   const { mutate: phoneVerify, isSuccess: isPhoneVerifySuccess } = usePostPhoneVerify(signupToken);
   const {
      mutate: phoneConfirm,
      isSuccess: isCodeConfirm,
      isError: isCodeError,
      error: codeError,
   } = usePostPhoneConfirmCode(signupToken);

   const { mutate: signup } = usePostSignup(signupToken);
   const codeErrorResponse = codeError?.response?.data as HTTPError;
   const { isSuccess: isNicknameVerify, refetch } = useGetNicknameVerify(signupInfo.nickname);

   const labelStyle = 'ml-[14px] font-normal text-gray02';

   const [passwordConfirm, setPasswordConfirm] = React.useState<string>('');
   const [passwordMatch, setPasswordMatch] = React.useState<boolean>(false);
   const [phoneNumber, setphoneNumber] = React.useState<string>('');
   const [code, setCode] = React.useState<string>('');
   const [isPasswordValid, setIsPasswordValid] = React.useState(false);
   const [isNicknameValid, setIsNicknameValid] = React.useState<boolean>(false);
   const [isFormValid, setIsFormValid] = React.useState<boolean>(false);

   const handlePhoneVerify = () => {
      phoneVerify({ phoneNumber: phoneNumber });
   };

   const handlePhoneConfirm = () => {
      phoneConfirm({ code: code });
   };

   const handleNicknameVerify = () => {
      refetch();
   };

   const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      signup(signupInfo);
   };

   useEffect(() => {
      setIsFormValid(
         isNicknameVerify &&
            isPhoneVerifySuccess &&
            isCodeConfirm &&
            passwordMatch &&
            signupInfo.nickname !== '' &&
            signupInfo.password !== '' &&
            isPasswordValid &&
            isNicknameValid,
      );
   }, [
      isNicknameVerify,
      isPhoneVerifySuccess,
      isCodeConfirm,
      passwordMatch,
      signupInfo.nickname,
      signupInfo.password,
      isNicknameValid,
      isPasswordValid,
   ]);

   useEffect(() => {
      setIsNicknameValid(
         signupInfo.nickname.length >= 3 &&
            signupInfo.nickname.length <= 16 &&
            /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z_\s]*$/.test(signupInfo.nickname),
      );
   }, [signupInfo.nickname]);

   useEffect(() => {
      setIsPasswordValid(
         signupInfo.password.length > 7 &&
            signupInfo.password.length < 17 &&
            /^(?=.*[a-zA-Z])(?=.*[0-9]).{7,17}$/.test(signupInfo.password),
      );
   }, [signupInfo.password]);

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      switch (name) {
         case 'password':
            setSignupInfo((prev) => ({ ...prev, password: value }));
            setPasswordMatch(signupInfo.password === value);
            break;
         case 'passwordConfirm':
            setPasswordConfirm(value);
            setPasswordMatch(signupInfo.password === value);
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

   const passwordMismatch = !passwordMatch && passwordConfirm !== '';
   const codeErrorMsg = codeErrorResponse?.message[0];

   return (
      <form onSubmit={handleFormSubmit}>
         <section className='flex flex-col gap-2 mb-6'>
            <Label htmlFor='password' className={`${labelStyle}`}>
               비밀번호
            </Label>
            <Input
               type='password'
               placeholder='비밀번호 입력'
               id='password'
               name='password'
               value={signupInfo.password}
               onChange={handleInputChange}
               size='md'
               className='rounded-[10px]'
            />
            <Input
               type='password'
               placeholder='비밀번호 확인'
               id='password'
               name='passwordConfirm'
               value={passwordConfirm}
               onChange={handleInputChange}
               size='md'
               className='rounded-[10px]'
            />
            {!isPasswordValid && (
               <Message>비밀번호는 영문과 숫자 1자이상을 포함하는 8~16자리여야합니다.</Message>
            )}
            {passwordMismatch && <Message>비밀번호가 일치하지 않습니다.</Message>}
         </section>
         <section className='mb-6'>
            <Label htmlFor='nickname' className={`${labelStyle}`}>
               닉네임
            </Label>
            <div className='flex items-center'>
               <Input
                  type='text'
                  placeholder='닉네임 입력'
                  id='nickname'
                  name='nickname'
                  value={signupInfo.nickname}
                  onChange={handleInputChange}
                  size='md'
               />
               <Button type='button' variant='ghost' className='ml-[-70px]' onClick={handleNicknameVerify}>
                  중복확인
               </Button>
            </div>
            {isNicknameValid && isNicknameVerify ? (
               <Message>사용가능한 닉네임입니다.</Message>
            ) : !isNicknameValid && isNicknameVerify ? (
               <Message>한글, 영문 대소문자, 공백, _ 로 3자 이상 16자 이하여야 합니다.</Message>
            ) : null}
         </section>
         <section className='flex flex-col gap-2 mb-4'>
            <Label htmlFor='tel' className={`${labelStyle}`}>
               휴대폰 인증
            </Label>
            <div className='flex items-center'>
               <Input
                  type='number'
                  placeholder='-는 제외하고 입력해주세요.'
                  id='tel'
                  name='phoneNumber'
                  value={phoneNumber}
                  onChange={handleInputChange}
                  size='md'
               />
               <Button variant='ghost' type='button' className='ml-[-70px]' onClick={handlePhoneVerify}>
                  인증요청
               </Button>
            </div>
            {isPhoneVerifySuccess && <Message>인증번호가 전송되었습니다.</Message>}
            <div className='flex items-center'>
               <Input
                  type='number'
                  placeholder='인증번호 6자리를 입력해주세요.'
                  name='code'
                  onChange={handleInputChange}
                  size='md'
                  className='rounded-[10px]'
               />
               <Button variant='ghost' type='button' className='ml-[-50px]' onClick={handlePhoneConfirm}>
                  확인
               </Button>
            </div>
            {isCodeConfirm ? (
               <Message>인증번호가 일치합니다.</Message>
            ) : isCodeError ? (
               <Message>{codeErrorMsg}</Message>
            ) : null}
         </section>
         <Button size='md' type='submit' className='rounded-[20px]' disabled={!isFormValid} variant='default'>
            확인
         </Button>
      </form>
   );
}
