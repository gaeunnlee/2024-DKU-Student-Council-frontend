import { Gnb, GnbGoBack } from '@components/common/gnb';
import { ContentSection } from '@components/layouts';
import VerifyForm from '@components/signup/verify';
import React from 'react';


export default function SignupVerify() {
   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
         </Gnb>
         <ContentSection className="mt-[140px]">
            <div className='flex flex-col px-10 pt-12'>
               <h1 className='text-2xl font-extrabold mb-[14px]'>Sign up</h1>
               <h2 className='text-base font-extrabold mb-6'>단국대학교 총학생회 회원가입</h2>
               <h3 className="text-sm before:content-['●'] flex items-center gap-1 mb-8">학생 인증</h3>
               <VerifyForm />
            </div>
         </ContentSection>
      </React.Fragment>
   );
}
