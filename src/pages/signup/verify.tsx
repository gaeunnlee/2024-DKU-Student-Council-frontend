import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONSTANTS, API_PATH, ROUTES } from '../../constants';
import axios, { AxiosError } from 'axios';
import { Regex } from '../../utils/regex';

const { SERVER_URL } = CONSTANTS;

export interface IVerifyInfo {
   studentId: string;
   password: string;
}

export default function SignupVerify() {
   const navigate = useNavigate();

   const [verifyInfo, setVerifyInfo] = useState<IverifyInfo>({
      studentId: '',
      password: '',
   });

   const [studentIdError, setStudentIdError] = useState<string | null>(null);
   const [passwordError, setPasswordError] = useState<string | null>(null);

   const verify = async (verifyInfo: IverifyInfo) => {
      try {
         const response = await axios.post(SERVER_URL + API_PATH.SIGNUP_VERIFY, verifyInfo);
         navigate(ROUTES.MAIN); // 테스트차 성공 시 main으로 이동
         console.log(response);
      } catch (error) {
         if (error instanceof AxiosError) return error.response;
      }
   };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setVerifyInfo({
         ...verifyInfo,
         [name]: value,
      });

      // 유효성 검사
      if (name === 'studentId') {
         if (!Regex.studentId.test(value)) {
            setStudentIdError('유효한 학번을 입력하세요 (8자리 숫자)');
         } else {
            setStudentIdError(null);
         }
      } else if (name === 'password') {
         if (!Regex.password.test(value)) {
            setPasswordError(
               '비밀번호는 8자 이상 16자 이하이며, 영문 대소문자, 숫자, 특수문자 중 3가지 이상 조합되어야 합니다.',
            );
         } else {
            setPasswordError(null);
         }
      }
   };

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (studentIdError || passwordError) {
         return;
      }
      verify(verifyInfo);
   };

   return (
      <div className='flex items-center justify-center min-h-screen'>
         <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
            <input
               type='number'
               name='studentId'
               placeholder='학번 입력'
               value={verifyInfo.studentId}
               onChange={handleInputChange}
               className='w-full p-2 mb-4 rounded border bg-gray-100'
            />
            {studentIdError && <div className='text-red-500 mb-4'>{studentIdError}</div>}
            <input
               type='password'
               name='password'
               placeholder='비밀번호 입력'
               value={verifyInfo.password}
               onChange={handleInputChange}
               className='w-full p-2 mb-4 rounded border bg-gray-100'
            />
            {passwordError && <div className='text-red-500 mb-4'>{passwordError}</div>}
            <button type='submit' className='w-full p-2 bg-blue-500 text-white rounded'>
               인증
            </button>
         </form>
      </div>
   );
}
