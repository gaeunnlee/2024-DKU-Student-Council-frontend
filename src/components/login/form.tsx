import Input from 'components/ui/input';
import Button from 'components/ui/button';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { IIdPassword } from 'shared/interfaces/default-interfaces';
import Checkbox from 'components/ui/input/checkbox';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/route';

export default function LoginForm() {
   const initLoginInfo: IIdPassword = {
      studentId: '',
      password: '',
   };
   const [loginInfo, setLoginInfo] = React.useState<IIdPassword>(initLoginInfo);
   const { login } = useAuth();

   const handleLogin = () => {
      login(loginInfo);
   };

   return (
      <form className='flex flex-col mx-auto gap-3 mt-[76px]'>
         <Input
            value={loginInfo.studentId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
               if (e.target.value.length < 9) {
                  setLoginInfo((prev) => {
                     return { ...prev, studentId: e.target.value };
                  });
               }
            }}
            data-testid='id-input'
            type='number'
            placeholder='Student ID'
            className='w-[311px]'
         />
         <Input
            value={loginInfo.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
               setLoginInfo((prev) => {
                  return { ...prev, password: e.target.value };
               });
            }}
            data-testid='password-input'
            type='password'
            placeholder='Password'
            className='w-[311px]'
         />
         <div className='flex justify-between'>
            <Checkbox name='Save ID' label='Save ID' />
            <Link to={ROUTES.SIGNUP.INFO}>
               <p className='text-xs'>Forgot password?</p>
            </Link>
         </div>
         <Button type='submit' onClick={handleLogin} className='py-3 rounded-[15px]'>
            로그인
         </Button>
      </form>
   );
}
