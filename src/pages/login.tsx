import { Gnb, GnbGoBack } from '@components/common/gnb';
import { GnhSubtitle, GnhTitle } from '@components/common/gnh';
import { HeaderSection, ContentSection } from '@components/layouts';
import LoginForm from '@components/login/form';
import { HEADING_TEXT } from '@constants/heading';
import React from 'react';

export default function Login() {
   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack url='/' />
         </Gnb>
         <HeaderSection className='pt-9 pb-[51px] text-center'>
            <GnhTitle className='mb-[19px]'>{HEADING_TEXT.LOGIN.HEAD}</GnhTitle>
            <GnhSubtitle className='font-extrabold'>{HEADING_TEXT.LOGIN.SUBHEAD}</GnhSubtitle>
         </HeaderSection>
         <ContentSection>
            <LoginForm />
         </ContentSection>
      </React.Fragment>
   );
}
