import React from 'react';
import SvgIcon from 'components/common/icon/SvgIcon';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';

export default function SignupSuccess() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: true,
         heading: '',
         subHeading: '',
         headingStyle: '',
         headingText: '',
         subHeadingText: '',
         margin: 'mt-[140px]',
         rounded: true,
      });
   });
   return (
      <div className='w-full mt-[120px]'>
         <div className='flex flex-col items-center justify-center gap-3'>
            <SvgIcon id='success' width={38} height={38} />
            <h2 className='font-bold text-xl'>회원가입 완료</h2>
            <p className='text-xl'>회원가입이 완료되었습니다.</p>
         </div>
      </div>
   );
}
