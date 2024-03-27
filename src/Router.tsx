import { ROUTES } from '@constants/route';
import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';

const DefaultLayout = lazy(() => import('@components/layouts/DefaultLayout'));
const NotFound = lazy(() => import('@pages/404'));
const BusinessBoard = lazy(() => import('@pages/business'));
const BusinessDetail = lazy(() => import('@pages/business/[id]'));
const ConferenceBoard = lazy(() => import('@pages/conference'));
const Greeting = lazy(() => import('@pages/council'));
const Location = lazy(() => import('@pages/council/location'));
const Organization = lazy(() => import('@pages/council/organization'));
const Recruitment = lazy(() => import('@pages/council/recruitment'));
const Main = lazy(() => import('@pages/index'));
const Login = lazy(() => import('@pages/login'));
const MyPageEdit = lazy(() => import('@pages/mypage/edit'));
const MyPage = lazy(() => import('@pages/mypage/index'));
const MyPagePassword = lazy(() => import('@pages/mypage/password'));
const MyPageUpdate = lazy(() => import('@pages/mypage/update'));
const NoticeDetail = lazy(() => import('@pages/notice/[id]'));
const NoticeBoard = lazy(() => import('@pages/notice/index'));
const NoticePost = lazy(() => import('@pages/notice/post'));
const PetitionBoard = lazy(() => import('@pages/petition'));
const PetitionDetail = lazy(() => import('@pages/petition/[id]'));
const PetitionForm = lazy(() => import('@pages/petition/post'));
const ResetId = lazy(() => import('@pages/reset/resetId'));
const ResetIdPw = lazy(() => import('@pages/reset/resetIdPw'));
const ResetPw = lazy(() => import('@pages/reset/resetPw'));
const VerifyPw = lazy(() => import('@pages/reset/verifyPw'));
const RuleBoard = lazy(() => import('@pages/rule'));
const SignupVerify = lazy(() => import('@pages/signup'));
const SignupInfo = lazy(() => import('@pages/signup/info'));
const SignupSuccess = lazy(() => import('@pages/signup/success'));
const SignupTerms = lazy(() => import('@pages/signup/terms'));

const Router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
         {
            path: ROUTES.MAIN,
            element: (
               <DefaultLayout>
                  <Main />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.LOGIN,
            element: (
               <DefaultLayout>
                  <Login />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.RESET.INDEX,
            element: (
               <DefaultLayout>
                  <ResetIdPw />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.RESET.ID,
            element: (
               <DefaultLayout>
                  <ResetId />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.RESET.PW_VERIFY,
            element: (
               <DefaultLayout>
                  <VerifyPw />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.RESET.PW,
            element: (
               <DefaultLayout>
                  <ResetPw />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.MYPAGE.INDEX,
            element: (
               <DefaultLayout>
                  <MyPage />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.MYPAGE.PASSWORD,
            element: (
               <DefaultLayout>
                  <MyPagePassword />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.MYPAGE.EDIT,
            element: (
               <DefaultLayout>
                  <MyPageEdit />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.MYPAGE.UPDATE,
            element: (
               <DefaultLayout>
                  <MyPageUpdate />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.SIGNUP.ROOT,
            element: (
               <DefaultLayout>
                  <SignupVerify />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.SIGNUP.TERMS,
            element: (
               <DefaultLayout>
                  <SignupTerms />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.SIGNUP.INFO,
            element: (
               <DefaultLayout>
                  <SignupInfo />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.SIGNUP.SUCCESS,
            element: (
               <DefaultLayout>
                  <SignupSuccess />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.COUNCIL.GREETING,
            element: (
               <DefaultLayout>
                  <Greeting />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.COUNCIL.ORGANIZATION,
            element: (
               <DefaultLayout>
                  <Organization />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.COUNCIL.LOCATION,
            element: (
               <DefaultLayout>
                  <Location />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.COUNCIL.RECRUITMENT,
            element: (
               <DefaultLayout>
                  <Recruitment />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.PETITION.ROOT,
            element: (
               <DefaultLayout>
                  <PetitionBoard />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.PETITION.ID(':id'),
            element: (
               <DefaultLayout>
                  <PetitionDetail />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.PETITION.POST,
            element: (
               <DefaultLayout>
                  <PetitionForm />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.NOTICE.ROOT,
            element: (
               <DefaultLayout>
                  <NoticeBoard />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.NOTICE.ID(':id'),
            element: (
               <DefaultLayout>
                  <NoticeDetail />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.NOTICE.POST,
            element: (
               <DefaultLayout>
                  <NoticePost />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.CONFERENCE.ROOT,
            element: (
               <DefaultLayout>
                  <ConferenceBoard />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.RULE.ROOT,
            element: (
               <DefaultLayout>
                  <RuleBoard />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.BUSINESS.CATEGORY(':category'),
            element: (
               <DefaultLayout>
                  <BusinessBoard />
               </DefaultLayout>
            ),
         },
         {
            path: ROUTES.BUSINESS.DETAIL(':category', ':id'),
            element: (
               <DefaultLayout>
                  <BusinessDetail />
               </DefaultLayout>
            ),
         },
      ],
   },
]);
export default Router;
