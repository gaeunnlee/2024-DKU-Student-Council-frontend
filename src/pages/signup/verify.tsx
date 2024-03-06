import React from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import Heading from 'components/ui/typo/heading';
import VerifyForm from 'components/signup/verify';

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
         <Heading as='h1' size='lg' className='mb-[14px]'>
            Sign up
         </Heading>
         <Heading as='h2' size='md' className='mb-6'>
            단국대학교 총학생회 회원가입
         </Heading>
         <Heading as='h3' size='xs' className="text-sm before:content-['●'] flex items-center gap-1 mb-8">
            학생 인증
         </Heading>
         <VerifyForm />
      </div>
   );
}
