import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { UserVerifyInfo } from '@hooks/api/signup/usePostStudentVerify';
import { usePostStudentVerify } from '@hooks/api/signup/usePostStudentVerify';
import { Regex } from '@utils/regex';
import React, { useEffect } from 'react';

export default function VerifyForm() {
   const [verifyInfo, setVerifyInfo] = React.useState<UserVerifyInfo>({
      dkuStudentId: '',
      dkuPassword: '',
   });

   const [isFormValid, setIsFormValid] = React.useState(false);

   const { mutate } = usePostStudentVerify();

   const handleVerifySubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      mutate(verifyInfo);
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

   return (
      <React.Fragment>
         <form onSubmit={handleVerifySubmit} className='flex flex-col gap-2 max-w-md mx-auto'>
            <Input
               type='number'
               name='dkuStudentId'
               placeholder='학번 입력'
               value={verifyInfo.dkuStudentId}
               onChange={handleInputChange}
               size='md'
               className='placeholder:text-[14px]'
            />
            <Input
               type='password'
               name='dkuPassword'
               placeholder='비밀번호 입력'
               value={verifyInfo.dkuPassword}
               onChange={handleInputChange}
               size='md'
               className='placeholder:text-[14px]'
            />
            <p className="text-[10.5px] text-gray02 mb-8 whitespace-pre-wrap mt-2 before:content-['●'] before:mr-1">
               {
                  '단국대학교 웹정보 로그인 시 사용 되는 ID, PW를 통해\n 학생인증이 진행됩니다. (입력한 정보는 인증 후 즉시 폐기됩니다)'
               }
            </p>
            <Button size='md' variant='default' className='rounded-[20px]' disabled={!isFormValid}>
               인증
            </Button>
         </form>
      </React.Fragment>
   );
}
