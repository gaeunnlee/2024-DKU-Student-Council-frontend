import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constant';
import DefaultLayout from 'layouts/DefaultLayout';
import Nav from 'components/common/nav';

import Main from 'pages';
import NotFound from 'pages/404';
import Login from 'pages/login';
import Signup from 'pages/signup';
import SignupVerify from 'pages/signup/verify';
import SignupTerms from 'pages/signup/terms';
import Gnb from 'components/common/gnb';

/**
 * @description 라우터
 * @author 이호연
 */
export default function Router() {
   return (
      <BrowserRouter>
         <Gnb left={<Gnb.Notification />} center={<Gnb.Logo />} />
         {/* TODO: 로딩 컴포넌트 만들어 넣기 */}
         <Suspense fallback={<div>loading...</div>}>
            <DefaultLayout>
               <Routes>
                  <Route path={ROUTES.MAIN} element={<Main />} />
                  <Route path={ROUTES.LOGIN} element={<Login />} />
                  <Route path={ROUTES.SIGNUP.ROOT} element={<Signup />}>
                     <Route index path={ROUTES.SIGNUP.VERIFY} element={<SignupVerify />} />
                     <Route path={ROUTES.SIGNUP.TERMS} element={<SignupTerms />} />
                  </Route>
                  <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
               </Routes>
            </DefaultLayout>
         </Suspense>
         <Nav />
      </BrowserRouter>
   );
}
