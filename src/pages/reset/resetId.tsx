import { useEffectOnce } from 'hooks/useEffectOnce';
import Heading from 'components/ui/typo/heading';
import IdForm from 'components/reset/id';
import { useLayout } from 'hooks/useLayout';
import React from 'react';

export default function ResetId() {
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
      <>
         <Heading as='h1' size='lg' className='font-extrabold ml-10 mb-[14px] mt-[52px]'>
            Login
         </Heading>
         <Heading as='h2' size='sm' className='ml-10 font-extrabold mb-[60px]'>
            ID 찾기
         </Heading>
         <IdForm />
      </>
   );
}
