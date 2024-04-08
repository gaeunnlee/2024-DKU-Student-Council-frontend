import MyPageLayout from '@components/layouts/MyPageLayout';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { usePostLogin } from '@hooks/api/auth/usePostLogin';
import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyPagePassword() {
   const [loginInfo, setLoginInfo] = useState({ studentId: '', password: '' });
   const getStudentId = (id: string) => setLoginInfo((prev) => ({ ...prev, studentId: id }));
   const { mutate, isSuccess: isLogin } = usePostLogin();
   const navigate = useNavigate();

   const login = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      mutate(loginInfo);
   };

   useEffect(() => {
      isLogin && navigate('/mypage/edit');
   }, [isLogin]);

   return (
      <MyPageLayout getStudentId={getStudentId}>
         <form className='w-full p-4 flex flex-col gap-4 mt-12' onSubmit={login}>
            <p className='font-bold text-lg'>비밀번호를 입력해주세요</p>
            <Input
               type='password'
               placeholder='password'
               value={loginInfo.password}
               size='full'
               onChange={(e) => {
                  setLoginInfo((prev) => ({ ...prev, password: e.target.value }));
               }}
            />
            <Button size='default' className='rounded-lg'>
               확인
            </Button>
         </form>
      </MyPageLayout>
   );
}
