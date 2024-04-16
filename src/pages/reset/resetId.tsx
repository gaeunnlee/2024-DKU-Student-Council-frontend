import { Gnb, GnbGoBack } from '@components/common/gnb';
import { ContentSection } from '@components/layouts';
import IdForm from '@components/reset/id';
import React from 'react';


export default function ResetId() {
   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
         </Gnb>
         <ContentSection className="mt-[140px]" showNav={true}>
            <h1 className='text-2xl font-extrabold ml-10 mb-[14px] mt-[52px]'>Login</h1>
            <h2 className='text-base ml-10 font-extrabold mb-[60px]'>ID 찾기</h2>
            <IdForm />
         </ContentSection>
      </React.Fragment>
   );
}
