import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import Main from './pages';
import NotFound from './pages/404';
import Login from './pages/login';
import SignupVerify from './pages/signup/verify';

/**
 * @description 라우터
 * @author 이호연
 */
export default function Router() {
   return (
      <BrowserRouter>
         {/* TODO: 로딩 컴포넌트 만들어 넣기 */}
         <Suspense fallback={<div>loading...</div>}>
            <Routes>
               <Route path={ROUTES.MAIN} element={<Main />} />
               <Route path={ROUTES.LOGIN} element={<Login />} />
               <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
               <Route path={ROUTES.SIGNUP_VERIFY} element={<SignupVerify />} />
            </Routes>
         </Suspense>
      </BrowserRouter>
   );
}
