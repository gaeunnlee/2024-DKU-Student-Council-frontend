import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { ROUTES } from 'constant';
import { IIdPassword } from 'shared/interfaces/default-interfaces';
import Input from 'components/ui/input';
import { useLayout } from 'hooks/useLayout';
import { useEffectOnce } from 'hooks/useEffectOnce';

export default function Login() {
   const { setLayout } = useLayout();
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

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         heading: 'Login',
         subHeading: '단국대학교 총학생회 로그인',
         fullscreen: true,
      });
   });

   return (
      <>
         <form data-testid='login-form' onSubmit={handle.login}>
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
               placeholder='학번'
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
