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
         margin: '[139px]',
         rounded: true,
      });
   });
   return (
      <>
         <Heading as='h1' size='md' className='mb-4 mt-[69px] ml-10'>
            Login
         </Heading>
         <Heading as='h2' size='xs' className='ml-10 mb-[60px]'>
            ID 찾기
         </Heading>
         <IdForm />
      </>
   );
}
