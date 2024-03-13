import VerifyForm from '@components/signup/verify';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
import React from 'react';

export default function SignupVerify() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: true,
         margin: '[140px]',
         rounded: true,
      });
   });

   return (
      <div className='flex flex-col px-10 pt-12'>
         <h1 className='mb-[14px]'>Sign up</h1>
         <h2 className='mb-6'>단국대학교 총학생회 회원가입</h2>
         <h3 className="text-sm before:content-['●'] flex items-center gap-1 mb-8">학생 인증</h3>
         <VerifyForm />
      </div>
   );
}
