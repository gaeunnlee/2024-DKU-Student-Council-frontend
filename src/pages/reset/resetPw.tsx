import ResetPwForm from '@components/reset/pw';
import { ROUTES } from '@constants/route';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ResetPw() {
   const location = useLocation();
   const navigate = useNavigate();
   const { state } = location;
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: false,
         margin: '140px',
         rounded: true,
      });
   });

   React.useEffect(() => {
      if (!state) {
         alert('휴대폰 인증을 먼저 해주세요');
         navigate(ROUTES.RESET.PW_VERIFY);
      }
   }, [state, navigate]);

   return (
      <React.Fragment>
         <h1 className='text-2xl font-extrabold ml-10 mb-[14px] mt-[52px]'>Login</h1>
         <h2 className='text-base ml-10 font-extrabold mb-6'>PW 재설정</h2>
         <ResetPwForm token={state} />
      </React.Fragment>
   );
}
