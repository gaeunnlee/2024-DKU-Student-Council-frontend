import React from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import Heading from 'components/ui/typo/heading';
import Term from 'components/signup/term';

export default function SignupTerms() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: true,
         headingStyle: '',
         margin: '',
         rounded: true,
      });
   });

   return (
      <div className='px-10'>
         <Heading as='h1' size='lg' className='mb-[14px] mt-[53px]'>
            Sign up
         </Heading>
         <Heading as='h2' size='md' className='mb-6'>
            단국대학교 총학생회 회원가입
         </Heading>
         <Heading as='h3' size='xs' className="before:content-['●'] flex items-center gap-1">
            이용약관동의
         </Heading>
         <Term />
      </div>
   );
}
