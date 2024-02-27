import React, { useEffect } from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';
import Heading from 'components/ui/typo/heading';
import ResetPwForm from 'components/reset/pw';
import { useLayout } from 'hooks/useLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/route';

export default function ResetPw() {
   const location = useLocation();
   const navigate = useNavigate();
   const { state } = location;
   const data = state?.data ?? null;
   const token = data?.token;
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: false,
         margin: 'mt-[140px]',
         rounded: true,
      });
   });

   useEffect(() => {
      if (!data) {
         alert('휴대폰 인증을 먼저 해주세요');
         navigate(ROUTES.RESET.PW_VERIFY);
      }
   }, [data, navigate]);

   return (
      <>
         <Heading as='h1' size='lg' className='font-extrabold ml-10 mb-[14px] mt-[52px]'>
            Login
         </Heading>
         <Heading as='h2' size='md' className='text-base ml-10 font-extrabold mb-6'>
            PW 재설정
         </Heading>
         <ResetPwForm token={token} />
      </>
   );
}
