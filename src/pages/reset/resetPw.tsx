import { Gnb, GnbGoBack } from '@components/common/gnb';
import { ContentSection } from '@components/layouts';
import ResetPwForm from '@components/reset/pw';
import { ROUTES } from '@constants/route';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export default function ResetPw() {
   const location = useLocation();
   const navigate = useNavigate();
   const { state } = location;

   React.useEffect(() => {
      if (!state) {
         alert('휴대폰 인증을 먼저 해주세요');
         navigate(ROUTES.RESET.PW_VERIFY);
      }
   }, [state, navigate]);

   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
         </Gnb>
         <ContentSection className="mt-[140px]" showNav={true}>
            <h1 className='text-2xl font-extrabold ml-10 mb-[14px] mt-[52px]'>Login</h1>
            <h2 className='text-base ml-10 font-extrabold mb-6'>PW 재설정</h2>
            <ResetPwForm token={state} />
         </ContentSection>
      </React.Fragment>
   );
}
