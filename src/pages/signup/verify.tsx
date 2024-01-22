import React, { FormEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_PATH } from 'constants/api';
import { ROUTES } from 'constants/route';
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

   const [isFormValid, setIsFormValid] = useState(false);

   const { alert } = useAlert();

   const verify = async (verifyInfo: IVerifyInfo) => {
      try {
         const { data } = await axios.post<StudentVerifyResponse>(API_PATH.USER.SIGNUP.VERIFY, verifyInfo);
         navigate(ROUTES.SIGNUP.INFO, { state: { data } });
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
   };

   useEffect(() => {
      const isStudentIdValid = Regex.studentId.test(verifyInfo.dkuStudentId);
      const isPasswordValid = verifyInfo.dkuPassword !== '';
      setIsFormValid(isStudentIdValid && isPasswordValid);
   }, [verifyInfo]);

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
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
            <Input
               type='password'
               name='dkuPassword'
               placeholder='비밀번호 입력'
               value={verifyInfo.dkuPassword}
               onChange={handleInputChange}
               className='w-full'
            />
            <p className='mb-4 text-gray-400 text-xs'>
               단국대학교 웹정보 로그인 시 사용 되는 ID, PW를 통해 학생인증이 진행됩니다. (입력한 정보는 인증
               후 즉시 폐기됩니다)
            </p>
            <Button
               type='submit'
               variant={isFormValid ? 'primary' : 'red'}
               className='w-full p-2 rounded'
               disabled={!isFormValid}
            >
               인증
            </Button>
         </form>
      </div>
   );
}
