import Input from 'components/ui/input';
import Button from 'components/ui/button';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { IIdPassword } from 'shared/interfaces/default-interfaces';
import Checkbox from 'components/ui/checkbox';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/route';
import Text from 'components/ui/typo/text';

export default function LoginForm() {
   const initLoginInfo: IIdPassword = {
      studentId: '',
      password: '',
   };
   const [loginInfo, setLoginInfo] = React.useState<IIdPassword>(initLoginInfo);
   const { login } = useAuth();

   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      login(loginInfo);
   };

   return (
      <form
         className='w-[336px] flex flex-col mx-auto gap-3 mt-[76px]'
         onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            handleLogin(e);
         }}
      >
         <Input
            value={loginInfo.studentId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
               if (e.target.value.length < 9) {
                  setLoginInfo((prev) => {
                     return { ...prev, studentId: e.target.value };
                  });
               }
            }}
            type='number'
            placeholder='Student ID              @dankook.ac.kr'
            className='placeholder:text-[14px]'
            size='lg'
            fontSize='14px'
         />
         <Input
            value={loginInfo.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
               setLoginInfo((prev) => {
                  return { ...prev, password: e.target.value };
               });
            }}
            type='password'
            placeholder='Password'
            className='placeholder:text-[14px]'
            size='lg'
         />
         <div className='flex justify-between mb-1'>
            <Checkbox>
               <Text fontSize='12px'>Save ID</Text>
            </Checkbox>
            <Link to={ROUTES.RESET.INDEX}>
               <Text fontSize='12px'>Forgot password?</Text>
            </Link>
         </div>
         <Button variant='default' type='submit' rounded='15px' size='lg'>
            로그인
         </Button>
      </form>
   );
}
