import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { API_PATH, ROUTES } from 'constant';
import axios from 'axios';
import Input from 'components/ui/input';
import Button from 'components/ui/button';
import { useAlert } from 'hooks/useAlert';

export default function SignupInfo() {
   const navigate = useNavigate();
   const location = useLocation();

   interface IUserRegistration {
      nickname: string;
      password: string;
   }

   const { alert } = useAlert();
   const { data } = location.state;
   const signupToken = data.signupToken;

   const [signupInfo, setSignupInfo] = useState<IUserRegistration>({
      nickname: '',
      password: '',
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
         const { data } = await axios.get(API_PATH.USER.SIGNUP.INFO.NICKNAME, {
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
         const { data } = await axios.post(API_PATH.USER.SIGNUP.INFO.PHONE_VERIFICATION(signupToken), {
            phoneNumber: formattedPhoneNumber,
         });
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
         const { data } = await axios.post(API_PATH.USER.SIGNUP.INFO.CODE(signupToken), {
            code: code,
         });
         if (data.message === 'ok') {
            setIsCodeVerified(true);
         } else {
            setIsCodeVerified(false);
         }
      } catch (error) {
         alert(error);
      }
   };

   const signup = async (signupInfo: IUserRegistration) => {
      try {
         const { data } = await axios.post(API_PATH.USER.SIGNUP.INFO.ROOT(signupToken), signupInfo);
         navigate(ROUTES.MAIN);
         if (data.message === 'ok') {
            navigate(ROUTES.LOGIN);
         }
      } catch (error) {
         alert(error);
      }
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      signup(signupInfo);
   };

   useEffect(() => {
      setIsFormValid(isNicknameValid && isPhoneVerified && isCodeVerified && !passwordMismatch);
   }, [isNicknameValid, isPhoneVerified, isCodeVerified, passwordMismatch]);

   if (!data) {
      alert('학생 인증을 완료해주세요');
      navigate(ROUTES.SIGNUP.VERIFY);
   }

   return (
      <form onSubmit={handleSubmit} className={'mx-auto'}>
         <section className={'mb-6'}>
            <Input label='이름' value={data.student.studentName} />
         </section>
         <section className={'mb-6'}>
            <Input label='아이디' value={data.student.studentId + '@dankook@ac.kr'} />
         </section>
         <section className={'mb-6'}>
            <Input
               label='비밀번호'
               type='password'
               placeholder='비밀번호 입력'
               name='password'
               value={signupInfo.password}
               onChange={handleInputChange}
            />
            <Input
               type='password'
               placeholder='비밀번호 확인'
               name='passwordConfirm'
               value={passwordConfirm}
               onChange={handleInputChange}
               isSuccess={!passwordMismatch}
               message={passwordMismatch ? '비밀번호가 일치하지 않습니다.' : null}
            />
         </section>
         <section className={'mb-6'}>
            <Input label='학부/학과' placeholder='학부/학과를 선택하세요.' value={data.student.major} />
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
               message={isNicknameValid ? '사용가능한 닉네임입니다.' : '이미 존재하는 닉네임입니다.'}
            />
            <button
               type='button'
               className={'h-4 ml-[-5rem] mt-11 text-blue-600 text-sm'}
               onClick={() => nicknameVeriication(signupInfo.nickname)}
            >
               중복확인
            </button>
         </section>
         <section className={'flex-col mb-6'}>
            <div className={'flex'}>
               <Input
                  label='휴대폰 인증'
                  type='number'
                  placeholder='-는 제외하고 입력해주세요.'
                  name='phoneNumber'
                  value={phoneNumber}
                  onChange={handleInputChange}
                  isSuccess={isPhoneVerified}
                  message={isPhoneVerified ? '인증번호가 전송되었습니다.' : null}
               />
               <button
                  type='button'
                  className={'h-4 ml-[-5rem] mt-11 text-blue-600 text-sm'}
                  onClick={() => phoneVerification(phoneNumber)}
               >
                  인증요청
               </button>
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
               />
               <button
                  type='button'
                  className={'h-4 ml-[-3rem] mt-5 text-blue-600 text-sm'}
                  onClick={() => confirmCode(code)}
               >
                  확인
               </button>
            </div>
         </section>
         <Button
            type='submit'
            className={`w-full p-2 rounded ${isFormValid ? 'bg-blue-600' : 'bg-gray-400'}`}
            disabled={!isFormValid}
         >
            확인
         </Button>
      </form>
   );
}
