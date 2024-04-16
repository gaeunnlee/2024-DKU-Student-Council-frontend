import { Gnb, GnbGoBack } from '@components/common/gnb';
import { ContentSection } from '@components/layouts';
import InfoForm from '@components/signup/info';
import { ROUTES } from '@constants/route';
import { useAlert } from '@hooks/useAlert';
import React, { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


export default function SignupInfo() {
   const navigate = useNavigate();
   const location = useLocation();
   const { alert } = useAlert();
   const { state } = location || {};
   const data = state?.data ?? null;
   const signupToken = data?.signupToken ?? null;

   const handleVerify = useCallback(() => {
      if (!data) {
         alert('학생 인증을 완료해주세요');
         navigate(ROUTES.SIGNUP.ROOT);
      }
   }, [data, alert, navigate]);

   React.useEffect(() => {
      handleVerify();
   }, [handleVerify]);

   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
         </Gnb>
         <ContentSection className="mt-[41px] mb-5">
            <div className='flex flex-col px-10 pt-12'>
               <h1 className='text-2xl font-extrabold mb-[14px]'>Sign up</h1>
               <h2 className='text-base font-extrabold mb-6'>단국대학교 총학생회 회원가입</h2>
               <h3 className="text-sm before:content-['●'] flex items-center gap-1 mb-8">회원 정보 입력</h3>
               <InfoForm signupToken={signupToken} />
            </div>
         </ContentSection>
      </React.Fragment>
   );
}
