import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';
import axios from 'axios';

interface LoginProps {
   studentId: string;
   password: string;
}

export default function Login() {
   const navigate = useNavigate();
   const [loginInfo, setLoginInfo] = useState<LoginProps>({
      studentId: '',
      password: '',
   });

   const handle = {
      login: async (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         // 로그인 로직
         const { data } = await axios.post('/user/login', loginInfo);
         console.log(data);
         alert('로그인되었습니다');
         navigate(ROUTES.MAIN);
      },
   };

   return (
      <>
         <form data-testid='login-form' onSubmit={handle.login}>
            <input
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
               placeholder='학번'
            />
            <input
               value={loginInfo.password}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setLoginInfo((prev) => {
                     return { ...prev, password: e.target.value };
                  });
               }}
               data-testid='password-input'
               type='password'
               placeholder='비밀번호'
            />
            <button data-testid='login-button'>로그인</button>
         </form>
      </>
   );
}
