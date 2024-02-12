import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'constants/route';
import DefaultLayout from 'layouts/DefaultLayout';
import PetitionBoard from 'pages/petition';
import NoticePost from 'pages/notice/post';
import PetitionForm from 'pages/petition/post';

import Main from 'pages';
import Menu from 'pages/menu';
import NotFound from 'pages/404';
import Login from 'pages/login';
import Signup from 'pages/signup';
import SignupTerms from 'pages/signup/terms';
import SignupVerify from 'pages/signup/verify';
import SignupInfo from 'pages/signup/info';
import Greeting from 'pages/council';
import Organization from 'pages/council/organization';
import Location from 'pages/council/location';
import Recruitment from 'pages/council/recruitment';
import MyPage from 'pages/mypage/index';
import PrivateRoute from 'PrivateRoute';
import NoticeDetail from 'pages/notice/[id]';
import NoticeBoard from 'pages/notice/index';
import PetitionDetail from 'pages/petition/[id]';
import ConferenceBoard from 'pages/conference';
import RuleBoard from 'pages/rule';
import MyPagePassword from 'pages/mypage/password';
import MyPageEdit from 'pages/mypage/edit';
import MyPageUpdate from 'pages/mypage/update';

/**
 * @description 라우터
 * @author 이호연
 */
export default function Router() {
   return (
      <BrowserRouter>
         {/* TODO: 로딩 컴포넌트 만들어 넣기 */}
         <DefaultLayout>
            <Routes>
               <Route path={ROUTES.MAIN} element={<Main />} />
               <Route path={ROUTES.MENU} element={<Menu />} />
               <Route path={ROUTES.LOGIN} element={<Login />} />
               <Route
                  path={ROUTES.MYPAGE.INDEX}
                  element={
                     <PrivateRoute>
                        <MyPage />
                     </PrivateRoute>
                  }
               />
               <Route
                  path={ROUTES.MYPAGE.PASSWORD}
                  element={
                     <PrivateRoute>
                        <MyPagePassword />
                     </PrivateRoute>
                  }
               />
               <Route
                  path={ROUTES.MYPAGE.EDIT}
                  element={
                     <PrivateRoute>
                        <MyPageEdit />
                     </PrivateRoute>
                  }
               />
               <Route
                  path={ROUTES.MYPAGE.UPDATE}
                  element={
                     <PrivateRoute>
                        <MyPageUpdate />
                     </PrivateRoute>
                  }
               />
               <Route path={ROUTES.SIGNUP.ROOT} element={<Signup />}>
                  <Route index path={ROUTES.SIGNUP.VERIFY} element={<SignupVerify />} />
                  <Route path={ROUTES.SIGNUP.TERMS} element={<SignupTerms />} />
                  <Route path={ROUTES.SIGNUP.INFO} element={<SignupInfo />} />
               </Route>
               <Route path={ROUTES.COUNCIL.GREETING} element={<Greeting />} />
               <Route path={ROUTES.COUNCIL.ORGANIZATION} element={<Organization />} />
               <Route path={ROUTES.COUNCIL.LOCATION} element={<Location />} />
               <Route path={ROUTES.COUNCIL.RECRUITMENT} element={<Recruitment />} />
               <Route path={ROUTES.PETITION.ROOT} element={<PetitionBoard />} />
               <Route path={ROUTES.PETITION.ID} element={<PetitionDetail />} />
               <Route path={ROUTES.NOTICE.ROOT} element={<NoticeBoard />} />
               <Route path={ROUTES.NOTICE.ID} element={<NoticeDetail />} />
               <Route path={ROUTES.PETITION.POST} element={<PetitionForm />} />
               <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
               <Route path={ROUTES.NOTICE.POST} element={<NoticePost />} />
               <Route path={ROUTES.CONFERENCE.ROOT} element={<ConferenceBoard />} />
               <Route path={ROUTES.RULE.ROOT} element={<RuleBoard />} />
            </Routes>
         </DefaultLayout>
      </BrowserRouter>
   );
}
