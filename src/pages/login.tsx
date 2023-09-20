import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constant';
import axios from 'axios';

export default function Login() {
   const navigate = useNavigate();

   const handle = {
      login: async (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         // 로그인 로직
         const { data } = await axios.post('http://localhost:5000/login', {
            id: '12345678',
            password: 'qwer1234',
         });

         console.log(data);
         navigate(ROUTES.MAIN);
      },
   };

   return (
      <form data-testid='login-form' onSubmit={handle.login}>
         <input data-testid='id-input' type='text' placeholder='학번' />
         <input data-testid='password-input' type='password' placeholder='비밀번호' />
         <button data-testid='login-button'>로그인</button>
      </form>
   );
}
