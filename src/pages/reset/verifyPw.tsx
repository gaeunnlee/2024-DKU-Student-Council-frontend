import { Gnb, GnbGoBack } from '@components/common/gnb';
import { ContentSection } from '@components/layouts';
import PwVerifyForm from '@components/reset/code';
import React from 'react';


export default function VerifyPw() {
   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
         </Gnb>
         <ContentSection className="mt-[140px]" showNav={true}>
            <h1 className='text-2xl font-extrabold ml-10 mb-[14px] mt-[52px]'>Login</h1>
            <h2 className='text-base ml-10 font-extrabold mb-6'>PW 재설정</h2>
            <PwVerifyForm />
         </ContentSection>
      </React.Fragment>
   );
}
