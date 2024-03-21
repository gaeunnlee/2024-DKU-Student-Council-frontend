import PwVerifyForm from '@components/reset/code';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
import React from 'react';

export default function VerifyPw() {
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

   return (
      <React.Fragment>
         <h1 className='text-2xl font-extrabold ml-10 mb-[14px] mt-[52px]'>Login</h1>
         <h2 className='text-base ml-10 font-extrabold mb-6'>PW 재설정</h2>
         <PwVerifyForm />
      </React.Fragment>
   );
}
