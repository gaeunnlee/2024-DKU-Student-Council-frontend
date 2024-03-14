import { Button } from '@components/ui/button';
import Checkbox from '@components/ui/checkbox';
import { Input } from '@components/ui/input/index';
import { ROUTES } from '@constants/route';
import { useAuth } from '@hooks/useAuth';
import { IIdPassword } from '@shared/interfaces/default-interfaces';
import React from 'react';
import { Link } from 'react-router-dom';

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
            size='lg'
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
            size='lg'
         />
         <div className='flex justify-between mb-1'>
            <Checkbox>
               <label htmlFor='saveId' className='text-[12px]'>
                  Save ID
               </label>
            </Checkbox>
            <div className='flex text-[12px] gap-2'>
               <Link to={ROUTES.SIGNUP.VERIFY}>회원가입</Link>
               <span> | </span>
               <Link to={ROUTES.RESET.INDEX}>Forgot ID/PW?</Link>
            </div>
         </div>
         <Button variant='default' type='submit' className='rounded-[15px]' size='default'>
            로그인
         </Button>
      </form>
   );
}
