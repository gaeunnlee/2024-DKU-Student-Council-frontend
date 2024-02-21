import Input from 'components/ui/input';
import Button from 'components/common/button';
import { useAuth } from 'hooks/useAuth';
import React, { FormEvent } from 'react';
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

   const handle = {
      login: (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         login(loginInfo);
      },
   };

   //TODO) 비밀번호 찾기 라우팅 시 path 변경

   return (
      <form
         data-testid='login-form'
         onSubmit={handle.login}
         className='flex flex-col mx-auto gap-3 mt-[76px]'
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
            data-testid='id-input'
            type='number'
            placeholder='Student ID'
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
         />
         <div className='flex justify-between'>
            <Checkbox name='Save ID' label='Save ID' />
            <Link to={ROUTES.SIGNUP.INFO}>
               <p className='text-xs'>Forgot password?</p>
            </Link>
         </div>
         <Button className='py-3 rounded-[15px]'>로그인</Button>
      </form>
   );
}
