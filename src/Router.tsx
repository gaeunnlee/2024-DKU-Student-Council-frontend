import DefaultLayout from '@components/layouts/DefaultLayout';
import { ROUTES } from '@constants/route';
import NotFound from '@pages/404';
import BusinessBoard from '@pages/business';
import BusinessDetail from '@pages/business/[id]';
import ConferenceBoard from '@pages/conference';
import Greeting from '@pages/council';
import Location from '@pages/council/location';
import Organization from '@pages/council/organization';
import Recruitment from '@pages/council/recruitment';
import Main from '@pages/index';
import Login from '@pages/login';
import MyPageEdit from '@pages/mypage/edit';
import MyPage from '@pages/mypage/index';
import MyPagePassword from '@pages/mypage/password';
import MyPageUpdate from '@pages/mypage/update';
import NoticeDetail from '@pages/notice/[id]';
import NoticeBoard from '@pages/notice/index';
import NoticePost from '@pages/notice/post';
import PetitionBoard from '@pages/petition';
import PetitionDetail from '@pages/petition/[id]';
import PetitionForm from '@pages/petition/post';
import ResetId from '@pages/reset/resetId';
import ResetIdPw from '@pages/reset/resetIdPw';
import ResetPw from '@pages/reset/resetPw';
import VerifyPw from '@pages/reset/verifyPw';
import RuleBoard from '@pages/rule';
import SignupVerify from '@pages/signup';
import SignupInfo from '@pages/signup/info';
import SignupSuccess from '@pages/signup/success';
import SignupTerms from '@pages/signup/terms';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


export default function Router() {
   return (
      <DefaultLayout>
         <Routes>
            <Route path={ROUTES.MAIN} element={<Main />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.RESET.INDEX} element={<ResetIdPw />} />
            <Route path={ROUTES.RESET.ID} element={<ResetId />} />
            <Route path={ROUTES.RESET.PW_VERIFY} element={<VerifyPw />} />
            <Route path={ROUTES.RESET.PW} element={<ResetPw />} />
            <Route path={ROUTES.MYPAGE.INDEX} element={<MyPage />} />
            <Route path={ROUTES.MYPAGE.PASSWORD} element={<MyPagePassword />} />
            <Route path={ROUTES.MYPAGE.EDIT} element={<MyPageEdit />} />
            <Route path={ROUTES.MYPAGE.UPDATE} element={<MyPageUpdate />} />
            <Route index path={ROUTES.SIGNUP.ROOT} element={<SignupVerify />} />
            <Route path={ROUTES.SIGNUP.TERMS} element={<SignupTerms />} />
            <Route path={ROUTES.SIGNUP.INFO} element={<SignupInfo />} />
            <Route path={ROUTES.SIGNUP.SUCCESS} element={<SignupSuccess />} />
            <Route path={ROUTES.COUNCIL.GREETING} element={<Greeting />} />
            <Route path={ROUTES.COUNCIL.ORGANIZATION} element={<Organization />} />
            <Route path={ROUTES.COUNCIL.LOCATION} element={<Location />} />
            <Route path={ROUTES.COUNCIL.RECRUITMENT} element={<Recruitment />} />
            <Route path={ROUTES.PETITION.ROOT} element={<PetitionBoard />} />
            <Route path={ROUTES.PETITION.ID(':id')} element={<PetitionDetail />} />
            <Route path={ROUTES.NOTICE.ROOT} element={<NoticeBoard />} />
            <Route path={ROUTES.NOTICE.ID(':id')} element={<NoticeDetail />} />
            <Route path={ROUTES.PETITION.POST} element={<PetitionForm />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            <Route path={ROUTES.NOTICE.POST} element={<NoticePost />} />
            <Route path={ROUTES.CONFERENCE.ROOT} element={<ConferenceBoard />} />
            <Route path={ROUTES.RULE.ROOT} element={<RuleBoard />} />
            <Route path={ROUTES.BUSINESS.CATEGORY(':category')} element={<BusinessBoard />} />
            <Route path={ROUTES.BUSINESS.DETAIL(':id', ':category')} element={<BusinessDetail />} />
         </Routes>
      </DefaultLayout>
   );
}
