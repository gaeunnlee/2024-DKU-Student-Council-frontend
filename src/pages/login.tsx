import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constant';
import { useAuth } from '../hooks/useAuth';

export interface ILoginInfo {
   studentId: string;
   password: string;
}

export default function Login() {
   const [loginInfo, setLoginInfo] = React.useState<ILoginInfo>({
      studentId: '',
      password: '',
   });
   const { login } = useAuth();

   const handle = {
      login: async (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         // 로그인 로직
         login(loginInfo);
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
         {/* ROUTES에 아래 페이지 경로 업데이트시 변경 예정 */}
         <Link to={ROUTES.NOT_FOUND}>회원가입</Link>
         <Link to={ROUTES.NOT_FOUND}>ID/PW 찾기</Link>
      </>
   );
}
