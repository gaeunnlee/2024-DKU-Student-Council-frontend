import { Button } from '@components/ui/button';
import Checkbox from '@components/ui/checkbox';
import { Input } from '@components/ui/input/index';
import { Label } from '@components/ui/label';
import { ROUTES } from '@constants/route';
import { usePostLogin } from '@hooks/api/auth/usePostLogin';
import { usePostOAuthLogin } from '@hooks/api/auth/usePostOAuthLogin';
import { isOAuthFlow } from '@utils/oAuth';
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { useAlert } from '@/hooks/useAlert';
import { IdPassword } from '@/types/default-interfaces';

export default function LoginForm() {
   const initLoginInfo: IdPassword = {
      studentId: '',
      password: '',
   };
   const [loginInfo, setLoginInfo] = React.useState<IdPassword>(initLoginInfo);

   const { mutate: login } = usePostLogin();
   const { mutate: oAuthLogin } = usePostOAuthLogin();
   const [searchParams] = useSearchParams();
   const { alert } = useAlert();
   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (loginInfo.studentId.length > 0 && loginInfo.password.length > 0) {
         if (isOAuthFlow(searchParams)) {
            oAuthLogin(loginInfo);
         }
         login(loginInfo);
      } else {
         alert('모두 입력해주세요');
      }
   };

   return (
      <form className='w-[336px] flex flex-col mx-auto gap-3 mt-[76px]' onSubmit={handleLogin}>
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
            <Checkbox id='saveId'>
               <Label htmlFor='saveId' className='text-[12px]'>
                  Save ID
               </Label>
            </Checkbox>
            <div className='flex text-[12px] gap-2'>
               <Link to={`${ROUTES.SIGNUP.TERMS}?${searchParams.toString()}`}>회원가입</Link>
               <span> | </span>
               <Link to={`${ROUTES.RESET.INDEX}?${searchParams.toString()}`}>Forgot ID/PW?</Link>
            </div>
         </div>
         <Button variant='default' type='submit' className='rounded-[15px]' size='default'>
            로그인
         </Button>
      </form>
   );
}
