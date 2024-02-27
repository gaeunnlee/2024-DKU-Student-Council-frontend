import Button from 'components/ui/button';
import Input from 'components/ui/input';
import Message from 'components/ui/typo/message';
import Text from 'components/ui/typo/text';
import { usePostResetPw } from 'hooks/query/reset/mutation';
import React, { ChangeEvent, useState } from 'react';

export default function ResetPwForm({ token }: { token: string }) {
   const [password, setPassword] = useState<string>('');
   const [passwordConfirm, setPasswordConfirm] = useState<string>('');
   const [passwordMismatch, setPasswordMismatch] = useState<boolean>(false);

   const { mutate } = usePostResetPw();

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if (name === 'password') {
         setPassword(value);
         setPasswordMismatch(passwordConfirm !== value);
      } else if (name === 'passwordConfirm') {
         setPasswordConfirm(value);
         setPasswordMismatch(password !== value);
      }
   };

   const handleResetPw = () => {
      mutate({ token, password });
   };

   return (
      <form className='flex flex-col mx-auto w-[311px]'>
         <div className='flex flex-col gap-2 mb-4'>
            <Input
               type='password'
               placeholder='비밀번호 입력'
               name='password'
               value={password}
               onChange={handleInputChange}
               size='md'
               borderRadius='10px'
            />
            <Input
               type='password'
               placeholder='비밀번호 재입력'
               name='passwordConfirm'
               value={passwordConfirm}
               onChange={handleInputChange}
               size='md'
               borderRadius='10px'
            />
         </div>
         {passwordMismatch && <Message>비밀번호가 일치하지 않습니다.</Message>}
         <Text fontSize='13px' className="mb-8 whitespace-pre-wrap before:content-['●'] before:mr-1">
            {'비밀번호는 영문과 숫자 1자이상을 포함하는 \n8~16자리여야합니다.'}
         </Text>
         <Button borderRadius='30px' onClick={handleResetPw} size='md' variant='default'>
            변경
         </Button>
      </form>
   );
}
