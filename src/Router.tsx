import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constant';
import Main from './pages';
import NotFound from './pages/404';
import Login from './pages/login';
import DefaultLayout from 'layouts/DefaultLayout';
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
            <DefaultLayout>
               <Routes>
                  <Route path={ROUTES.MAIN} element={<Main />} />
                  <Route path={ROUTES.LOGIN} element={<Login />} />
                  <Route path={ROUTES.SIGNUP.VERIFY} element={<SignupVerify />} />
                  <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
               </Routes>
            </DefaultLayout>
         </Suspense>
      </BrowserRouter>
   );
}
