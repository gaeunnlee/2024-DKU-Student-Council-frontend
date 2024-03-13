import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import Message from '@components/ui/typo/message';
import { usePostResetPw } from '@hooks/query/reset/mutation';
import { useAlert } from '@hooks/useAlert';
import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResetPwForm({ token }: { token: string }) {
   const [password, setPassword] = React.useState<string>('');
   const [passwordConfirm, setPasswordConfirm] = React.useState<string>('');
   const [passwordMismatch, setPasswordMismatch] = React.useState<boolean>(false);
   const navigate = useNavigate();
   const { alert } = useAlert();

   const { mutate, isSuccess: resetSuccess } = usePostResetPw();

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
      if (
         password.length > 7 &&
         password.length < 17 &&
         !passwordMismatch &&
         /^(?=.*[a-zA-Z])(?=.*[0-9]).{7,17}$/.test(password)
      ) {
         mutate({ token, password });
      } else {
         alert('비밀번호를 올바르게 입력해주세요.');
      }
   };

   React.useEffect(() => {
      if (resetSuccess) {
         alert('비밀번호가 변경되었습니다.');
         navigate('/login');
      }
   }, [resetSuccess]);

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
               className='rounded-[10px]'
            />
            <Input
               type='password'
               placeholder='비밀번호 재입력'
               name='passwordConfirm'
               value={passwordConfirm}
               onChange={handleInputChange}
               size='md'
               className='rounded-[10px]'
            />
         </div>
         {passwordMismatch && <Message>비밀번호가 일치하지 않습니다.</Message>}
         <p className="text-[13px] mb-8 whitespace-pre-wrap before:content-['●'] before:mr-1">
            {'비밀번호는 영문과 숫자 1자이상을 포함하는 \n8~16자리여야합니다.'}
         </p>
         <Button className='rounded-[30px]' onClick={handleResetPw} size='md' variant='default'>
            변경
         </Button>
      </form>
   );
}
