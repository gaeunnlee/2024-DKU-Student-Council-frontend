import Term from '@components/signup/term';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
import React from 'react';

export default function SignupTerms() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: true,
         margin: '[30px]',
         rounded: true,
      });
   });

   return (
      <div className='px-10'>
         <h1 className='mb-[14px] mt-[53px]'>Sign up</h1>
         <h2 className='mb-6'>단국대학교 총학생회 회원가입</h2>
         <h3 className="before:content-['●'] flex items-center gap-1">이용약관동의</h3>
         <Term />
      </div>
   );
}
