import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_PATH, ROUTES } from 'constant';
import axios from 'axios';
import { Regex } from 'utils/regex';
import Input from 'components/ui/input';
import { useAlert } from 'hooks/useAlert';
import Button from 'components/ui/button';

interface StudentVerifyResponse {
   signupToken: string;
   student: {
      studentName: string;
      studentId: string;
      major: string;
   };
}

interface IVerifyInfo {
   dkuStudentId: string;
   dkuPassword: string;
}

export default function SignupVerify() {
   const navigate = useNavigate();

   const [verifyInfo, setVerifyInfo] = useState<IVerifyInfo>({
      dkuStudentId: '',
      dkuPassword: '',
   });

   const [studentIdError, setStudentIdError] = useState<string | null>(null);
   const [passwordError, setPasswordError] = useState<string | null>(null);

   const { alert } = useAlert();

   const verify = async (verifyInfo: IVerifyInfo) => {
      try {
         const response = await axios.post<StudentVerifyResponse>(API_PATH.USER.SIGNUP.VERIFY, verifyInfo);
         navigate(ROUTES.MAIN); // 테스트차 성공 시 main으로 이동
         console.log(response);
      } catch (error) {
         alert(error);
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

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (studentIdError || passwordError) {
         return;
      }
      verify(verifyInfo);
   };

   return (
      <div className='flex items-center justify-center min-h-screen'>
         <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
            <Input
               type='number'
               name='dkuStudentId'
               placeholder='학번 입력'
               value={verifyInfo.dkuStudentId}
               onChange={handleInputChange}
               className='w-full'
            />
            {studentIdError && <div className='text-red-500 mb-4'>{studentIdError}</div>}
            <Input
               type='password'
               name='dkuPassword'
               placeholder='비밀번호 입력'
               value={verifyInfo.dkuPassword}
               onChange={handleInputChange}
               className='w-full'
            />
            {passwordError && <div className='text-red-500 mb-4'>{passwordError}</div>}
            <Button type='submit' variant='primary' className='w-full'>
               인증
            </Button>
         </form>
      </div>
   );
}
