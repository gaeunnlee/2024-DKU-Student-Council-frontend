import React, { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { API_PATH, CONSTANTS } from 'constants/api';
import { ROUTES } from 'constants/route';
import axios from 'axios';
import Input from 'components/ui/input';
import Button from 'components/ui/button';
import Text from 'components/ui/typo/text';
import Heading from 'components/ui/typo/heading';
import { useAlert } from 'hooks/useAlert';
import { useLayout } from 'hooks/useLayout';
import { useEffectOnce } from 'hooks/useEffectOnce';

export default function SignupInfo() {
   const navigate = useNavigate();
   const location = useLocation();

   interface IUserRegistration {
      nickname: string;
      password: string;
   }

   const { alert } = useAlert();
   const { state } = location;
   const data = state ? state.data : null;
   const signupToken = data?.signupToken;
   const { setLayout } = useLayout();

   const [signupInfo, setSignupInfo] = useState<IUserRegistration>({
      nickname: '',
      password: '',
   });

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: true,
         heading: '',
         subHeading: '',
         headingStyle: '',
         headingText: '',
         subHeadingText: '',
         margin: 'mt-[41px]',
         rounded: true,
      });
   });

   const [passwordConfirm, setPasswordConfirm] = useState<string>('');
   const [passwordMismatch, setPasswordError] = useState<boolean>(false);
   const [phoneNumber, setphoneNumber] = useState<string>('');
   const [code, setCode] = useState<string>('');
   const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false);
   const [isPhoneVerified, setIsPhoneVerified] = useState<boolean>(false);
   const [isCodeVerified, setIsCodeVerified] = useState<boolean>(false);
   const [isFormValid, setIsFormValid] = useState<boolean>(false);

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

   const nicknameVeriication = async (nickname: string) => {
      try {
         const { data } = await axios.get(CONSTANTS.SERVER_URL + API_PATH.USER.SIGNUP.INFO.NICKNAME, {
            params: { nickname },
         });
         if (data.message === 'ok') {
            setIsNicknameValid(true);
         } else {
            setIsNicknameValid(false);
         }
      } catch (error) {
         alert(error);
      }
   };

   const formatphoneNumber = (phoneNumber: string) => {
      const number = phoneNumber.replace(/\D/g, '');
      const formattedphoneNumber = number.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
      return formattedphoneNumber;
   };

   const phoneVerification = async (phoneNumber: string) => {
      const formattedPhoneNumber = formatphoneNumber(phoneNumber);
      try {
         const { data } = await axios.post(
            CONSTANTS.SERVER_URL + API_PATH.USER.SIGNUP.INFO.PHONE_VERIFICATION(signupToken),
            {
               phoneNumber: formattedPhoneNumber,
            },
         );
         if (data.message === 'ok') {
            setIsPhoneVerified(true);
         } else {
            setIsPhoneVerified(false);
         }
      } catch (error) {
         alert(error);
      }
   };

   const confirmCode = async (code: string) => {
      try {
         const { data } = await axios.post(
            CONSTANTS.SERVER_URL + API_PATH.USER.SIGNUP.INFO.CODE(signupToken),
            {
               code: code,
            },
         );
         if (data.message === 'ok') {
            setIsCodeVerified(true);
         } else {
            setIsCodeVerified(false);
         }
      } catch (error) {
         alert(error);
      }
   };

   const signup = async (signupInfo: IUserRegistration, signupToken: string) => {
      try {
         const { data } = await axios.post(
            CONSTANTS.SERVER_URL + API_PATH.USER.SIGNUP.INFO.ROOT(signupToken),
            signupInfo,
         );
         navigate(ROUTES.MAIN);
         if (data.message === 'ok') {
            navigate(ROUTES.LOGIN);
         }
      } catch (error) {
         alert(error);
      }
   };

   const handleSubmit = () => {
      signup(signupInfo, signupToken);
   };

   useEffect(() => {
      setIsFormValid(isNicknameValid && isPhoneVerified && isCodeVerified && !passwordMismatch);
   }, [isNicknameValid, isPhoneVerified, isCodeVerified, passwordMismatch]);

   if (!data) {
      alert('학생 인증을 완료해주세요');
      navigate(ROUTES.SIGNUP.VERIFY);
   }

   return (
      <div className='flex flex-col px-10 pt-12'>
         <Heading as='h1' className='text-2xl font-extrabold mb-[14px]'>
            Sign up
         </Heading>
         <Heading as='h2' className='text-base font-extrabold mb-6'>
            단국대학교 총학생회 회원가입
         </Heading>
         <Heading as='h3' className="text-sm before:content-['●'] flex items-center gap-1 mb-8">
            회원 정보 입력
         </Heading>
         <form className={'mx-auto'}>
            <section className='flex flex-col gap-2 mb-6'>
               <Input
                  label='비밀번호'
                  type='password'
                  placeholder='비밀번호 입력'
                  name='password'
                  value={signupInfo.password}
                  onChange={handleInputChange}
                  className='rounded-[10px]'
               />
               <Input
                  type='password'
                  placeholder='비밀번호 확인'
                  name='passwordConfirm'
                  value={passwordConfirm}
                  onChange={handleInputChange}
                  isSuccess={!passwordMismatch}
                  message={passwordMismatch ? '비밀번호가 일치하지 않습니다.' : null}
                  className='rounded-[10px]'
               />
            </section>
            <section className={'flex mb-6'}>
               <Input
                  label='닉네임'
                  type='text'
                  placeholder='닉네임 입력'
                  name='nickname'
                  value={signupInfo.nickname}
                  onChange={handleInputChange}
                  isSuccess={isNicknameValid}
                  message={isNicknameValid ? '사용가능한 닉네임입니다.' : null}
                  className='rounded-[10px]'
               />
               <Button
                  variant='naked'
                  type='button'
                  className={'h-4 ml-[-5rem] mt-11 text-blue-600 text-sm'}
                  onClick={() => nicknameVeriication(signupInfo.nickname)}
               >
                  <Text className='text-black'>중복확인</Text>
               </Button>
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
                     isSuccess={isPhoneVerified}
                     message={isPhoneVerified ? '인증번호가 전송되었습니다.' : null}
                     className='rounded-[10px]'
                  />
                  <Button
                     type='button'
                     variant='naked'
                     className={'h-4 ml-[-5rem] mt-11 text-blue-600 text-sm'}
                     onClick={() => phoneVerification(phoneNumber)}
                  >
                     <Text className='text-black'>인증요청</Text>
                  </Button>
               </div>
               <div className={'flex'}>
                  <Input
                     type='number'
                     placeholder='인증번호 6자리를 입력해주세요.'
                     name='code'
                     value={code}
                     onChange={handleInputChange}
                     isSuccess={isCodeVerified}
                     message={isCodeVerified ? '인증번호가 일치합니다' : '인증번호가 일치하지 않습니다.'}
                     className='rounded-[10px]'
                  />
                  <Button
                     type='button'
                     variant='naked'
                     className={'h-4 ml-[-3rem] mt-5 text-blue-600 text-sm'}
                     onClick={() => confirmCode(code)}
                  >
                     <Text className='text-black'>확인</Text>
                  </Button>
               </div>
            </section>
            <Button
               type='submit'
               className={`w-full py-3 rounded-[10px] mt-4 ${isFormValid ? 'bg-blue-600' : 'bg-gray-400'}`}
               disabled={!isFormValid}
               onClick={handleSubmit}
               variant='default'
            >
               <Text className='text-base font-bold'>확인</Text>
            </Button>
         </form>
      </div>
   );
}
