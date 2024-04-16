import { Gnb, GnbGoBack } from '@components/common/gnb';
import { ContentSection } from '@components/layouts';
import Term from '@components/signup/term';
import React from 'react';


export default function SignupTerms() {
   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
         </Gnb>
         <ContentSection className="mt-[30px] mb-5">
            <div className='px-10 pt-[60px]'>
               <h1 className='text-2xl font-extrabold mb-[14px]'>Sign up</h1>
               <h2 className='text-base font-extrabold mb-6'>단국대학교 총학생회 회원가입</h2>
               <h3 className="text-sm before:content-['●'] flex items-center gap-1">이용약관동의</h3>
               <Term />
            </div>
         </ContentSection>
      </React.Fragment>
   );
}
