import React from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';
import Heading from 'components/ui/typo/heading';
import PwVerifyForm from 'components/reset/code';
import { useLayout } from 'hooks/useLayout';

export default function VerifyPw() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: false,
         margin: '[140px]',
         rounded: true,
      });
   });

   return (
      <>
         <Heading as='h1' size='lg' className='font-extrabold ml-10 mb-[14px] mt-[52px]'>
            Login
         </Heading>
         <Heading as='h2' size='md' className='text-base ml-10 font-extrabold mb-6'>
            PW 재설정
         </Heading>
         <PwVerifyForm />
      </>
   );
}
