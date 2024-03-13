import IdForm from '@components/reset/id';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
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
      <React.Fragment>
         <h1 className='font-extrabold ml-10 mb-[14px] mt-[52px]'>Login</h1>
         <h2 className='ml-10 font-extrabold mb-[60px]'>ID 찾기</h2>
         <IdForm />
      </React.Fragment>
   );
}
