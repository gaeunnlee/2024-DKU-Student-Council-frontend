import Input from 'components/ui/input';
import Text from 'components/ui/typo/text';
import Button from 'components/ui/button';
import React, { useEffect } from 'react';
import { Regex } from 'utils/regex';
import { usePostStudentVerify } from 'hooks/query/signup/mutation';
import { IVerifyInfo } from 'api/signup/types/signup';

export default function VerifyForm() {
   const [verifyInfo, setVerifyInfo] = React.useState<IVerifyInfo>({
      dkuStudentId: '',
      dkuPassword: '',
   });

   const [isFormValid, setIsFormValid] = React.useState(false);

   const { mutate } = usePostStudentVerify();

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
      <>
         <form className='flex flex-col gap-2 max-w-md mx-auto'>
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
            <Text
               textColor='gray02'
               fontSize='10.5px'
               className="mb-8 whitespace-pre-wrap mt-2 before:content-['●'] before:mr-1"
            >
               {
                  '단국대학교 웹정보 로그인 시 사용 되는 ID, PW를 통해\n 학생인증이 진행됩니다. (입력한 정보는 인증 후 즉시 폐기됩니다)'
               }
            </Text>
            <Button
               size='md'
               variant='default'
               rounded='20px'
               isDisabled={!isFormValid}
               onClick={() => mutate(verifyInfo)}
            >
               인증
            </Button>
         </form>
      </>
   );
}
